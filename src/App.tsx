import { HeadlineProvider } from 'contexts/HeadlineContext'
import './App.css'
import TbThemeProvider from 'components/TbThemeProvider'
import AboutMe from 'views/AboutMe'
import Contacts from 'views/Contacts'
import Services from 'views/Services'
import Welcome from 'views/Welcome'
import Menu from 'views/Menu'
import Qualification from 'views/Qualification'
import Footer from 'views/Footer'

function App() {
  return (
    <>
      <TbThemeProvider>
        <HeadlineProvider>
          <header>
            <Welcome />
            <Menu />
          </header>
          <main>
            <Services />
            <AboutMe />
            <Qualification />
            <Contacts />
          </main>
          <Footer />
        </HeadlineProvider>
      </TbThemeProvider>
    </>
  )
}

export default App
