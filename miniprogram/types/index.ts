// 定义一些微信官方没定义的类型，（也可能没有找到，随时更新）

/**
 *  target类型，暂时不知道干什么用
 */
export interface Target {
  dataset: object
  id: string
  offsetLeft: number
  offsetTop: number
}

/**
 *  open-type类型
 */
export type OpenType = 'getuserinfo'

/**
 *  open-type方式绑定的获取用户信息的参数
 *  如果用户未授权，detail只有errMsg信息
 */
export type BindGetUserInfoResult = {
  currentTarget: Target
  detail: {
    errMsg: string
    cloudID?: string
    encryptedData?: string  // 加密后数据，包含用户手机号
    userInfo?: wx.UserInfo  // 用户的手机号
    iv?: string
    rawData?: string  // JSON转换前的用户数据
    signature?: string
  }
  mark: object
  target: Target
  timeStamp: number
  type: OpenType
}

/**
 *  open-type方式绑定的获取用户信息的回调
 */
export type BindGetUserInfo = (result: BindGetUserInfoResult) => any
