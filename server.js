import Http from '@http'

// 获取详情
const getDetail = (params) => Http.get(['host', '/query'], params)

// 保存
const editApi = (params) => Http.post(['host', '/save'], params)

// 删除
const remove = (id) => Http.post(['host', '/remove'], { id })

export {
  getDetail,
  editApi,
  remove,
}