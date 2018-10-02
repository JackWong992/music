<template>
  <div class="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
        <!-- <div class="slider-wrapper" v-if="recommends.length">
          <slider>
            <div v-for="(item,index) in recommends" :key="index">
              <a :href="item.linkUrl">
                <img :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div> -->
      <div>
        <swiper :options="swiperOption" style="height: 0; oveflow: hidden; padding-bottom: 40%" v-if="this.recommends.length" >
        <!-- slides -->
          <swiper-slide v-for="(item,index) in recommends" :key="index" >
            <div >
              <a :href="item.linkUrl">
                <img  @load="loadImage" v-lazy="item.picUrl" style="width: 100%">
              </a>
            </div>
          </swiper-slide>
        <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="(item,index) in discList" :key="index" class="item">
              <div class="icon">
                <img :src="item.imgurl" width="60" height="60">
              </div>
              <div class="text">
                <h2 class="name">{{item.creator.name}}</h2>
                <h2 class="desc">{{item.dissname}}</h2>
              </div>
            </li>
          </ul>
        </div>
        <div class="loading-container" v-show="!discList.length">
          <loading></loading>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
 import {getRecommend, getDiscList} from 'api/recommend'
 import {ERR_OK} from 'api/config'
 import Slider from 'base/slider/slider'
 import Scroll from 'base/scroll/scroll'
 import Loading from 'base/loading/loading'
 export default {
      data() {
        return {
          recommends: [],
          discList: [],
          swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: 3500,
          },
        }
      },
      created() {
        this._getRecommend(),
        this._getDiscList()
      },
      methods: {
        _getRecommend() {
          getRecommend().then((res) => {
            if (res.code === ERR_OK) {
              this.recommends = res.data.slider
            }
          })
        },
        _getDiscList() {
          getDiscList().then((res) => {
            if (res.code === ERR_OK) {
              this.discList = res.data.list
                console.log(res)
              }
            })
          },
        loadImage(){
          if(!this.checkLoaded){
            this.$refs.scroll.refresh()
            this.checkLoaded = true
          }
          this.$refs.scroll.refresh()
        }
        },
      components: {
        Slider,
        Scroll,
        Loading
      }
  }
</script>

<style scoped lang="stylus">
  @import '~common/stylus/variable'
  .recommend >>> .swiper-pagination-bullet-active
    background: white
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
