import Mock from 'mockjs'

Mock.mock('/MPageManage/Mpage/PicUpload', 'post', (req) => {
  const fileName = req.body.get("file").name
  return {
    Status: "0",
    AbsPath: fileName,
    RelativePath: fileName,
    Msg: "",
  }
})