import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./Components/Navibar";
import Users from "./Components/Users";
import About from "./Components/About";
import Home from "./Components/Home";
import {Route, Routes} from "react-router-dom";


function App() {
    return (
        <>
            <Navibar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </>
    );
}

export default App;
