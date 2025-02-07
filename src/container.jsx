import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from 'src/header'
import Home from 'src/Home'
import About from 'src/About'
import Services from'src/Services.jsx'
import Contact from'src/Contact.jsx'
import './container.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
  <div className="container">
    <About/>
    <Services/>
    <Contact/>
  </div>
  </StrictMode>

)
