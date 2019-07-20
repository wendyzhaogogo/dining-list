// 常用工具函数

/**
 *  递归合并object
 */
export function mergeObjectDeep (target: any, anotherObject: any) {
  if (typeof target !== 'object' || typeof anotherObject !== 'object') throw Error('合并参数必须为对象')
  // 微信小程序未对Array.includes进行类型定义
  const anotherObjectKeys: any = Object.keys(anotherObject)
  const targetKeys: any = Object.keys(target)
  targetKeys.forEach((k: string) => {
    if (!anotherObjectKeys.includes(k)) return
    const t = target[k]
    if (typeof t !== 'object') target[k] = anotherObject[k]
    else {
      mergeObjectDeep(t, anotherObject[k])
    }
  })
  anotherObjectKeys.forEach((k: string) => {
    if (!targetKeys.includes(k)) target[k] = anotherObject[k]
  })
  return target
}
