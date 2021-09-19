import { Notify } from "../../misc/common";
import * as actionTypes from "./actionTypes"

const initialState: CartState = {
	products: [],
	subTotal: 0,
    discount: 0,
    shippingCharge: 0,
    voucherCode: '',
    totalPayable: 0
}

const reducer = (state: CartState = initialState, action: CartAction): CartState => {
	switch (action.type) {
		// Get Cart Data ========================================
		// ------------------------------------------------------
		case actionTypes.GET_CART:
			if(localStorage.getItem('cart')){
				let cart = JSON.parse(localStorage.getItem('cart') || '{}'); 
				state = cart;
			}
			return state;
		
		// Add To Cart ========================================
		// ----------------------------------------------------	
		case actionTypes.ADD_TO_CART:
			const newCart: CartData = action.product;
			if(localStorage.getItem('cart')){
				state = JSON.parse(localStorage.getItem('cart') || '{}');
		
				let check = state.products.some((item: CartData, i: number)=> { return item.id === newCart.id});
		
				if(state && check){
					state.products.forEach((item: CartData, i: number)=> {
						if(item.id === newCart.id){
							state.products[i].quantity = state.products[i].quantity + newCart.quantity;
						}
					})
				}else {
					state.products.push(newCart);
				}
			}else {
				state.products.push(newCart);
			}
			state.subTotal = state.products.reduce((sum: number, curr: CartData)=> sum = sum + (curr.price * curr.quantity), 0);
			state.totalPayable = state.subTotal - state.discount;
			localStorage.setItem('cart', JSON.stringify(state));
			Notify('Added to cart', 'success')
			return state;
		
		// Remove Cart Data ========================================
		// ---------------------------------------------------------
		case actionTypes.REMOVE_FROM_CART:
			state.products = state.products.filter( product => product.id !== action.product.id )
			state.subTotal = state.products.reduce((sum: number, curr: CartData)=> sum = sum + (curr.price * curr.quantity), 0);
			state.totalPayable = state.subTotal - state.discount;
			localStorage.setItem('cart', JSON.stringify(state));
			Notify('Item Removed', 'info')
			return {...state};

		// Add Coupon Discount ========================================
		// ---------------------------------------------------------
		case actionTypes.ADD_COUPON:
			console.log(action);
			// state.totalPayable = state.subTotal - state.discount;
			// localStorage.setItem('cart', JSON.stringify(state));
			// Notify('Item Removed', 'info')
			return {...state};
	}
	return state
}

export default reducer