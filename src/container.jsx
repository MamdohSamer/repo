import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from 'c:/Users/Mamdouh samir/meat/src/header'
import Home from 'c:/Users/Mamdouh samir/meat/src/Home'
import About from 'c:/Users/Mamdouh samir/meat/src/About'
import Services from'c:/Users/Mamdouh samir/meat/src/Services.jsx'
import Contact from'c:/Users/Mamdouh samir/meat/src/Contact.jsx'
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
