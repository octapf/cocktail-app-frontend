import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import { endpoints } from './constants/endpoints.ts'
import Errorpage from './pages/Errorpage.tsx'
import Homepage from './pages/Homepage.tsx'
import { ProductListpage } from './pages/ProductListpage.tsx'
import { ProductDetailpage } from './pages/ProductDetailpage.tsx'
import Profilepage from './pages/Profilepage.tsx'
import Favoritespage from './pages/Favoritespage.tsx'
import ProductProvider from './contexts/ProductProvider.tsx'
import FiltersProvider from './contexts/FiltersProvider.tsx'
import { App } from './App.tsx'

const router = createBrowserRouter([
	{
		path: endpoints.HOME,
		element: <Homepage />,
		errorElement: <Errorpage />,
	},
	{
		path: endpoints.HOME,
		element: <App />,
		errorElement: <Errorpage />,
		children: [
			{ path: endpoints.COCKTAIL_LIST, element: <ProductListpage /> },
			{ path: endpoints.COCKTAIL, element: <ProductDetailpage /> },
			{ path: endpoints.PROFILE, element: <Profilepage /> },
			{ path: endpoints.FAVORITES, element: <Favoritespage /> },
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GoogleOAuthProvider clientId='370152876277-6ert57it0lm7dt6bmphejdmqvsgcphk9.apps.googleusercontent.com'>
			<ProductProvider>
				<FiltersProvider>
					<RouterProvider router={router} />
				</FiltersProvider>
			</ProductProvider>
		</GoogleOAuthProvider>
	</React.StrictMode>
)
