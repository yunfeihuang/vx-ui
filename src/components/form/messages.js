export default {
  required: name => `${name}不能为空`,
  pattern: name => `${name}格式不正确`
}
