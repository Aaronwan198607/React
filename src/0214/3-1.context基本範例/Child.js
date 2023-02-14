import { useContext } from 'react'

import { ThemCountext } from './ThemeContext'

function Child() {
  const { color, setColor } = useContext(ThemCountext)
  return (
    <>
      <h1 style={{ color: color }}>Child</h1>
      <button
        onclick={() => {
          setColor('red')
        }}
      >
        Red
      </button>
      <button
        onClick={() => {
          setColor('green')
        }}
      >
        green
      </button>
    </>
  )
}
export default Child
