### #免责声明
- 本项目仅做本人练手和学习使用,非官方App,不用于商业目的。

### #项目简介
- Vue+Node+mongodb英雄联盟项目断断续续经过两个月完成，是一个移动端的仿王者荣耀手机端官网和后台管理系统的英雄联盟移动端项目。
- 管理后台部分使用的技术栈为Node.js+Express框架+ElementUI框架+Mongodb数据库。
- 移动端网站部分使用技术栈Vue.js+SASS等

### #项目地址
- 移动端官网：http://www.k-vuelol.top/
- 后台管理系统：http://www.k-vuelol.top/admin （测试账号：）

### #源码地址
- GitHub: https://github.com/Kai-web/node-vue-lol 

### #环境准备
- 工具安装和环境搭建(nodejs,npm,mongodb),并做好相关配置

### #项目启动
- **star本项目** 并克隆项目到本地

### #安装依赖
- 分别在admin，web，server文件夹下安装依赖
```javascript
npm install
```

### #启动服务
- 分别在admin，web，server（须确保数据库已连接）文件夹下启动
```javascript
npm run serve
```

### #构建生产环境
- 分别在admin和web目录下运行上面的命令，打包后的静态文件分别存放于server目录下的admin和web文件夹下
```javascript
npm run build
```

### #项目结构
- server（服务端，后台管理界面/web端的接口）
- admin（后台管理界面）
- web（移动端网站界面）



### #移动端网站

- 使用SASS (SCSS)进行base样式预定义（网站常用色彩、字体和边距定义 (colors, font,margin,padding)；
- 页面整体框架使用flex布局
- 首页顶部轮播图使用的是‘vue swiper’插件
- 项目中一部分图标是扣取官方精灵图片 (sprite)，剩余部分使用字体图标 (阿里巴巴iconfont)
- 考虑到组件复用性，将首页卡片组件（Card）列表卡片组件 (List-Card)、进行了封装，可以用于其他页面外的所有布局，方便快捷



### #首页
![](https://raw.githubusercontent.com/Kai-web/NotePicture/master/20201011004859.png)

### #资讯详情页
![](https://raw.githubusercontent.com/Kai-web/NotePicture/master/20201011005143.png)

### #英雄详情页

![](https://raw.githubusercontent.com/Kai-web/NotePicture/master/20201011005124.png)

### #后台管理界面

- 基于**Element UI**的后台管理基础界面搭建
- 后台管理系统主要有以下功能：
&ensp;&ensp; - 英雄管理
&ensp;&ensp; - 物品管理
&ensp;&ensp; - 文章管理
&ensp;&ensp; - 广告管理
&ensp;&ensp; - 管理员账号管理 (bcrypt散列加密)
&ensp;&ensp; - 本地图片上传 (multer)
&ensp;&ensp; - 客户端路由限制 (beforeEach, meta)
&ensp;&ensp; - 上传文件的登录校验 (el-upload, headers)
&ensp;&ensp; - 登录模块使用接口 (jwt,jsonwebtoken)进行服务端登录校验
&ensp;&ensp; - 文章管理（其中编辑器使用的是富文本编辑器 (vue2-editor)）

### #后台英雄管理
![](https://raw.githubusercontent.com/Kai-web/NotePicture/master/20201011005023.png)

### #后台装备管理
![](https://raw.githubusercontent.com/Kai-web/NotePicture/master/20201011005041.png)

### #富文本编辑器

![](https://raw.githubusercontent.com/Kai-web/NotePicture/master/20201011005059.png)
