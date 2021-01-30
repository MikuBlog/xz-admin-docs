## copyText

描述：复制文本

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
content | String、Object | 是 | 要复制的`DOM`元素文本或纯文本

示例
```js
this.$copyText("xuanzai")
this.$copyText(this.$refs.contentBox)
```

## urlQuery

描述：获取url后的参数

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
url | String | 否 |  需要解析的`url`字符串，默认解析当前窗口地址

返回值：`Object`

参数 | 类型 | 说明
- | - | -
key | String | 参数名称
value | String | 参数值

示例：
```js
this.$urlQuery([url]) // url: http://myinterface.xuanzai.top/getPicture?type=头像&id=1  result: { type: '头像', id: 1 }
```

## print

描述：打印文档

> 注意：该`API`不兼容`IE`

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
page | String | 是 |  `HTML`字符串

示例：
```js
this.$print(page)
```

## createSocket

描述：连接`wesocket`

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
option | Object | 是 |  配置对象

`options`的参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
url | String | 是 |  连接websocket地址
onOpen | Function | 否 |  打开后的回调
onMessage | Function | 否 |  接收到信息后的回调
onError | Function | 否 |  出错后的回调
onClose | Function | 否 |  关闭后的回调

返回值：`WebSocket`实例

示例：
```js
this
  .$createSocket(
    {
      url: "ws://xxx.com/xxx", // 连接websocket地址（必填）
      onOpen(e) {}, // websokcet打开后的回调（选填）
      onMessage(e) {}, // websocket接收到信息后的回调（选填）
      onError(e) {}, // websocket出错后的回调（选填）
      onClose(e) {} // websocket关闭后的回调（选填）
    }
  ) // 返回WebSocket实例
```

## Theme

所有主题模式都用在`body`标签上，也就是所有样式都会被改为对应的主题模式

> 注意：一次性设置多种主题不会重叠，而是相互覆盖。（不兼容`IE`，影响部分浏览器的流畅度）

如果有的元素不想被主题样式覆盖掉，请前往`src/global/js/config.js`文件进行配置：

```js
// 不受主题影响的元素（标签、类、id）
excludeEles: [
  "img", // 图片
  "video", // 视频
  "iframe", // 内嵌网站
  "embed", // 插件
  "object",
  '.el-message', // 提示信息
  '.el-notification', // 通知信息
  /* 背景图 */
  '[style*="background:url"]',
  '[style*="background-image:url"]',
  '[style*="background: url"]',
  '[style*="background-image: url"]',
  '[style*="background-image"][style*="image-set"]'
],
```

### clearMode

描述：白昼模式主题，也称为正常模式，调用该方法后会重置所有主题样式。

示例：
```js
this.$clearMode() // 开启白昼模式
```

### darkMode

描述：夜间模式主题

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
isDark | Boolean | 否 | 是否为黑暗模式，默认值为`true`

示例：
```js
this.$darkMode() // 开启夜间模式
this.$darkMode(false) // 关闭夜间模式
```

### weaknessMode

描述：色弱模式

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
isWeakness | Boolean | 否 | 是否为色弱模式，默认值为`true`

示例：
```js
this.$weaknessMode() // 开启色弱模式
this.$weaknessMode(false) // 关闭色弱模式
```

### hueRotateMode

描述：转换模式

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
isHueRotate | Boolean | 否 | 是否为转换模式，默认值为`true`

示例：
```js
this.$hueRotateMode() // 开启转换模式
this.$hueRotateMode(false) // 关闭转换模式
```

## Array

### sortList

描述：对元素为对象的数组进行排序

> 注意：只对值为日期、数字、字符串为数字的字段进行排序。原数组会改变。

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
list | Array | 是 | 需要排序的数组
property | String | 否 | 对象排序字段，默认为空（空的情况只对元素为数字的数组进行排序）
isDes | Boolean | 否 | 是否倒序，默认为`false`

返回值：`Array`

示例：
```js
let list = [{ name: "旋仔", level: 3 }, 
{ name: "旋仔", level: 1 }, 
{ name: "旋仔", level: 2 }]
this.$sortList(list, 'level', true) // [{ name: "旋仔", level: 3 }, { name: "旋仔", level: 2 }, { name: "旋仔", level: 1 }]
```

### searchResult

描述：查找元素（模糊搜索）

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
list | Array | 是 | 需要查找的数组
keys | Array | 是 | 查找包含的字段，具体用法看示例
value | String | 是 | 需要查找的值，默认为`false`

返回值：`Array`

示例：
```js
let list = [{ name: "旋仔", age: 20 }, { name: "小伙子", age: 16 }]
this.$searchResult(list, ['name'], '旋仔') // [{ name: "旋仔", age: 20 }]
this.$searchResult(list, ['name'], 'xxx') // []
```

### removeRepeat

描述：数组去重

> 注意：如果数组元素为对象，仅对key值为第一层的对象进行去重

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
arr | Array | 是 | 需要排序的数组
key | String | 否 | 对象去重字段，默认为空（空的情况只对非对象数组元素进行排序）

返回值：`Array`

示例：
```js
const arr_1 = [1, 2, 3, 2, 1]
this.$removeRepeat(arr_1) // [1, 2, 3]
const arr_2 = [{
	value: "123"
}, {
	value: "321"
}, {
	value: "123"
}, {
	value: "321"
}, {
	value: "123"
}]
this.$removeRepeat(arr_1, 'value') // [{ value: "123" }, { value: "321" }]
```

## control

### debounce

描述：防抖函数

效果：用户交互行为过于频繁而被禁止调用，一段时间后释放

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
callback | Function | 是 | 回调函数
time | Number | 否 | 防抖时间间隔，默认为`1000ms`
immediate | Boolean | 否 | 第一次点击是否立刻执行，默认为`true`

返回值：`Function`

示例：
```js
const callback = () => {
  // todo
}
const debounceFun = this.$debounce(callback, 2500, true)
```

### throttled

描述：节流函数

效果：用户交互行为间隔触发回调，防止用户频繁点击

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
callback | Function | 是 | 回调函数
wait | Number | 否 | 节流时间间隔，默认为`1000ms`

返回值：`Function`

示例：
```js
const callback = () => {
  // todo
}
const throttledFun = this.$throttled(callback, 2500)
```

## Style

### setStyle

描述：为`DOM`元素设置样式

> 注意：设置的样式为内联样式，不会覆盖所有内联样式，而是通过追加的形式添加样式

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
DOM | Object | 是 | `DOM`元素
ruleName | String、Object | 是 | CSS属性或组合CSS对象
style | String | 条件 | 当`ruleName`字段为`String`类型时，该字段必传，具体见下方示例

示例：
```js
// 设置单个属性
this.$setStyle(this.$refs.background, 'background-image', 'url(xxxx)')
// 设置多个属性
this.$setStyle(this.$refs.background, {
  backgroundImage: 'url(xxx)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
})
```

### setCssText

描述：为`DOM`元素设置内联样式

> 注意：设置后会覆盖原有的内联样式，效果等同于在html标签中写样式

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
DOM | Object | 是 | `DOM`元素
CSS | String | 是 | CSS语法

示例：
```js
this.$setCssText(this.$refs.background, `
  background: #666;
  padding: 20px;
`)
```

### createStyle

描述：创建全局样式

> 注意：通过创建`style`标签并动态追加到`head`标签内完成样式的全局覆盖

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
css | String | 是 | CSS语法
className | String | 是 | 类名语法（如果不填该属性，则每次调用都会创建一个新的`style`标签）

示例：
```js
this.$createStyle(`
  body {
    background: #666;
    padding: 20px;
  }
`)
```

## File

### download

描述：文件下载（自带`tips`以及`loading`）

> [批量下载文件](#exportfile)

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
url | String | 是 | 文件地址
fileName | String | 否 | 默认为原文件名称，该参数只在部分浏览器如`Chrome`、`Firefox`生效

示例：
```js
// 文件下载
this.$download(url, fileName)
```

###  getImgFile

描述：获取图片信息，图片预览

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
limit | Number | 否 | 图片大小，默认限制文件大小为`2M`
quality | Number | 否 | 图片质量，默认质量为`0.7`

返回值：`Promise`

参数 | 类型 | 说明
- | - | -
raw | File | 文件对象
url | String | base64字符串

示例：
```js
this
	.$getImgFile(limit, 0.7)
	.then(res => { // res: { raw: xxx, url: xxx }
		// todo
	})
```

###  getFile

描述：获取文件信息

`options`参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
limit | Number | 否 | 文件大小，默认限制文件大小为`2M`
fileType | String | 否 | 文件类型

返回值：`Promise`

参数 | 类型 | 说明
- | - | -
raw | File | 文件对象

`fileType`示例：

[查阅文档](https://blog.csdn.net/usuallyuser/article/details/83060341)

示例：
```js
// 选择xls、xlsx中的文件
this
	.$getFile({
		limit: 2,
		fileType: "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
	})
	.then(raw => {
		// todo
	})
```

###  compressImageFile

描述：压缩图片文件

`options`参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
file | file | 是 | 文件
quality | Number | 否 | 文件质量，默认质量为`0.7`

返回值：`Promise`

参数 | 类型 | 说明
- | - | -
raw | File | 文件对象

示例：
```js
this
	.$compressFile(
		file,
		quality
	)
	.then(raw => {
		// todo
	})
```

###  dataUrlToFile

描述：base64转为file

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
dataurl | String | 是 | base64字符串
filename | String | 是 | 文件名称

返回值：`File`

参数 | 类型 | 说明
- | - | -
raw | File | 文件对象

示例：
```js
this.$dataUrlToFile(base64, 'file') // 返回File实例
```

### previewFile

描述：预览文件

> 注意：该`api`使用了微软的预览接口，因此，请保证网络状态良好且文件必须能通过外链被访问到。

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
url | String | 是 | 文件路径（能被外链访问到，公网`url`）

示例：
```js
this.$previewFile(url)
```

### exportExcel

描述：将表格导出到`excel`文件中

> 注意：导出的数据为当前页面的表格数据，而不是所有表格数据

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
obj | DOM、Array(DOM) | 是 | 选中的表格元素
name | String | 是 | 文件名称，默认为名称为table

示例：
```js
this.$exportExcel(document.querySelector('table'), 'data') // 导出一整个表格
this.$exportExcel(document.querySelectorAll('tr'), 'data') // 导出选中元素的表格（数组元素必须为tr标签元素）
```

## Date

日期格式化方法。

### formatDate

描述：将日期格式化为`yyyy-MM-dd HH:mm:ss`

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
date | Date | 是 | 接收的日期对象
isAccurate | Boolean | 否 | 是否精确到时分秒，默认值为`false`

返回值：

参数 | 类型 | 说明
- | - | -
date | String | 常用的日期字符串，具体见示例

示例：
```js
this.$formatDate(new Date()) // 2019-11-05
this.$formatDate(new Date(), true) // 2019-11-05 10:06:31
```

### dateDiff

描述：两个日期的时间差

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
sDate1 | Date | 是 | 接收的日期对象
sDate2 | Date | 是 | 是否精确到时分秒，默认值为`false`

返回值：`Object`

参数 | 类型 | 说明
- | - | -
stamp | Number | 时间戳差值
seconds | Number | 相差总秒数，向下取整
minutes | Number | 相差总分钟数，向下取整
hours | Number | 相差总小时数，向下取整
days | Number | 相差总天数，向下取整
weeks | Number | 相差总星期数，向下取整
times | String | 相差标准时分秒：hh:mm:ss

示例：
```js
this.$dateDiff(new Date('2019-11-05'), new Date('2019-11-01'))
// { 时间戳 stamp: xxx, 相差总秒数 seconds:xxx, 相差总分钟数 minutes: xxx, 相差总小时数 hours: xxx, 相差总天数 days: xxx, 相差总星期数 weeks: xxx, 时分秒 times: xxx}
```

### setDay

描述：设置日期

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
date | Date | 是 | 接收的日期对象
number | Number | 是 | 设置的天数，负数则往前计算
isAccurate | Boolean | 否 | 是否精确到时分秒，默认值为`false`

返回值：

参数 | 类型 | 说明
- | - | -
date | String | 常用的日期字符串，具体见示例

示例：
```js
this.$setDay(new Date(), 3, true) // 返回后三天 YYYY-MM-DD HH:mm:ss
this.$setDay(new Date(), -3, false) // 返回前三天 YYYY-MM-DD
```

### setMonth

描述：设置月份

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
date | Date | 是 | 接收的日期对象
number | Number | 是 | 设置的月数，负数则往前计算
isAccurate | Boolean | 否 | 是否精确到时分秒，默认值为`false`

返回值：

参数 | 类型 | 说明
- | - | -
date | String | 常用的日期字符串，具体见示例

示例：
```js
this.$setMonth(new Date(), 3, true) // 返回后三个月 YYYY-MM-DD HH:mm:ss
this.$setMonth(new Date(), -3, false) // 返回前三个月 YYYY-MM-DD
```

### setYear

描述：设置年份

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
date | Date | 是 | 接收的日期对象
number | Number | 是 | 设置的年数，负数则往前计算
isAccurate | Boolean | 否 | 是否精确到时分秒，默认值为`false`

返回值：

参数 | 类型 | 说明
- | - | -
date | String | 常用的日期字符串，具体见示例

示例：
```js
this.$setYear(new Date(), 3, true) // 返回后三年 YYYY-MM-DD HH:mm:ss
this.$setYear(new Date(), -3, false) // 返回前三年 YYYY-MM-DD
```

### setDate

描述：获取前n天

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
date | Date | 是 | 接收的日期对象
options | Object | 是 | 日期设置配置对象
rules | String | 否 | 日期格式，默认为`YYYY-MM-DD HH:mm:ss`

`options`参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
years | Number | 否 | 设置年份，负数则往前计算
quarters | Number | 否 | 设置季度（三个月一季度），负数则往前计算
months | Number | 否 | 设置月份，负数则往前计算
weeks | Number | 否 | 设置星期，负数则往前计算
days | Number | 否 | 设置天数，负数则往前计算
hours | Number | 否 | 设置小时，负数则往前计算
minutes | Number | 否 | 设置分钟数，负数则往前计算
seconds | Number | 否 | 设置秒数，负数则往前计算
milliseconds | Number | 否 | 设置毫秒数，负数则往前计算

返回值：

参数 | 类型 | 说明
- | - | -
date | String | 常用的日期字符串，具体见示例

示例：
```js
this.$setDate(new Date(), {
	years: 1
}) // 当前时间往后加一年 YYYY-MM-DD HH:mm:ss
this.$setDate(new Date(), {
	months: -1,
	hours: 1
}, 'YYYY-MM') // 当前时间减一个月并加一个小时 YYYY-MM
```

### fromNow

描述：获取相对时间

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
date | Date | 否 | 相对于现在的日期，默认为当前时间

返回值：

参数 | 类型 | 说明
- | - | -
date | String | 常用的日期字符串，具体见示例

示例：
```js
this.$fromNow(new Date()) // 几秒前
```

## storage

通过`sessionStorage`与`localStorage`进行简单的封装。

### setMemorySes

描述：会话存储，写入

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
key | String | 是 | 键
value | String | 是 | 值

示例：
```js
this.$setMemorySes("name", "xuanzai")
```

### getMemorySes

描述：会话存储，读取

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
key | String | 是 | 键

返回值：根据`this.$setMemorySes`的值决定

示例：
```js
this.$getMemorySes("name")
```

### setMemoryPmt

描述：长久存储，写入

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
key | String | 是 | 键
value | String | 是 | 值
  
示例：
```js
this.$setMemoryPmt("name", "xuanzai")
```

### getMemoryPmt

描述：长久存储，读取

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
key | String | 是 | 键

返回值：根据`this.$setMemoryPmt`的值决定

示例：
```js
this.$getMemoryPmt("name")
```

## Message

通过`element-ui`的`Message`组件进行二次封装。

### successMsg

描述：成功提示

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
content | String | 是 | 提示语

示例：
```js
this.$successMsg("成功")
```

### warnMsg

描述：警告提示

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
content | String | 是 | 提示语

示例：
```js
this.$warnMsg("警告")
```

### errorMsg

描述：错误提示

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
content | String | 是 | 提示语

示例：
```js
this.$errorMsg("错误")
```

### showMsgBox

描述：信息弹窗

参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
title | String | 否 | 标题，默认为空
msg | String | 否 | 内容，当`isHTML`为`true`时可填入`html`字符串
isHTML | String | 否 | 内容是否为`html`字符串，默认为`false`
type | String | 否 | 类型 [`success`/`warn`/`info`/`error`]，默认为`info`

返回值：`Promise`

点击确认时，回调`then`中的方法，否则回调`catch`中的方法

示例：
```js
this.$showMsgBox({ [title: "标题"], msg: "内容", [isHTML: false], [type: info] })
```

## Notification

### successTip

描述：成功通知

`options`中的参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
msg | String | 是 | 通知内容
title | String | 否 | 通知标题，默认为空

示例：
```js
this.$successTip({ msg: "成功通知", title: "成功" })
```

### warnTip

描述：警告通知

`options`中的参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
msg | String | 是 | 通知内容
title | String | 否 | 通知标题，默认为空

示例：
```js
this.$warnTip({ msg: "警告通知", title: "警告" })
```

### errorTip

描述：错误通知

`options`中的参数：

参数 | 类型 | 必填 | 说明
- | - | - | -
msg | String | 是 | 通知内容
title | String | 否 | 通知标题，默认为空

示例：
```js
this.$errorTip({ msg: "错误通知", title: "错误" })
```

## http

通过`axios`进行二次封装，如需更多个性化，请前往`src/api/http/http.js`文件内进行更改

### http_normal

描述：`application/x-www-form-urlencoded`键值对的上传方式

参数详情参考[axios文档](https://www.kancloud.cn/yunye/axios/234845)

返回值：`Promise`

示例：
```js
this.$http_normal({
	url: "/xxx/xxx",
	method: "get",
	params: {
		name: "",
		age: ""
	}
}).then(result => {
	// todo
})

this.$http_normal({
	url: "/xxx/xxx",
	method: "post",
	data: {
		name: "",
		age: ""
	}
}).then(result => {
	// todo
})
```

### http_json

描述：`application/json`，`JSON`字符串的上传方式

参数详情参考[axios文档](https://www.kancloud.cn/yunye/axios/234845)

返回值：`Promise`

示例：
```js
this.$http_json({
	url: "/xxx/xxx",
	method: "get",
	params: {
		name: "",
		age: ""
	}
}).then(result => {
	// todo
})

this.$http_json({
	url: "/xxx/xxx",
	method: "post",
	data: {
		name: "",
		age: ""
	}
}).then(result => {
	// todo
})
```

### http_file

描述：`multipart/form-data`，多文件键值对的上传方式

参数详情参考[axios文档](https://www.kancloud.cn/yunye/axios/234845)

返回值：`Promise` 

示例：
```js
this.$http_file({
	url: "/xxx/xxx",
	method: "post",
	data: {
		name: "",
		age: ""，
		file_1: raw_1,
		file_2: raw_2
	}
}).then(result => {
	// todo
})
```

## jquery

描述：该项目引入了`jquery`，可在任何组件或页面中使用。

具体`API`请参考网上文档。

示例：
```js
// 获取DOM
$("head")

// 请求
$.ajax({
  url: "xxx",
  type: "get"
}).then(result => {
  // todo
})
```
