import { useState } from 'react'

function HTML5Form() {
  const [inputText, setInputText] = useState('')
  const [selectValue, setSelectValue] = useState(0)
  const [textareaText, setTextareaValue] = useState('')
    const [gender, setGender] = useState('')
  const genderOptions = ['男', '女', '不提供']

  return (
    <>
      <h1>表單元件範例(可控)</h1>
      <section id="input-text">
        <h1>文字輸入框</h1>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section id="select">
        <h1>下拉式選單</h1>
        <select
          value={selectValue}
          onChange={(e) => {
            setSelectValue(Number(e.target.value))
          }}
        />
      </section>
      <section id="textarea">
        <h1>文字輸入區域</h1>
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaValue(e.target.value)
          }}
        />
      </section>
      {/* <section id="radio-button">
        <h1>選項按鈕</h1>
        {gender.map((v, i) => {
          return (
              <div key={i}>
                  <input
                      type="radio"
                      value={v}
                checked={v === gender}
                      onChange={(e) => {
                          setGender(e.target.value)
                      }}
                  />
                  <lable>{v}</lable>
              </div>
                  )
        })}
      </section> */}
          {/* TODO:代處理 */}
        <section>
            
        </section>
    </>
  )
}
export default HTML5Form
