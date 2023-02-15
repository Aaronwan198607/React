import { useState } from 'react'

function RegisterForm() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleFieldChange = (e) => {
    // console.log(e.target.type, e.target.name, e.target.value)
    // 計算得來的屬性名稱(ES6) Computed property names (ES6)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names

    const newUser = { ...user, [e.target.name]: e.target.value }

    setUser(newUser)
  }
  const handlSubmit = (e) => {
    e.preventDefault()
    console.log(user)

    const formDate = new FormData(e.target)
    console.log(
      formDate.get('username'),
      formDate.get('email'),
      formDate.get('password')
    )
    const handleInnald = (e) => {
      e.preventDefault()
      setFieldErrors({
        ...fieldErrors,
        [e.target.name]: e.target.validationMessage,
      })
    }
  }

  return (
    <>
      <h1>會員註冊表單</h1>
      <form onSubmit={handlSubmit}>
        <div>
          <label>帳號</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleFieldChange}
            require
          />
          {fieldErrors.username}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleFieldChange}
            require
          />
          {fieldErrors.email}
        </div>
        <div>
          <label>密碼</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleFieldChange}
            require
          />
          {fieldErrors.password}
        </div>
        <button type="submit">提交</button>
      </form>
    </>
  )
}

export default RegisterForm
