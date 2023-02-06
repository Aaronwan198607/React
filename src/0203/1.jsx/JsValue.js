function JsValue() {
    return (
        <>
            <h1>JSX語法中語法值得呈現</h1>
            <h2>Num</h2>
            {123 - 99}
            {NaN}
            <h2>String</h2>
            {'abc'}
            {`total=${100 - 5}`}
            <h2>Boolean</h2>
            {true}
            {false}
            {1 > 0}
            




        </>
    )
}
export default JsValue