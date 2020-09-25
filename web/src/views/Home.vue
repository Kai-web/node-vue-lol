<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/28e7ae8131a22fec617f2cff06f64aaf.jpeg" >
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/9a0d4b611ca7570ad714152acc56b307.jpeg" >
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/512f0d404bc1c7513bcd303fe2458ddc.jpeg" >
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white  text-center pt-3 text-dark-1">
      <div class=" d-flex flex-wrap">
        <div class="nav-item mb-3">
          <i class="sprite sprite-one"></i>
          <div class="py-2">游戏资料</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-two"></i>
          <div class="py-2">攻略中心</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-three"></i>
          <div class="py-2">周边商城</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-four"></i>
          <div class="py-2">峡谷之巅</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-five"></i>
          <div class="py-2">LOL宇宙</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-six"></i>
          <div class="py-2">云顶之弈</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-seven"></i>
          <div class="py-2">秩序殿堂</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-eight"></i>
          <div class="py-2">微信绑定</div>
        </div>
      </div>
    </div>
    <!-- end of nav icons -->

    <m-list-card icon="menu1" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link tag="div" :to="`articles/${news._id}`" class="py-2 fs-lg d-flex" v-for="(news, i) in category.newsList" :key="i">
              <span class="text-info">[{{news.categoryName}}]</span>
              <span class="px-2">|</span>
              <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>
      </router-link>
      </template>
    </m-list-card>

    <m-list-card icon="yxlm" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem;">
          <router-link
          tag="div"
          :to="`/heroes/${hero._id}`"
          class="p-2 text-center"
          style="width: 20%;" 
          v-for="(hero, i) in category.heroList" :key="i">
            <img :src="hero.avatar" class="w-100">
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>
  </div>
</template>

<script>

export default {
  
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 1800,
        },
        pagination: {
          el: ".pagination-home"
        }
      },
      newsCats: [],
      heroCats: []
    };
  },
  methods: {
    async fetchNewsCates(){
      const res = await this.$http.get('news/list')
      this.newsCats = res.data
    },
    async fetchHeroCats() {
      const res = await this.$http.get("heroes/list");
      this.heroCats = res.data;
    }
  },
  created(){
    this.fetchNewsCates();
    this.fetchHeroCats();
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables';

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}

</style>