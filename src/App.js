import React,{useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";


function App() {
  const [cartpopup, setCartpopup] = useState(false)

  const cartopenhandler = ()=>{
    setCartpopup(true)
  }

  const cartclosehandler = ()=>{
    setCartpopup(false)
  }


  return (
    <div>
      {cartpopup && <Cart onClose={cartclosehandler}/>}
      
      <Header onClick={cartopenhandler} />
      <main>
        <Meals/>
      </main>
      
    </div>
  );
}

export default App;
