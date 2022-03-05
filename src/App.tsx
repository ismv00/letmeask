
import {
  Routes,
  Route,
} from "react-router-dom";


import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";

import { AuthContextProvider } from './contexts/AuthContext';
import { Room } from "./pages/Room";


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

      <Route path='/rooms/:id' element={
        <AuthContextProvider>
          {<Room />}
        </AuthContextProvider> }
      />
       
      
    </Routes>
  );
}

export default App;
