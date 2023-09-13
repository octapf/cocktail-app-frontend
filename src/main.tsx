import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import endpoints from './constants/endpoints.ts'
import ErrorPage from './components/Errorpage.tsx'

const router = createBrowserRouter(
	[
		{
			path: endpoints.HOME,
			element: <App />,
			errorElement: <ErrorPage />,
		},
	],
	{ basename: import.meta.env.DEV ? '/' : '/itacademy-sprint9-2/' }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
)
