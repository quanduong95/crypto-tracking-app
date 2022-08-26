import "./index.css";
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured/Featured";
import Signup from "./components/Signup/Signup";
import Footer from "./components/Footer/Footer";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Featured />
      <Signup />
      <Footer />
      <Routes>
        <Route path='/' exact component={Hero} />
        <Route path='/feature'  component={Featured} />        
        <Route path='/sign-up'  component={Signup} />        
        <Route path='/footer'  component={Footer} />        
      </Routes>
    </Router>
  );
}

export default App;
