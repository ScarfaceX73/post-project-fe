import './App.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./auth/firebase";
import Dashboard from "./components/dashboard";
import Header from "./components/header";
import { Login } from "./components/login";
import Sidebar from "./components/sidebar/index";

function App() {
  return (
    <div>
      hello there
    </div>
  );
}

export default App;
