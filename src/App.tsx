import { HeadlineProvider } from 'contexts/HeadlineContext'
import './App.css'
import TbThemeProvider from 'components/TbThemeProvider'
import AboutMe from 'views/AboutMe'
import Contacts from 'views/Contacts'
import Menu from 'views/Menu'

function App() {
  return (
    <>
      <TbThemeProvider>
        <HeadlineProvider>
          <Menu />
          <AboutMe />
          <Contacts />
        </HeadlineProvider>
      </TbThemeProvider>
    </>
  )
}

export default App
