  import './App.css';
  import "bootstrap/dist/css/bootstrap.min.css"
  import Particles from "react-particles-js"
  import Navbar from './components/Navbar';
  import Header from "./components/Header";
  import About from "./components/About";
  import Services from './components/Services';
  import Qualifiction from './Qualifiction';
  import Contact from './components/Contact';
  import Footer from './components/Footer';

  function App() {
    return (
      <>
    <Particles
    params={{
      particles: {
        color: {
          value: "#fff"
        },
        line_linked: {
          color: {
            value: "#fff"
          }
        },
        number: {
          value: 30,

        },
        size: {
          value: 10
        },
        shape:{
          type:"inside",
          stroke:{
            width:5,
            color:"#fff"
          }
        }
      }
    }}
  />
      <Navbar />
      <Header />
      <About />
      <Services/>
      <Qualifiction />
      <Contact/>
      <Footer />
      </>
    
    );
  }

  export default App;
