// const ADD_NUM = 'plus'
// const REMOVE_NUM = 'minus'
//
// // reducer
// export function counter(state=0, action) {
//     switch(action.type) {
//         case 'plus':
//             return state+1
//         case 'minus':
//             return state-1
//         default:
//             return 10
//     }
// }
//
// // action creator
// export function addNum() {
//
//     console.log('Plus')
//     return {type: ADD_NUM}
// }
// export function removeNum() {
//     return {type: REMOVE_NUM}
// }
// export function addNumAsync() {
//     console.log('Plus wait')
//     return dispatch =>{
//         setTimeout(() => {
//             dispatch(addNum())
//         }, 1000)
//     }
// }
//
// //
// // const store = createStore(counter)
// //
// // const init = store.getState()
// // console.log(init)
// //
// // function listener(){
// //     const current = store.getState()
// //     console.log(`现在状态是${current}`)
// // }
// //
// // store.subscribe(listener)
// //
// // store.dispatch({type:'plus'})
// // store.dispatch({type:'plus'})
// // store.dispatch({type:'minus'})