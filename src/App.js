import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";

import Product from "./components/Product";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {path: '/', element: <Dashboard/>},
            {path: '/product', element: <Product/>},
            {path: '/cart', element: <Cart/>},
        ]
    }
]);

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
