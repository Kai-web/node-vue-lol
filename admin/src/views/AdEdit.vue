<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}广告位</h1>
    <el-form  label-width="120px"  @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="广告">
                <el-button type="primary" @click="model.items.push({})">添加广告</el-button>
          <el-row type="flex" style="flex-wrap: wrap">
            <el-col :md="24" v-for="(item,i) in model.items" :key="i">
              <el-form-item label="跳转链接 （URL)">
                <el-input v-model="item.url"></el-input>
              </el-form-item>
              <el-form-item label="图片" style="margin-top:0.5rem;">
                <el-upload
                  class="avatar-uploader"
                  :action="uploadUrl"
                  :headers="getAuthHeaders()"
                  :show-file-list="false"
                  :on-success="res => $set(item,'image', res.url)"
                >
                  <img v-if="item.image" :src="item.image" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="danger" @click="model.items.splice(i, 1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
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
      model: {
        items: [],
      },
    }
  },
  methods: {
    // async/await 返回一个Promise对象，可以把异步的回调函数写法换成类似同步的写法
    async save(){
      let res   // eslint-disable-line no-unused-vars
      if (this.id) {
        res = await this.$http.put(`rest/ads/${this.id}`, this.model) // eslint-disable-line no-unused-vars
      } else {
        res = await this.$http.post('rest/ads', this.model) // eslint-disable-line no-unused-vars
      }
      this.$router.push('/ads/list') //跳转
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch(){
      const res = await this.$http.get(`rest/ads/${this.id}`)   // eslint-disable-line no-unused-vars
      this.model = Object.assign({},this.model, res.data)
    },
  },
  created(){
    this.id && this.fetch()
  }
}
</script>
