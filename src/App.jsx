import SideBar from "./components/sideBar/SideBar"
import MainSection from "./components/mainSection/MainSection"
import ContextProvider from "./context/context"




const App = () => {
  return (
    <>
    <ContextProvider>
      <SideBar/>
      <MainSection />
    </ContextProvider>
    
    </>
  )
}

export default App
