<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}文章</h1>
    <el-form  label-width="120px"  @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id">
    </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  props: {
    id: {}
  },
  components: {
    VueEditor
  },
  data(){
    return {
      model: {},
      categories: [],
    }
  },
  methods: {
      async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("file", file);

      const res = await this.$http.post('upload', formData) // eslint-disable-line no-unused-vars
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },
    
    // async/await 返回一个Promise对象，可以把异步的回调函数写法换成类似同步的写法
    async save(){
      let res   // eslint-disable-line no-unused-vars
      if (this.id) {
        res = await this.$http.put(`rest/articles/${this.id}`, this.model) // eslint-disable-line no-unused-vars
      } else {
        res = await this.$http.post('rest/articles', this.model) // eslint-disable-line no-unused-vars
      }
      this.$router.push('/articles/list') //跳转
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch(){
      const res = await this.$http.get(`rest/articles/${this.id}`)   // eslint-disable-line no-unused-vars
      this.model = res.data
    },
    async fetchCategories(){
      const res = await this.$http.get(`rest/categories`)   // eslint-disable-line no-unused-vars
      this.categories = res.data
    }
  },
  created(){
    this.fetchCategories()
    this.id && this.fetch()
  }
}
</script>
