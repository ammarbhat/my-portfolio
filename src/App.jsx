import Header from "./Components/Header"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import { Element } from 'react-scroll'
import Footer from "./Components/Footer"
function App() {

  return (
    <>
      <Header />
      <Element name="about"><About /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="contact"><Contact /></Element>
      <Footer />
    </>
  )
}

export default App
