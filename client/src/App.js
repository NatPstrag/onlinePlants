import React from 'react'

import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Home  from './routes/Home';
import ProductDetailPage from './routes/ProductDetailPage';
import UpdatePage from './routes/UpdatePage';

const App = () => {

    return <div>
        <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/products/:id" element={<ProductDetailPage />}/>
            <Route exact path="/products/:id/update" element={<UpdatePage />}/>
            </Routes>
        </BrowserRouter>
   
    </div>
    
}
export default App;