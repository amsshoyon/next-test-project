import * as actionTypes from "./actionTypes"

export function getCart() {
  const action: any = {
    type: actionTypes.GET_CART
  }
  return simulateHttpRequest(action)
}

export function addToCart(product: CartData) {
  const action: CartAction = {
    type: actionTypes.ADD_TO_CART,
    product,
  }
  return simulateHttpRequest(action)
}

export function removeFromCart(product: CartData) {
  const action: CartAction = {
    type: actionTypes.REMOVE_FROM_CART,
    product,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: CartAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}
