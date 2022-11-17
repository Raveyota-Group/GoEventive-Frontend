import logo from '../assets/logo.svg';
import './App.css';

import {motion} from 'framer-motion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1, rotate: [0, 360]}}
            transition={{duration: 2.5}}>
        <img src={logo} className="App-logo" alt="logo" />
        </motion.div>
        <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        </motion.div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
