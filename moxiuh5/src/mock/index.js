import Mock from 'mockjs'
import MockData from './data'

Mock.mock('/Mpage/PicUpload_1573460781472', 'post', (req) => {
  switch(req.body.get("filename").split('-')[0]) {
    case "BackgroundLongImg":
      return MockData.backgroundLongImg
    default:
} 
  return {}
})