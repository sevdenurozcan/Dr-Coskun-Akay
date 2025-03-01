import './App.css'
import Header from "./components/Header"
import Body from "./components/Body"
import Ozon from "./components/Ozon"
import SlidingMakaleler from './components/SlidingMakaleler'


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
        <div className='app-makaleler'>
          <SlidingMakaleler />
        </div>

      </div>
    </div>
  )
}

export default App
