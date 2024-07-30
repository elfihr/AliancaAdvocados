
import './App.css';
import Hero from './page/Hero';
import About from './page/About';
import Service from './page/Service';
import Testimonials from './page/Testimonials';
import Number from './page/Number';
import Team from './page/Team';
import Contact from './page/Contact';
import Form from './page/Form';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
    <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Testimonials/>
      <Number/>
      <Team/>
      <Contact/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
