import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Routes,Route } from "react-router-dom";
import { Login } from './components/Login';
import { Details } from './components/Details';
function App() {
  return (
    <div>
        <Header/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/details" element = {<Details/>}/>
        </Routes>
    </div>
  );
}

export default App;

