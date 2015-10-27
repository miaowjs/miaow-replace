# miaow-replace

> Miaow的字符替换工具

## 效果示例

```javascript
/* baz.js */
if (__debug__) {
  console.log('debug');
}

/* 处理后 */
if (false) {
  console.log('debug');
}
```

### 参数说明

#### replace
Type:`Array` Default:`[]`

要替换的配置列表

每个成员都必须是包含`test`和`value`属性的简单对象.
`test`和`value`是用来执行`String.prototype.replace`方法的两个参数, 具体可选类型可以参考[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
