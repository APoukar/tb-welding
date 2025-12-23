import { HeadlineProvider } from 'contexts/HeadlineContext'
import './App.css'
import TbThemeProvider from 'components/TbThemeProvider'
import AboutMe from 'views/AboutMe'
import Contacts from 'views/Contacts'
import Services from 'views/Services'
import Header from 'views/Header'

function App() {
  return (
    <>
      <TbThemeProvider>
        <HeadlineProvider>
          <Header />
          <Services />
          <AboutMe />
          <Contacts />
        </HeadlineProvider>
      </TbThemeProvider>
    </>
  )
}

export default App
