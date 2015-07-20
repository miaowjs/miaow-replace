# miaow-replace

> Miaow的字符替换工具

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

## 使用说明

### 安装

```
npm install miaow-replace --save-dev
```

### 在项目的 miaow.config.js 中添加模块的 tasks 设置

```javascript
//miaow.config.js
module: {
  tasks: [
    {
      test: /\.js$/,
      plugins: [
        {
          plugin: 'miaow-replace',
          option: {
            replace: [
              {
                test: '__debug__',
                value: 'false'
              }
            ]
          }
        }
      ]
    }
  ]
}
```

* replace 默认值为`[]`, 要替换的配置列表, 每个成员都必须是包含`test`和`value`属性的简单对象.
`test`和`value`是用来执行`String.prototype.replace`方法的两个参数, 具体可选类型可以参考[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
