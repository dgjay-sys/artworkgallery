//redux
import {Provider} from "react-redux"
import Store from "./helpers/store"


//view
import Loginpage from './view/Loginpage';
import Register from './view/Register';
import Registerinfo from './view/Registerinfo';
import Homepage from './view/Homepage';
import Profile from './view/Profile';
import Myaccount from './view/Myaccount';
//route
import {BrowserRouter as BR, Route, Routes} from "react-router-dom";

function App() {
  return (
     <>
      <Provider store={Store}>
         <BR>
            <Routes>
               <Route path="/" element={<Loginpage/>}/>
               <Route path="/register" element={<Register/>}/>
               <Route path='/register/info' element={<Registerinfo/>}/>
               <Route path="/homepage" element={<Homepage/>}/>
               <Route path= "/profile" element={<Profile/>}/>
               <Route path="/myaccount" element={<Myaccount/>}/>
            </Routes>
         </BR>
      </Provider>
     
     </>
  );
}

export default App;
