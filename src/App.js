
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Tooltip from './Pages/Tooltip'
import Home from './Pages/Home'
import Header from './Components/Header';
import Works from './Pages/Works';



function App() {
  return (
    <div className="App">
      <Header></Header>
<Routes>
  <Route path='/go' element={<Tooltip></Tooltip>}></Route>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/works' element={<Works></Works>}></Route>
</Routes>


    </div>
  );
}

export default App;
