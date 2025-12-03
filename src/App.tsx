import './App.css'
import TbThemeProvider from 'components/TbThemeProvider'
import AboutMe from 'views/AboutMe'
import Menu from 'views/Menu'

function App() {
  return (
    <>
      <TbThemeProvider>
        <Menu />
        <AboutMe />
      </TbThemeProvider>
    </>
  )
}

export default App
