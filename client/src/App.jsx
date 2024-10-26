import Toast from "./components/toast/Toast";
import "./App.css";
import PrivateRoutes from "./components/PrivateRoutes";
import Home from "./pages/Home";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import 'semantic-ui-css/semantic.min.css';
import Header from "./pages/components/Header";
function App() {
  return (
    <Router>
      <Toast />
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
