import './App.css';
import Categories from './Components/Categories/Categories';
import Customarreviw from './Components/Customar_reviw/Customarreviw';
import Destination from './Components/Destination/Destination';
import Navbar from './Components/Navbar/Navbar';
import Sendemail from './Components/Sendemail/Sendemail';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Customarreviw></Customarreviw>
      <Categories></Categories>
      <Destination></Destination>
      <Sendemail></Sendemail>
    </div>
  );
}

export default App;
