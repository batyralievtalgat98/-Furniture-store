import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AuthContextProvider from "./context/AuthContextProvider";
import CrudContextProvider from "./context/CrudContextProvider";
import MainRoutes from "./routes/MainRoutes";
import CardContextProvider from "./context/CardContextProvider";



function App() {
  return (
    
    <>
    <CardContextProvider>
    <AuthContextProvider>
    <CrudContextProvider>
      <Navbar/>
    <MainRoutes/>
    <Footer/>
    </CrudContextProvider>
    </AuthContextProvider>
    </CardContextProvider>
    </>
  );
}

export default App;
