import { Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthContextProvider>
            <Home />
          </AuthContextProvider>
        }
      />

      <Route
        path="/rooms/new"
        element={
          <AuthContextProvider>
            <NewRoom />
          </AuthContextProvider>
        }
      />
    </Routes>
  );
}

export default App;
