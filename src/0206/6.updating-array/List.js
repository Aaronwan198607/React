import { useState } from 'react'
import './List.css'

const data = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

function List() {
  // 與呈現有關必需先成為state
  const [items, setItems] = useState(data)

  const myTable = (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Text</th>
        </tr>
      </thead>
      <tbody>
        {items.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.text}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  const note = (
    <p>
      <strong>
        注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
      </strong>
      因有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上
      <strong>務必確保 key不能重覆</strong>。
    </p>
  )

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      {myTable}
      <hr />
      {note}
      <h2>基本操作</h2>
      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newItem = { id: 99, text: 'xxx' }

          // 1. 從目前的狀態拷貝(深拷貝deep copy)出一個新的變數值(陣列/物件) (注意:所有js常見api均為淺拷貝(shallow))
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          // 註: 不涉及到陣列中物件層級可以用陣列淺拷貝(意指只對陣列新增、插入、刪除…等處理)
          const newItems = [newItem, ...items]

          //3
          setItems(newItems)
        }}
      >
        1. 列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newItem = { id: 88, text: 'yyy' }

          //1 //2
          const newItems = [...items, newItem]

          //3
          setItems(newItems)
        }}
      >
        2. 列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          // id可使用以下方式產生
          // 1. 時間日期物件的毫秒值(只用於單人使用應用中)
          const newId = +new Date() // Number(new Date())
          // 2. 使用隨機函式或函式庫(uuid/ nanoid)...
          // 3. 利用目前所有資料的id，產生不重覆id
          //const ids = items.map((v) => v.id)
          //const newId = Math.max(...ids) + 1
          const newItem = { id: newId, text: 'xxx' }

          //1 //2
          const newItems = [newItem, ...items]

          //3
          setItems(newItems)
        }}
      >
        3. 列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          const newItem = { id: +new Date(), text: 'yyy' }

          //1 //2
          const newItems = [...items, newItem]

          //3
          setItems(newItems)
        }}
      >
        4. 列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          // 1,2
          const newItems = items.filter((v, i) => {
            return v.text.includes('a')
          })

          // 3
          setItems(newItems)
        }}
      >
        5. 尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      <button
        onClick={() => {
          // 刪除文字為b的物件資料
          // 相當於 ->
          // 建立(過濾出)一個沒有文字b的物件陣列
          // 不是文字b的物件才能加到新陣列
          // 1,2
          const newItems = items.filter((v, i) => {
            return v.text !== 'b'
          })

          // 3
          setItems(newItems)
        }}
      >
        6. 刪除文字為b的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 1,2
          const newItems = items.filter((v, i) => {
            return v.id !== 4
          })

          // 3
          setItems(newItems)
        }}
      >
        7. 刪除id為4的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 尋找id=2的索引值為何
          const index = items.findIndex((v, i) => {
            return v.id === 2
          })

          // if 找到時
          if (index !== -1) {
            // 建立要插入的新物件
            const newItem = { id: 5, text: 'bbb' }

            // 分割陣列為兩部份(slice)
            // ex. index=1 => [1,2,3,4].slice(0,1) => [1]
            // .slice(開頭index, 結束index) 但不包含結束index的值
            const aa = items.slice(0, index + 1)

            // 以下相當於分割到陣列最尾端 slice(index + 1, items.length)
            const ab = items.slice(index + 1)

            // 插入新物件、合併
            const newItems = [...aa, newItem, ...ab]

            // 3. 設定回state中
            setItems(newItems)
          }
        }}
      >
        8. 在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />
      <button
        onClick={() => {
          //1 完全拷貝
          //多拷貝一階層的語法(針對陣列中是一層物件的狀態)
          const newItems = items.map(v, i) = {
            
          }

        }}>
        
        
        9. 取代id為3的文字為cccc</button>
      <br />
      <hr />
      <h2>純粹化(Purify)練習</h2>
      <ul>
        <li>
          10. 將上述練習所有處理函式進行純粹化(Purify)，即改為純粹函式(pure
          function)另外寫出。
        </li>
      </ul>
      <hr />
      <h2>連續操作練習</h2>
      <ul>
        <li>
          11-1.
          所有項目均加入一個新的`count:0`屬性，並在另個表格呈出來(寫出另個表格)
        </li>
        <li>11-2. 所有項目新增一個`+`按鈕，並在另個表格呈出來(寫出另個表格)</li>
        <li>
          11-3. 讓每個項目的`+`按鈕可以獨立運作，每按一次可讓每個的項目的`count`
          屬性加1
        </li>
      </ul>
    </>
  )
}

export default List
