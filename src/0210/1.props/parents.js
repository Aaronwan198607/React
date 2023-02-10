import Child from "./Childs"
function Parent() {
  return (
    <>
      <Child text="hello" price={123} />
      <Child />
    </>
  )
}
export default Parent
