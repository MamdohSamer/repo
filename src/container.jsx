import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './header'
import Home from './Home'
import About from './About'
import Services from'./Services.jsx'
import Contact from'./Contact.jsx'
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
