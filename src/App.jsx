import { Route, Routes } from "react-router-dom";
import "./App.css";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CarDetails from "./pages/CarDetails/CarDetails";
import Favorites from "./pages/Favorites/Favorites";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/catalog" element={<CatalogPage />}>
            <Route path="/catalog/:carId" element={<CarDetails />} />
          </Route>
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Header>
    </>
  );
}

export default App;
