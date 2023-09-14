import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import endpoints from './constants/endpoints.ts'
import ErrorPage from './components/Errorpage.tsx'
import Maindetail from './components/Maindetail.tsx'
// import Mainlist from './components/Mainlist.tsx'
import Cardlist from './components/Cardlist.tsx'

const router = createBrowserRouter(
	[
		{
			path: endpoints.HOME,
			element: <App />,
			errorElement: <ErrorPage />,
			children: [
				{ path: endpoints.HOME, element: <Cardlist /> },
				{ path: endpoints.COCKTAILS, element: <Maindetail /> },
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
