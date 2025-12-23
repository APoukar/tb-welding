import { HeadlineProvider } from 'contexts/HeadlineContext'
import './App.css'
import TbThemeProvider from 'components/TbThemeProvider'
import AboutMe from 'views/AboutMe'
import Contacts from 'views/Contacts'
import Menu from 'views/Menu'
import Services from 'views/Services'

function App() {
  return (
    <>
      <TbThemeProvider>
        <HeadlineProvider>
          <Menu />
          <Services />
          <AboutMe />
          <Contacts />
        </HeadlineProvider>
      </TbThemeProvider>
    </>
  )
}

export default App
