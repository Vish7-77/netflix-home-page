import Header from "./Components/Header/Header";
import "./App.scss"
import Home from "./Components/Home/Home"
import {
  BrowserRouter,
  Routes,
  Route,
  
} from 'react-router-dom'
function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
        <Route path="/" element={<Home />}/>     
        </Routes> 
  
  </BrowserRouter >
  );
}

export default App;
