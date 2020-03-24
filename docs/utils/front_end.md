
## 静态资源路径转换

> 为了方便后台的静态资源迁移，于是有了以上这个接口。

> tips: 静态资源的前缀路径可在 public/assets/js/baseUrl.js下修改`prefixUrl`字段值。

```js
var
  // 接口统一请求前缀地址
  baseUrl = 'http://localhost:8087',
  // 静态资源请求前缀地址
  prefixUrl = 'http://localhost:8087'
```

示例:
```js
import { convertHttp } from '@/utils/convertHttp'

// 返回由prefixUrl拼接的网络地址
const imageUrl = convertHttp(val.image) // prefixUrl + val.image
```

<br/>

## JavaScript值类型判断

<br/>

示例
```js
import type from '@/utils/type'

type.isNumber(val) // 判断值是否为数字类型
type.isBoolean(val) // 判断值是否为布尔类型
type.isString(val) // 判断值是否为字符串类型
type.isObject(val) // 判断值是否为对象类型
type.isNull(val) // 判断值是否为Null类型
type.isUndefined(val) // 判断值是否为Undefined类型
type.isSymbol(val) // 判断值是否为Symbol类型
type.isArray(val) // 判断值是否为数组类型
type.isDate(val) // 判断值是否为日期类型
```

<br/>

## Element UI表单验证

<br/>

> tips: 以下写法仅适用于`Element UI`，在需要的页面中导入使用即可。

> 表单验证请参考：[Element UI form组件的用法](https://element.eleme.cn/#/zh-CN/component/form)

<br/>

### 验证手机、电话号码

示例:
```js
import { 
  validateMobile, 
  validatePhone, 
  validateBothPhMob } 
from '@/utils/form_validate'

rules: {
  // 验证电话号码
	phone: [{
		{ required: true, trigger: "change", validator: validatePhone }
  }],
  // 验证手机号码
	mobile: [{
		{ required: true, trigger: "change", validator: validateMobile }
  }],
  // 验证手机或电话号码
  phMob: [{
		{ required: true, trigger: "change", validator: validateBothPhMob }
	}]
}
```

<br/>

### 验证邮箱

示例:
```js
import { validateEmail } from '@/utils/form_validate'

rules: {
	email: [{
		{ required: true, trigger: "change", validator: validateEmail }
	}]
}
```

<br/>

### 验证身份证号码

示例:
```js
import { validateId } from '@/utils/form_validate'

rules: {
	idCard: [{
		{ required: true, trigger: "change", validator: validateId }
	}]
}
```

<br/>

### 验证网络地址

示例:
```js
import { validateUrl } from '@/utils/form_validate'

rules: {
	url: [{
		{ required: true, trigger: "change", validator: validateUrl }
	}]
}
```

<br/>

### 验证小写字母

示例:
```js
import { validateLowerCase } from '@/utils/form_validate'

rules: {
	lowerStr: [{
		{ required: true, trigger: "change", validator: validateLowerCase }
	}]
}
```

<br/>

### 验证大写字母

示例:
```js
import { validateUpperCase } from '@/utils/form_validate'

rules: {
	upperStr: [{
		{ required: true, trigger: "change", validator: validateUpperCase }
	}]
}
```

<br/>

### 验证是否为数字

示例:
```js
import { validateNumber } from '@/utils/form_validate'

// 单纯验证是否为数字
rules: {
	num: [{
		{ required: true, trigger: "change", validator: validateNumber }
	}]
}

// 带最小值
rules: {
	num: [{
		{ required: true, min: 0, trigger: "change", validator: validateNumber }
	}]
}

// 带最大值
rules: {
	num: [{
		{ required: true, max: 999, trigger: "change", validator: validateNumber }
	}]
}

// 带最小、最大值
rules: {
	num: [{
		{ required: true, min: 0, max: 999, trigger: "change", validator: validateNumber }
	}]
}
```

<br/>

## 系统运行环境

<br/>

> tips: 验证客户端类型。

<br/>

### IE

示例：
```js
import { isIE } from '@/utils/agent'

isIE() // true or false
```

<br/>

### Safari

示例：
```js
import { isSafari } from '@/utils/agent'

isSafari() // true or false
```

<br/>

### 移动设备

示例：
```js
import { isMobile } from '@/utils/agent'

isMobile() // true or false
```

<br/>

### iPad

示例：
```js
import { isIpad } from '@/utils/agent'

isIpad() // true or false
```

<br/>

### MacOS

示例：
```js
import { isMacos } from '@/utils/agent'

isMacos() // true or false
```

<br/>

### LinuxOS

示例：
```js
import { isLinux } from '@/utils/agent'

isLinux() // true or false
```

<br/>

### WindowOS

示例：
```js
import { isWindowos } from '@/utils/agent'

isWindowos() // true or false
```

<br/>

### AndroidOS

示例：
```js
import { isAndroidos } from '@/utils/agent'

isAndroidos() // true or false
```

<br/>

### IOS

示例：
```js
import { isIos } from '@/utils/agent'

isIos() // true or false
```


