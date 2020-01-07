var shortUrl, json, config
function initPage() {
    setTimeout(function () {
        if ((shortUrl !== undefined) && (json !== undefined)) {
            config = JSON.parse(json)
            initVue()
        } else {
            initPage()
        }
    }, 50)
}

function initVue() {
    var shortUrl = ''
    new Vue({
        el: '#app',
        data: {
            backgroundLongImg: config.backgroundLongImg,
            fixedFloatingWindow: config.fixedFloatingWindow,
            subtitle: config.subtitle,
            floatText: config.floatText,
            slideBanner: config.slideBanner,
            banners: config.slideBanner.banners,
            adAreaMid: config.adAreaMid,
            fiveBanners: config.fiveBanners,
            adAreaBottm: config.adAreaBottm,
            fixedBanner: config.fixedBanner,
            footText: config.footText,
            floatWindow: config.floatWindow,
            showFloatWindow: false
        },
        computed: {
            subTitleBgStyle: function () {
                var subtitle = this.subtitle
                var style = {}
                if (subtitle.backgroundImgUrlRel) {
                    style.backgroundImage = 'url(' + subtitle.backgroundImgUrlRel + ')'
                } else {
                    style.backgroundColor = subtitle.backgroundColor
                    style.opacity = (1 - subtitle.opacity / 100)
                }
                return style
            }
        },
        mounted() {
            var mySwiper = new Swiper('.swiper-container', {
                direction: 'horizontal', // 垂直切换选项
                loop: true, // 循环模式选项
                observer: true,
                observeParents: true,
                autoplay: {
                    disableOnInteraction: false,
                    delay: 5000,
                },
                speed: 300,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
            })
            document.getElementById('app').style.display = 'block';
            // 页面曝光埋点
            pageLog.onPageLoadLog()
        },
        methods: {
            goPage(url, event) {
                pageLog.onClickLog(event, event.currentTarget)
            },
            showFloatWindowFunc(status) {
                this.showFloatWindow = status
            }
        }
    })
}

initPage()
