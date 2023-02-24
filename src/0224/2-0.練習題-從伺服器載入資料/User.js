import { useState, useEffect } from 'react'
import axios from 'axios'

import './User.css'

function User() {
  // {
  //   id: "107001",
  //   name: "張佳蓉",
  //   age: 22
  // },
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const res = await axios.get(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    )

    setUsers(res.data)
  }

  // didMount
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h1>學生名單</h1>
      <table>
        <thead>
          <tr>
            <th>學號</th>
            <th>姓名</th>
            <th>年齡</th>
          </tr>
        </thead>
        <tbody>
          {users.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.age}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default User
