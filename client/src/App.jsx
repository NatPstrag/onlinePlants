import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import MainNavigation from './layout/MainNavigation';
import Admin from './routes/Admin';
import Cart from './routes/Cart';
import Home  from './routes/Home';
import ProductDetailPage from './routes/ProductDetailPage';
import UpdatePage from './routes/UpdatePage';





const App = () => {
    return(  
    
            <div className="constainer">
                <BrowserRouter>
                    <MainNavigation />
                        <Routes>
                            <Route exact path="/" element={<Home />}/>
                            <Route exact path="/products/:id" element={<ProductDetailPage />}/>
                            <Route exact path="/products/:id/update" element={<UpdatePage />}/>
                            <Route exact path="/cart" element={<Cart />}/>
                            <Route exact path="/products" element={<Admin />}/>
                        </Routes>
                </BrowserRouter>
            </div>
   
    );
};
export default App;