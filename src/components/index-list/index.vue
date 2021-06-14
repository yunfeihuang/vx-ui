<template>
  <div class="vx-index-list">
    <div class="vx-index-list--each" @scroll="handleScroll">
      <template v-for="(group, i) in data" :key="i">
        <div class="vx-index-list--title">{{group.label}}</div>
        <div class="vx-index-list--group">
          <div class="vx-index-list--item" v-for="(item, index) in group.items" :key="index"  @click="handleClick(item.value)">
            <slot v-if="$slots.default"></slot>
            <template v-else>{{item.label}}</template>
          </div>
        </div>
      </template>
    </div>
    <div class="vx-index-list--nav">
      <div v-for="(item, index) in navList" :key="index" :class="{'is-active': index === 0}" @click="handleGroup(index)">{{item}}</div>
    </div>
    <div class="vx-index-list--fixed">{{currentCharAt || ' '}}</div>
  </div>
</template>
<script>
export default {
  name: 'VxIndexList',
  props: {
    data: {
      type: Array
    }
  },
  data () {
    let navList = this.data.map(item => {
      return item.label.charAt(0)
    })
    return {
      navList,
      currentCharAt: navList[0]
    }
  },
  watch: {
    data (value) {
      let navList = value.map(item => {
        return item.label.charAt(0)
      })
      this.navList = navList
      this.currentCharAt = navList[0]
    }
  },
  updated () {
    this.$nextTick(this.init)
  },
  mounted () {
    this.init()
    !this.supportSticky() && window.addEventListener('resize', this.handleResize, false)
  },
  beforeUnmount () {
    !this.supportSticky() && window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    init () {
      this.$$scrollNode = this.$el.querySelector('.vx-index-list--each')
      this.$$titleNodes = Array.from(this.$el.querySelectorAll('.vx-index-list--title'))
      this.$$titleNodes.forEach(node => {
        node._offsetTop = node.offsetTop
      })
      this.$$navNodes = Array.from(this.$el.querySelectorAll('.vx-index-list--nav div'))
      this.$$fixedNode = this.$el.querySelector('.vx-index-list--fixed')
      if (!this.supportSticky()) {
        this.$$fixedNode.style.display = 'none'
      }
      this.$$Y = this.$$fixedNode.offsetHeight
    },
    supportSticky () {
      if (this.$$supportSticky !== undefined) {
        return this.$$supportSticky
      }
      let node = document.createElement('div')
      node.style.cssText = 'position:-webkit-sticky;position:sticky;'
      this.$$supportSticky = (node.style.cssText || '').indexOf('sticky') > -1
      return this.$$supportSticky
    },
    activeNavItem (index) {
      let _node = this.$$navNodes[index]
      this.$$navNodes.forEach(node => {
        if (_node === node) {
          requestAnimationFrame(() => {
            node.classList.add('is-active')
          })
        } else {
          requestAnimationFrame(() => {
            node.classList.remove('is-active')
          })
        }
      })
    },
    handleScroll () {
      let scrollTop = this.$$scrollNode.scrollTop
      this.$$titleNodes.forEach((node, index) => {
        let position = node._offsetTop - scrollTop
        if (position < this.$$Y && position > 0) {
          !this.supportSticky() && requestAnimationFrame(() => {
            this.$$fixedNode.style.top = `-${this.$$Y - position - 1}px`
          })
        } else if (position <= 0) {
          !this.supportSticky() && requestAnimationFrame(() => {
            this.$$fixedNode.style.top = ''
            this.$$fixedNode.innerHTML = node.innerHTML.charAt(0)
          })
          this.activeNavItem(index)
        }
      })
    },
    handleResize () {
      this.init()
      this.handleScroll()
    },
    handleGroup (index) {
      let node = this.$$titleNodes[index]
      node.offsetParent.scrollTop = node._offsetTop
    },
    handleClick (value) {
      this.$emit('click', value)
    }
  }
}
</script>
