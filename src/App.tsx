import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";

export const TestContext = React.createContext('');

function App() {
  return (
    <Routes>
      <Route path='/' element={
      <TestContext.Provider value={'Teste'}>
        {<Home />}
        </TestContext.Provider> }
      />

      <Route path='/rooms/new' element={
      <TestContext.Provider value={'Teste'}>
        {<NewRoom />}
        </TestContext.Provider> }
      />
       
      
    </Routes>
  );
}

export default App;
