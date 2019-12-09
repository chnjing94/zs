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
    default:
} 
  return {}
})