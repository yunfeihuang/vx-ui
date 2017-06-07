if (window.Element && !window.Element.prototype.remove) {
  window.Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this)
    }
  }
}
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = setTimeout
}
if (window.Element && !Element.prototype.closest) {
  window.Element.prototype.closest = function (s) {
    let matches = (this.document || this.ownerDocument).querySelectorAll(s)
    let i = 0
    let el = this
    do {
      i = matches.length
      while (--i >= 0 && matches.item(i) !== el) {}
    } while ((i < 0) && (el = el.parentElement))
    return el
  }
}
