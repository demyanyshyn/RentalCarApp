import { Route, Routes } from "react-router-dom";
import "./App.css";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CarDetails from "./pages/CarDetails/CarDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/catalog" element={<CatalogPage />}>
          <Route path="/catalog/:carId" element={<CarDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
