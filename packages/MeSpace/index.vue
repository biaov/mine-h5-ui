<script>
export default {
  name: 'MeSpace',
  props: {
    // 间距大小
    size: {
      type: String,
      default: '10px'
    },
    // 间距方向
    direction: {
      type: String,
      default: 'horizontal' // horizontal | vertical
    }
  },
  data() {
    return {}
  },
  render(createElement) {
    const slots = this.$slots.default || []
    const extraChildren = slots.map(vnode => createElement('div', { class: 'me-space-item' }, [vnode]))
    return createElement('div', { style: `--size:${this.size};`, class: `me-space ${this.direction}` }, extraChildren)
  }
}
</script>
