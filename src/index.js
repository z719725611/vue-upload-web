import vueUploadWeb from './components/upload/upload';

const uploadWeb = {
  install (Vue, options) {
    Vue.component(vueUploadWeb.name, vueUploadWeb) //全局组件
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(uploadWeb)
}

export default uploadWeb  //导出
