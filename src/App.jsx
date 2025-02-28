import './App.css'
import Header from "./components/Header"
import Body from "./components/Body"
import Ozon from "./components/Ozon"

function App() {

  return (
    <div className='everything'>
      <div className='container-main'>
        <div className='app-header'>
          <Header />
        </div>
        <div className='app-ozon'>
          <Ozon />
        </div>
        <div className='app-body'>
          <Body />
        </div>

      </div>
    </div>
  )
}

export default App
