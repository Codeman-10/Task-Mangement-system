import Toast from "./components/toast/Toast";
import "./App.css";
import PrivateRoutes from "./components/PrivateRoutes";
import Home from "./pages/Home";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import "semantic-ui-css/semantic.min.css";
import Header from "./pages/components/Header";
import SideBar from "./pages/components/SideBar";
import AddTaskPopup from "./pages/components/AddTaskPopup";
function App() {
  return (
    <Router>
      <Toast />
      <div className="app-container">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/f" element={<AddTaskPopup />} />

          <Route element={<PrivateRoutes />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
