import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AuthContextProvider from "./context/AuthContextProvider";
import CrudContextProvider from "./context/CrudContextProvider";
import MainRoutes from "./routes/MainRoutes";


function App() {
  return (
    
    <>
    <AuthContextProvider>
    <CrudContextProvider>
      <Navbar/>
    <MainRoutes/>
    <Footer/>
    </CrudContextProvider>
    </AuthContextProvider>
    </>
  );
}

export default App;
