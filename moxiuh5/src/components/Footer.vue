<template>
  <div id="foot-wrapper">
    <div class="button last-step" @click="cancel">上一步</div>
    <div class="button save" @click="save">保存</div>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    methods: {
      save () {
        window.parent.document.getElementById('dataJson').value = JSON.stringify(this.$store.state.savedJson)
        window.parent.document.getElementById('dataImg').value = JSON.stringify(this.getImgList())
        window.parent.document.getElementById('frameSave').click()
      },
      cancel () {
        window.parent.document.getElementById('frameCancel').click()
      },
      getImgList () {
        let imgList = []
        const {backgroundLongImg, fixedFloatingWindow, floatText, floatWindow, subtitle, fixedBanner, slideBanner, adAreaMid, adAreaBottm, fiveBanners} = this.$store.state.savedJson

        if (backgroundLongImg.backgroundImgUrlRel) {
          imgList.push(backgroundLongImg.backgroundImgUrlRel)
        }
        if (fixedFloatingWindow.backgroundImgUrlRel) {
          imgList.push(fixedFloatingWindow.backgroundImgUrlRel)
        }
        if (floatText.backgroundImgUrlRel) {
          imgList.push(floatText.backgroundImgUrlRel)
        }
        if (floatWindow.backgroundImgUrlRel) {
          imgList.push(floatWindow.backgroundImgUrlRel)
        }
        if (subtitle.backgroundImgUrlRel) {
          imgList.push(subtitle.backgroundImgUrlRel)
        }
        if (fixedBanner.backgroundImgUrlRel) {
          imgList.push(fixedBanner.backgroundImgUrlRel)
        }
        if (slideBanner.backgroundImgUrlRel) {
          imgList.push(slideBanner.backgroundImgUrlRel)
        }
        slideBanner.banners.forEach(banner => {
          if (banner.backgroundImgUrlRel) {
            imgList.push(banner.backgroundImgUrlRel)
          }
          if (banner.guideIconUrlRel) {
            imgList.push(banner.guideIconUrlRel)
          }
        })

        if (adAreaMid.backgroundImgUrlRel) {
          imgList.push(adAreaMid.backgroundImgUrlRel)
        }
        if (adAreaBottm.backgroundImgUrlRel) {
          imgList.push(adAreaBottm.backgroundImgUrlRel)
        }

        for(let i = 1; i <= 5; ++i) {
          const id = 'ad' + i
          const ad = fiveBanners[id]
          if (ad.banner.backgroundImgUrlRel) {
            imgList.push(ad.banner.backgroundImgUrlRel)
          }
          if (ad.title.backgroundImgUrlRel) {
            imgList.push(ad.title.backgroundImgUrlRel)
          }
          if (ad.guideIconUrlRel) {
            imgList.push(ad.guideIconUrlRel)
          }
        }

        return imgList
      }
    }
}
</script>

<style scoped lang="stylus">
  #foot-wrapper
    display flex
    justify-content center

  .button
    flex 1 0 auto
    margin 0.3rem 1rem
    height 40px
    border solid 1px rgb(51, 187, 172)
    border-radius 0.3rem
    cursor pointer
  
  .last-step
    flex 0 0 120px
    display flex
    justify-content center
    align-items center
    color rgb(0, 125, 113)
    &:hover
      background-color rgb(226, 243, 241)
    
  .save
    flex 0 0 120px
    background-color rgb(0, 125, 113)
    color white
    display flex
    justify-content center
    align-items center
    opacity 0.8
    &:hover
      opacity 1
</style>