import { useState } from 'react'
import './Menu.css'

function Menu() {
  const [activeText, setActiveText] = useState('')
  const menuItems=['首頁','關於我們','產品']

  return (
    <>
      <ul>
        {menuItems.map((v, i) => {
          return (
            <li key={i}>
              <a
                className={`${activeText === v ? 'active' : ''}`}
                href="#/"
                onClick={() => {
                  setActiveText(v)
                }}
              >
                {v}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Menu
