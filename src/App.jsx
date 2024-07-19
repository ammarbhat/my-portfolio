import Header from "./Components/Header"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import { Element } from 'react-scroll'
import Footer from "./Components/Footer"
import projecData from "./data"
function App() {
  const mappedData = projecData.map(
    function(data){
      return(
        <Projects
        img= {data.img}
        link= {data.link}
        title= {data.title}
        frameWorks= {data.frameWorks}
        />
      )
    }
  )
  return (
    <>
      <Header />
      <Element name="about"><About /></Element>
      <Element name="projects">{mappedData}</Element>
      <Element name="contact"><Contact /></Element>
      <Footer />
    </>
  )
}

export default App
