import Mock from 'mockjs'
import MockData from './data'

Mock.mock('/Mpage/PicUpload_1573460781472', 'post', (req) => {
  switch(req.body.get("filename").split('-')[0]) {
    case "BackgroundLongImg":
      return MockData.backgroundLongImg
    case "FixedFloatWindow":
      return MockData.FixedFloatWindow
    case "FloatText":
        return MockData.FloatText
    case "Subtitle":
        return MockData.Subtitle
    case "FixedBanner":
        return MockData.FixedBanner
    case "SlideBannerTitle":
        return MockData.SlideBannerTitle
    case "AdAreaMidTitle":
      return MockData.SlideBannerTitle
    case "AdAreaBottmTitle":
      return MockData.SlideBannerTitle
    case "BannerBackgroundImgad1":
        return MockData.BannerBackgroundImgad1
    case "BannerBackgroundImgad2":
      return MockData.BannerBackgroundImgad2
    case "BannerBackgroundImgad3":
      return MockData.BannerBackgroundImgad3
    case "BannerBackgroundImgad4":
      return MockData.BannerBackgroundImgad4 
    case "BannerBackgroundImgad5":
      return MockData.BannerBackgroundImgad5
    case "BannerTitlead1":
        return MockData.BannerTitle
    case "BannerTitlead2":
      return MockData.BannerTitle
    case "BannerTitlead3":
      return MockData.BannerTitle
    case "BannerTitlead4":
      return MockData.BannerTitle 
    case "BannerTitlead5":
      return MockData.BannerTitle
    case "GuideIconad1":
        return MockData.BannerGuideIcon1
    case "GuideIconad2":
      return MockData.BannerGuideIcon2
    case "GuideIconad3":
      return MockData.BannerGuideIcon3
    case "GuideIconad4":
      return MockData.BannerGuideIcon4
    case "GuideIconad5":
      return MockData.BannerGuideIcon5
    case "SlideBannerBG":
      return MockData.SlideBannerBG
    case "SlideBannerGuide":
      return MockData.SlideBannerGuide
    default:
} 
  return {}
})