import React from 'react'

class CC extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
    }
    console.log('constructor')
  }

  // 在初次render後，會執行此方法中的程式碼(did = After)
  componentDidMount() {
    console.log('componentDidMount')
  }

  // 當state或props有改變時，render後，會執行此方法中的程式碼(did = After)
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  // 在元件要被從真實dom中移除"前"，會執行此方法中的程式碼(will = Before)
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')
    return (
      <>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default CC
