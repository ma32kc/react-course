import React from 'react';
import {Product} from "./components/product";
import {products} from "./data/products";

function App() {
    return (
        <div className="App">
            <div className="container mx-auto max-w-2xl pt-4">
                {products.map(product => <Product product={product} key={product.id} />)}
            </div>
        </div>
    );
}

export default App;
