import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import { endpoints } from './constants/endpoints.ts'
import Errorpage from './pages/Errorpage.tsx'
import Homepage from './pages/Homepage.tsx'
import ProductListpage from './pages/ProductListpage.tsx'
import ProductDetailpage from './pages/ProductDetailpage.tsx'
import Profilepage from './pages/Profilepage.tsx'
import Favoritespage from './pages/Favoritespage.tsx'

const router = createBrowserRouter([
	{
		path: endpoints.HOME,
		element: <App />,
		errorElement: <Errorpage />,
		children: [
			{ path: endpoints.HOME, element: <Homepage /> },
			{ path: endpoints.COCKTAIL_LIST, element: <ProductListpage /> },
			{ path: endpoints.COCKTAIL, element: <ProductDetailpage /> },
			{ path: endpoints.PROFILE, element: <Profilepage /> },
			{ path: endpoints.FAVORITES, element: <Favoritespage /> },
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<GoogleOAuthProvider clientId='370152876277-6ert57it0lm7dt6bmphejdmqvsgcphk9.apps.googleusercontent.com'>
		<React.StrictMode>
			<RouterProvider router={router}></RouterProvider>
		</React.StrictMode>
	</GoogleOAuthProvider>
)
