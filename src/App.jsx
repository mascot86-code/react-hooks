import { Routes, Route } from 'react-router'
import './App.css'
import Home from './Home'
import NotFound from './NotFound'
import Create from './Create'
import Edit from './Edit'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/add" element={<Create />}/>
        <Route path="/edit/:id" element={<Edit />}/>
      </Routes>
    </>
  )
}

export default App
