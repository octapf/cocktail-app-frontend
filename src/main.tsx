import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import endpoints from './constants/endpoints.ts'
import ErrorPage from './components/Errorpage.tsx'
import CardDetail from './components/CardDetail.tsx'
// import Mainlist from './components/Mainlist.tsx'
import Cardlist from './components/Cardlist.tsx'
import Home from './components/Home.tsx'
import Profile from './components/Profile.tsx'

const router = createBrowserRouter(
	[
		{
			path: endpoints.HOME,
			element: <App />,
			errorElement: <ErrorPage />,
			children: [
				{ path: endpoints.HOME, element: <Home /> },
				{ path: endpoints.COCKTAIL_LIST, element: <Cardlist /> },
				{ path: endpoints.PROFILE, element: <Profile /> },
				{ path: endpoints.COCKTAIL, element: <CardDetail /> },
			],
		},
	],
	{ basename: import.meta.env.DEV ? '/' : '/itacademy-sprint9-2/' }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
)
