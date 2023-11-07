import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import { ENDPOINTS } from './constants/endpoints'
import Errorpage from './pages/Errorpage'
import Homepage from './pages/Homepage/Homepage'
import { ProductListpage } from './pages/ProductListpage/ProductListpage'
import { ProductDetailpage } from './pages/ProductDetailpage'
import Profilepage from './pages/Profilepage'
import Favoritespage from './pages/Favoritespage'
import ProductProvider from './contexts/ProductProvider'
import FiltersProvider from './contexts/FiltersProvider'
import { App } from './App'

const router = createBrowserRouter([
	{
		path: ENDPOINTS.HOME,
		element: <Homepage />,
		errorElement: <Errorpage />,
	},
	{
		path: ENDPOINTS.HOME,
		element: <App />,
		errorElement: <Errorpage />,
		children: [
			{ path: ENDPOINTS.COCKTAIL_LIST, element: <ProductListpage /> },
			{ path: ENDPOINTS.COCKTAIL, element: <ProductDetailpage /> },
			{ path: ENDPOINTS.PROFILE, element: <Profilepage /> },
			{ path: ENDPOINTS.FAVORITES, element: <Favoritespage /> },
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
