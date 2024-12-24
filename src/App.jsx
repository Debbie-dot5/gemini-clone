import Main from "./components/mainSection/main"
import SideBar from "./components/sideBar/SideBar"
import ContextProvider from "./context/context"




const App = () => {
  return (
    <>
    <ContextProvider>
      <SideBar/>
    <Main />
    </ContextProvider>
    
    </>
  )
}

export default App
