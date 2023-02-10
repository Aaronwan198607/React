import Child from "./childs"
function Parent() {
    return (
        <>
            <Child text="hellp" price={123} />
            <Child />
        </>
    )
}export default Parent

