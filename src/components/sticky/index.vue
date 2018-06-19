<template>
  <div :class="classes">
    <div :class="['vx-sticky-inner']">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  componentName: 'Sticky',
  props: {
    fixedTop: {
      type: String
    }
  },
  computed: {
    classes () {
      return ['vx-sticky-box']
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$$scrollNode = this.getScrollNode(this.$el.offsetParent)
      if (this.$$scrollNode) {
        this.$$childNode = this.$el.querySelector('.vx-sticky-inner')
        this.$$scrollNode.addEventListener('touchstart', this.handleTouchStart, false)
        this.$$scrollNode.addEventListener('scroll', this.handleScroll, false)
      }
    })
  },
  methods: {
    handleTouchStart () {
      this.$el.style.height = this.$$childNode.offsetHeight + 'px'
      this.$myData = {
        offsetTop: this.$el.offsetTop,
        fixedTop: this.fixedTop || this.$$scrollNode.offsetTop + 'px'
      }
    },
    handleScroll (e) {
      if (e.touchstart === undefined) {
        this.handleTouchStart()
      }
      if (e.target.scrollTop > this.$myData.offsetTop) {
        this.$el.classList.add('vx-sticky-fixed')
        if (this.$$childNode.style.top !== this.$myData.fixedTop) {
          this.$$childNode.style.top = this.$myData.fixedTop
        }
      } else {
        this.$el.classList.remove('vx-sticky-fixed')
        this.$$childNode.style.top = ''
      }
    },
    getScrollNode (node) {
      let n = node
      let closest = () => {
        let styleObject = window.getComputedStyle(n)
        if (!(['scroll', 'auto'].indexOf(styleObject['overflow']) > -1 || ['scroll', 'auto'].indexOf(styleObject['overflow-y']) > -1)) {
          n = n.offsetParent
          if (n === document.body) {
            n = document.body
          } else {
            closest()
          }
        }
      }
      document.body !== n && closest()
      return n
    }
  },
  destroyed () {
    this.$$scrollNode.removeEventListener('scroll', this.handleScroll)
    this.$$scrollNode.removeEventListener('touchstart', this.handleTouchStart)
  }
}
</script>
