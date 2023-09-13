import './App.css'
import Header from "./components/header"
import Hero from './components/hero'
import Side from "./components/side"

function App() {

  

  return (
    <>
      <div className='overflow-hidden'>
        <div className='relative grid content-center w-full h-full bg-white'>
          <div> 
            <Header />
          </div>
          <div className='md:flex md:flex-row-reverse'>
            <Side />
            <Hero/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
