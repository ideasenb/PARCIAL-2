import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './componentes/Header.jsx'
import SideBar from './componentes/Sidebar.jsx'
import GameList from './componentes/GameCard.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <SideBar />
    <GameList />
  </StrictMode>,
)
