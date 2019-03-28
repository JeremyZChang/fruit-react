
export function getRedirectPath({type, avatar}) {
    // 根据用户信息 返回跳转地址
    let url = (type==='boss')?'/boss':'/genius'
    if(!avatar){
        url += 'Info'
    }
    console.log(url)
    return url
}

export function getChatId(userId, targetId) {
    return [userId, targetId].sort().join('_')
}