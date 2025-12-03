import './App.css'
import TbThemeProvider from 'components/TbThemeProvider'
import AboutMe from 'views/AboutMe'
import Contacts from 'views/Contacts'
import Menu from 'views/Menu'

function App() {
  return (
    <>
      <TbThemeProvider>
        <Menu />
        <AboutMe />
        <Contacts />
      </TbThemeProvider>
    </>
  )
}

export default App
