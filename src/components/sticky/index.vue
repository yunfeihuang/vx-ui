<template>
  <div :class="classes">
    <div :class="[$cssPrefix+'sticky-inner']">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sticky',
  props: {
    fixedTop: {
      type: String
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'sticky-box']
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$nextTick(() => {
        let node = this.getScrollNode(this.$el.offsetParent)
        if (node) {
          let childNode = this.$el.querySelector('.' + this.$cssPrefix + 'sticky-inner')
          let offsetTop = 0
          let fixedTop = 0
          let beforeFixed = () => {
            this.$el.style.height = childNode.offsetHeight + 'px'
            offsetTop = this.$el.offsetTop
            fixedTop = this.fixedTop || node.offsetTop + 'px'
          }
          node.addEventListener('touchstart', beforeFixed, false)
          node.addEventListener('scroll', (e) => {
            if (e.touchstart === undefined) {
              beforeFixed()
            }
            if (e.target.scrollTop > offsetTop) {
              this.$el.classList.add('v-sticky-fixed')
              if (childNode.style.top !== fixedTop) {
                childNode.style.top = fixedTop
              }
            } else {
              this.$el.classList.remove('v-sticky-fixed')
              childNode.style.top = ''
            }
          })
        }
      })
    },
    getScrollNode (node) {
      let n = node
      let closest = () => {
        if (['scroll', 'auto'].indexOf(window.getComputedStyle(n)['overflow']) === -1) {
          n = n.offsetParent
          closest()
        }
      }
      closest()
      return n
    }
  }
}
</script>
