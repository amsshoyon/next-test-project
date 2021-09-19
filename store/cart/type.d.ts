interface CartData {
    id: number
    title: string
    price: number
    quantity: number
    image: string
    color: string
    size:string
    brand: string
}

type CartState = {
    products: CartData[],
    subTotal: number
    discount: number
    shippingCharge: number
    voucherCode: string
    totalPayable: number
}

type CartAction = {
    type: string
    product: CartData
}

type DispatchType = (args: CartAction) => CartAction