import './App.css';

import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar'
import Index from './Components/Index'
import Contact from './Components/Contact'

function App() {
  return (
        
        <BrowserRouter>
          <div>      
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Index/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </div>
        </BrowserRouter>
        
  );
}

export default App;




// import './App.css';

// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Work from './Components/Work';
// import Portfolio from './Components/Portfolio';
// import Portfile from './Components/Profile';
// import About from './Components/About';
// import SocialMedia from './Components/SocailMedia';
// import Footer from './Components/Footer';

// function App() {
//   return (
        
//         <div>
//           <Navbar />
//           <Home />
//           <Work />
//           <Portfolio />
//           <Portfile />
//           <About />
//           <SocialMedia />
//           <Footer />
//         </div>
        
//   );
// }

// export default App;
