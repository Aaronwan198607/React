// 直接在傳入參數時解構+給預設值
// 可在Parent用VScode內建偵測功能，看到Child需要什麼屬性
function Child({ text = 'no text', price = 0 }) {
  // 先解構再使用如下
  //const { text = 'no text', price = 0 } = props

  return (
    <>
      <h1>{text}</h1>
      <p>價格: {price}</p>
    </>
  )
}

// 原有的預設屬性的寫法，類別型元件/函式型元件通用語法
// Child.defaultProps = {
//   text: 'no text',
//   price: 0,
// }

export default Child
