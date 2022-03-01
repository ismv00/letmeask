
import {
  Routes,
  Route,
} from "react-router-dom";


import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";

import { AuthContextProvider } from './contexts/AuthContext';


function App() { 
return (
    <Routes>
      <Route path='/' element={
        <AuthContextProvider>
          {<Home />}
        </AuthContextProvider> }
      />

      <Route path='/rooms/new' element={
        <AuthContextProvider>
          {<NewRoom />}
        </AuthContextProvider> }
      />
       
      
    </Routes>
  );
}

export default App;
