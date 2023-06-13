import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from "react";
/*import {
  BrowserRouter,
  Route,
  Routes,
  
} from "react-router-dom";*/

function App(){
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  
  const toggleMode = () =>{
    if(mode ==='light'){
      setMode("dark");
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success")
      document.title = 'Text Utility- Dark mode';
      /*setInterval(() => {
        document.title = 'Your system is hacked';
      }, 1500);                                            // prank :)
      setInterval(() => {
        document.title = 'Injecting virus now';
      }, 3000);*/
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title = 'Text Utility- Light mode';
      
    }
  }


   
  return (
     <>
    {/*<BrowserRouter>*/}
    
    <Navbar  title = "MYAPP1" mode={mode} toggleMode={toggleMode} about = "ABOUT US"/>
    <Alert alert={alert}/>
    <div className="container">
     {/*<Routes>*/}
    
      {/*<Route path ="/about" element={<About/>}> </Route>*/}
      {/*<Route path ="/" element=*/}{<TextForm showAlert={showAlert} heading="Enter some text" mode={mode}/>}{/*>*/}   {/*</Route>*/}

      {/*</Routes>*/} 
    
    </div>

    
    {/*</BrowserRouter>*/}
    </>
  );
  }
  export default App;