import "./index.css"
import Body from './landing/Body';
import Navbar from './components/NavBar'; // Corrected casing from 'Navbar' to 'NavBar'
import Footer from "./components/Footer";


function App() {
  return (
      <div className="">
  <Navbar/>
  <Body/>
  <Footer />
    </div>
  );
}

export default App;
