import React from 'react';
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import Home from './home.js';
import Log from './login.js';
import Bar from './head.js';
import Reg from './register.js';
import Cart from './cart.js';
import White from './whitefabric.js';
import Productview from './productview.js';
import About from './about.js';
import Adminlog from './adminlogin.js';
import Product from './colour.js';
import Printedproduct from './printed.js';
import Cfood from './catfood.js';
import Dog from './dogfood.js';
import Fish from './fishfood.js';
import Buy from './buy.js';
function App() {
  return (   
    <div>
        <Bar/>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/login'} element={<Log/>} />
            <Route path={'/about'} element={<About/>} />
            <Route path={'/register'} element ={<Reg/>} />
            <Route path={'/whitefabric'} element ={<White/>} />
            <Route path={'/productview'} element ={<Productview/>} />
            <Route path={'/admin'} element ={<Adminlog/>} />
            <Route path={'/colour'} element ={<Product/>} />
            <Route path={'/printed'} element ={<Printedproduct/>} />
            <Route path={'/cart'} element ={<Cart/>} />
            <Route path={'/catfood'} element ={<Cfood/>} />
            <Route path={'/dogfood'} element ={<Dog/>} />
            <Route path={'/fishfood'} element ={<Fish/>} />
            <Route path={'/buy'} element ={<Buy/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
