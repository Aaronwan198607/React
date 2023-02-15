import { useState } from 'react'

function HTML5Form() {
  const [inputText, setInputText] = useState('')
  const [textareaText, setTextareaText] = useState('')

  return (
    <>
      <h1>表單元件範例</h1>
      <section>
        <h1>文字輸入框</h1>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section>
        <h1>文字輸入區域</h1>
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value)
          }}
        />
      </section>
    </>
  )
}
export default HTML5Form
