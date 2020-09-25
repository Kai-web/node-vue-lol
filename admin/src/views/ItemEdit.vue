<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}物品</h1>
    <el-form  label-width="120px"  @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="afterUpload"
          >
          <img v-if="model.icon" :src="model.icon" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data(){
    return {
      model: {},
    }
  },
  methods: {
    afterUpload(res){   // eslint-disable-line no-unused-vars
    this.$set(this.model, 'icon', res.url)
      // this.model.icon = res.url
    },
    // async/await 返回一个Promise对象，可以把异步的回调函数写法换成类似同步的写法
    async save(){
      let res   // eslint-disable-line no-unused-vars
      if (this.id) {
        res = await this.$http.put(`rest/items/${this.id}`, this.model) // eslint-disable-line no-unused-vars
      } else {
        res = await this.$http.post('rest/items', this.model) // eslint-disable-line no-unused-vars
      }
      this.$router.push('/items/list') //跳转
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch(){
      const res = await this.$http.get(`rest/items/${this.id}`)   // eslint-disable-line no-unused-vars
      this.model = res.data
    },
  },
  created(){
    this.id && this.fetch()
  }
}
</script>


