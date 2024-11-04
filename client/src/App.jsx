
import { Home, Landing, Form, Detail } from './views'
import { NavBar } from './component'
import { Routes, Route, useLocation } from 'react-router-dom'





function App() {

  const location = useLocation();

  return (

    <div className='App'>

      {location.pathname !== '/' && <NavBar />}

      <Routes>

        <Route path='/' element={<Landing />}></Route>

        <Route path='/home' element={<Home />}></Route>

        <Route path='/create' element={<Form />}></Route>

        <Route path='/detail/:id' element={<Detail />}></Route>

      </Routes>

    </div>
  )
}

export default App
