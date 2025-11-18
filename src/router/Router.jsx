import { createBrowserRouter } from "react-router";
import MainLayout from "../pages/MainLayout";
import Errors from "../pages/Errors";
import React, { Suspense } from "react";
import App from "../pages/App";
import Loading from "../componetns/Loading";


const Home = React.lazy(() => import("../pages/Home"));
const Apps = React.lazy(() => import("../pages/Apps"));
const Installation = React.lazy(() => import("../pages/Installation"));


export const Router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Errors/>,
        children: [
        {
            index: true,
            Component: Home
        },
        {
            path: '/apps',
            element: <Suspense fallback={<Loading />}>
                <Apps></Apps>
            </Suspense>,
            loader: () => fetch('allApp.json'),
        },
        {
            path: '/installation',
            Component: Installation
        },
        {
            path: '/apps-ditailes/:id',
            Component: App
        }
        ],
        element: <Suspense fallback={<Loading />}>
            <MainLayout />
        </Suspense>
    }
])