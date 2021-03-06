import React from 'react'
import Head from 'next/head';
import { Provider } from "react-redux"
import type { AppProps } from 'next/app'
import { createStore, applyMiddleware, Store } from "redux"
import { ToastContainer } from 'react-toastify';
import thunk from "redux-thunk"
import Header from '../components/Header/Header'
import reducer from "../store/cart/reducers"
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.scss' 

const store: Store<CartState, CartAction> & {
	dispatch: DispatchType
  } = createStore(reducer, applyMiddleware(thunk))

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ToastContainer />
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main>
				<Component {...pageProps} />
			</main>
		</Provider>
	)
}
export default MyApp
