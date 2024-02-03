import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
