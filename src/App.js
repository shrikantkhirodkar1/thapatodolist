import react from "react"
const App = () => {
  return (
    <>
      <div className="main-div">
        <div className="center-name">
          <br />
          <h1>to do list</h1>
          <input type="text" placeholder="add item" />
          <button >+</button>
          <ol>
            <li>buy apple</li>
          </ol>
        </div>
      </div>
    </>
  )
}
export default App