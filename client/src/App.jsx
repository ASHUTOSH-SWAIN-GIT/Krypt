
import { Navbar, Footer, Welcome, Services, Transactions, Loader } from "./components/index"



function App() {


  return (
    <>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />

      </div>
    </>
  )
}

export default App
