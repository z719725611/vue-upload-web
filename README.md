# vue-upload-web
一个兼容IE9的上传插件

## 安装
```JS
npm install vue-upload-web --save
```

## 使用
```JS
//ES6引入
import vueUploadWeb from 'vue-upload-web'
//require引入
var vueUploadWeb = require('VueUploadWeb')

Vue.use(vueUploadWeb)

在入口index.html中添加
<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>

//组件中使用
<vue-upload-web></vue-upload-web>

IE9及以下版本使用的为flash,所以上传服务器地址不应使用https,应该使用http
```

## 配置

```html
<vue-upload-web :url="cdnUrl" :form-data="cdnParams" :accept="accept" :key-generator="keyGenerator"
                            @progress="uploadProgress" @success="handleSuccess" @before="beforeUpload"
                            @error="error" @complete="handleComplete" upload-button=".btns" :multiple=true>
</vue-upload-web>
```

### Api

成员    |    说明 |       类型              |    默认值
------- | --------| ---------------------|------------
upload-button|上传按钮	|String|--
url    | 文件上传地址 | String | --
form-data | 上传需要携带的附加参数	 |Object     | null
accept  | 上传指定的类型     |  Object           | null
key-generator  | 设置key参数|function|function (file) { const currentTime = new Date().getTime();const key = currentTime + "." + file.name;return key;}
progress  | 正在上传中回调方法	     |           function           | --
success   | 上传成功回调方法	     |           function           | --
before| 上传前回调方法	|function|--
error|上传失败回调方法	|function|--
complete|上传完成回调方法，不管成功或者失败|function|--
multiple|是否支持多文件上传|Boolean|false


