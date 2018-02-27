<template>
  <div id="app">
    <ul v-for="item in imgList" class="ul-class">
      <i class="iconfont icon-wenjian wenjian"></i>
      <span v-text="item.name" @click=nameClick(item.file)></span>
      <span  v-on:mouseenter="mouseenter($event)" v-on:mouseleave="mouseleave($event)">
    <i class="iconfont icon-gouxuan gouxuan" style="display: inline-block;"></i>
    <i class="iconfont icon-chahao chahao" :img-url="item.imageUrl" style="display: none;" @click="deleteImg($event)"></i>
  </span>
    </ul>
    <div class="progressContainer" :style="{display: display}">
      <div class="progress" :style="{width:progress+'%'}">
        <b>{{progress}}%</b>
      </div>
    </div>
    <div class="btns">
      <div id="picker">选择文件</div>
    </div>
    <vue-upload-web :url="cdnUrl" :form-data="cdnParams" :accept="accept" :key-generator="keyGenerator"
                    @progress="uploadProgress" @success="handleSuccess" @before="beforeUpload"
                    @error="error" @complete="handleComplete" upload-button=".btns" :multiple=true>
    </vue-upload-web>
  </div>
</template>

<style>

  .progressContainer{
    height: 20px;
    width: 96%;
    border-radius: 10px;
    background-color: #ddd;
    margin-left: 2%;
  }
  .progress{
    background-color: #1C8DE0;
    border-radius: 10px;
    height:20px;
    line-height: 20px;
  }
  b{
    color:#fff;
    font-weight: 100;
    font-size: 12px;
    position:absolute;
    left:40%;
  }

  .btns {
    margin-top: 20px;
  }

  .wenjian {
    font-size: 18px;
    color: #bfbfbf;
  }

  .gouxuan {
    font-size: 15px;
    color: #70C34C;
    float: right;
    margin-top: 6px;
  }

  .chahao {
    font-size: 16px;
    color: #bfbfbf;
    float: right;
    margin-top: 6px;
  }

  .ul-class {
    width: 400px;
    margin-top: 10px;
  }
</style>

<script>
  export default {
    name: 'app',
    data() {
      return {
        display: "none",
        progress: 0,
        imgList:[],
        // 只允许选择图片文件。
        accept: {
          title: 'Images',
          extensions: 'jpg,jpeg,png',
          mimeTypes: 'image/jpg,image/jpeg,image/png'
        },
        cdnUrl: '需要你自己的上传地址',
        host: '查看上传文件地址',
        cdnParams: {
          token: '上传如果需要的token认证',
          key: '',
          name: '',
          chunk: 0,
          chunks: 1
        }
      };
    },
    methods: {
      handleSuccess(file, res) {
        const imageUrl = this.host.concat(res.key);
        this.imgList.push({
          imageUrl: imageUrl,
          name: file.name,
          file: file
        });
      },
      beforeUpload(file) {

      },
      uploadProgress(file, percentage) {
        this.display = "block";
        this.progress = percentage * 100;
      },
      error(message) {
        this.$message.error(message);
      },
      handleComplete() {
        this.display = "none";
      },
      keyGenerator(file) {
        const currentTime = new Date().getTime();
        this.cdnParams.key = "test/cdn/ie9/" + currentTime + "." + file.name;
        return this.cdnParams.key;
      },
      mouseenter(event) {
        event.currentTarget.getElementsByClassName("gouxuan")[0].style.display = "none";
        event.currentTarget.getElementsByClassName("chahao")[0].style.display = "inline-block";
      },
      mouseleave(event) {
        event.currentTarget.getElementsByClassName("gouxuan")[0].style.display = "inline-block";
        event.currentTarget.getElementsByClassName("chahao")[0].style.display = "none";
      },
      deleteImg(event) {
        const imageUrl = event.currentTarget.getAttribute("img-url");
        this.imgList = this.imgList.filter(img => img.imageUrl != imageUrl);
      },
      nameClick(file) {
      }
    }
  }
</script>
