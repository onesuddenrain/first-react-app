import { useState } from 'react'
import './App.css'
import Header from './assets/Segments/Header/Header'
import Content from './assets/Segments/Content/Content'
import Footer from './assets/Segments/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  )
};

export default App
