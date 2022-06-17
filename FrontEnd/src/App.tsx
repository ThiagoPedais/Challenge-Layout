import './core/assets/styles/custom.scss';
import './app.scss';

import NavBar from './core/components/NavBar'
import Home from './pages/Home';
import Catalog from './pages/Catalog';


const App = () => {
  return (
    <>
    <NavBar />
    
    <Catalog/>
    </>
  )
}

export default App;
