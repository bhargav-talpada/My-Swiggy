import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import About from "./components/About";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import ResturentMenu from "./components/ResturentMenu";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Cart from "./components/Cart";
import OnYourMindMenuInfo from "./components/OnYourMindMenuInfo";


const App = () => {

    return(
        <Provider store={appStore}>
                <div>
                    <Header />
                    <Outlet />
                </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/restaurents/:resId',
                element: <ResturentMenu />
            },
            {
                path: "/collections/:mindId",
                element: <OnYourMindMenuInfo />
            },
            {
                path: '/cart',
                element: <Cart />
            },
        ],
        errorElement: <PageNotFound />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)