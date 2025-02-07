import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from 'c:/Users/Mamdouh samir/Pure-Beefilo/src/header'
import Home from 'c:/Users/Mamdouh samir/Pure-Beefilo/src/Home'
import About from 'c:/Users/Mamdouh samir/Pure-Beefilo/src/About'
import Services from'c:/Users/Mamdouh samir/Pure-Beefilo/src/Services.jsx'
import Contact from'c:/Users/Mamdouh samir/Pure-Beefilo/src/Contact.jsx'
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
