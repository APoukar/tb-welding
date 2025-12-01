import './App.css'
import TbThemeProvider from './components/TbThemeProvider'
import Menu from './views/Menu'

function App() {
  return (
    <>
      <TbThemeProvider>
        <Menu />
      </TbThemeProvider>
    </>
  )
}

export default App
