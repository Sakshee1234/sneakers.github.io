import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Firstpage from './components/firstPage';
import App1 from './App1';
import Cart from './components/Cart';
import {AIRFORCE,JORDAN,CRATER,HIPPIE,BLAZER} from './shoppingcardsdata.js';
import Shoppingcard from './components/shoppingcard';
import Wishlist from './components/Wishlist';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import Account from './components/Account';
import Account1 from './components/Account1';
import OrderDetails from './components/OrderDetails';
import About from './components/About';

const App = () => {
  const [wishlist,setWishlist]=React.useState({BLAZER,CRATER,JORDAN,HIPPIE,AIRFORCE});
  function addOrRemovefromWishlist(title){
    setWishlist(BLAZER.map((data)=>{
      return data.title===title?data.wishlist=!data.wishlist:data;
    }))
    setWishlist(CRATER.map((data)=>{
      return data.title===title?data.wishlist=!data.wishlist:data;
    }))
    setWishlist(JORDAN.map((data)=>{
      return data.title===title?data.wishlist=!data.wishlist:data;
    }))
    setWishlist(HIPPIE.map((data)=>{
      return data.title===title?data.wishlist=!data.wishlist:data;
    }))
    setWishlist(AIRFORCE.map((data)=>{
      return data.title===title?data.wishlist=!data.wishlist:data;
    }))
  }
  
  const [cart,setCart]=React.useState([]);

  function addToCart(title){
    BLAZER.map(function(data){
      if(data.title===title){
        setCart(prevCart=>{
          return [...prevCart,data];
        })
      }
    })

    AIRFORCE.map(function(data){
      if(data.title===title){
        setCart(prevCart=>{
          return [...prevCart,data];
        })
      }
    })

    JORDAN.map(function(data){
      if(data.title===title){
        setCart(prevCart=>{
          return [...prevCart,data];
        })
      }
    })

    CRATER.map(function(data){
      if(data.title===title){
        setCart(prevCart=>{
          return [...prevCart,data];
        })
      }
    })

    HIPPIE.map(function(data){
      if(data.title===title){
        setCart(prevCart=>{
          return [...prevCart,data];
        })
      }
    })
  }

  function addItemQuantity(title){
    setCart(prevCart=>{
      return prevCart.map((data)=>{
        return data.title===title?{...data,qty:data.qty+1}:data;
      })
    })
  }

  function subItemQuantity(title){
    setCart(prevCart=>{
      return prevCart.map((data)=>{
        return data.title===title?{...data,qty:(data.qty>1?data.qty-1:data.qty)}:data;
      })
    })
  }
  
  function emptyCart(){
    setCart([]);
  }
  function removeItem(title){
    setCart(prevCart=>{
      return prevCart.filter((data)=>{
        return data.title!==title;
      })
    })
  }

  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path='/App1' element={<App1/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/OrderDetails' element={<OrderDetails/>}/>
        <Route path='/Account' element={<Account/>}/>
        <Route path='/Account1' element={<Account1/>}/>
        <Route path='/Cart' element={<Cart
            cart={cart}
            emptyCart={emptyCart} 
            addItemQuantity={addItemQuantity}
            subItemQuantity={subItemQuantity}
            removeItem={removeItem}
            addOrRemovefromWishlist={addOrRemovefromWishlist}
          />}/>
        <Route path='/Wishlist' element={<Wishlist
            addToCart={addToCart}
          />}/>
          <Route path='/Footer' element={<Footer/>}/>
          <Route path='/ProductDetails/:title' element={<ProductDetails/>}/>
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
};

export default App;
