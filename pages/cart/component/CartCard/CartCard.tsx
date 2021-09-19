import React from 'react'
import Image from 'next/image'
import CartItem from './CartItem'

type Props = {
	brand: String
    data: any
}

const CartCard: React.FC<Props> = ({brand, data}) => {

    return (
        <div className="card">
            <div className="card__header">
                <div className="flex justify-between align-center">
                    <div className="flex">
                        <Image src="/images/nike.png" alt="Nike" width={58} height={58} />
                        <div className="ml-3">
                            <p className="text-dark">{brand} <i className="mdi mdi-check-circle text-blue fs16 ml-1" /></p>
                            <p className="text-lighten">Fulfilled by Nike</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="mb-1">Delivery Fee: BDT. 40</p>
                        <p className="text-light">Estimate Delivery on 27 January</p> 
                    </div>
                </div>
            </div>
            <div className="card__body p-0">
                {data.map((item: CartData, i: number)=> 
                    <CartItem data={item} key={i} />
                )}
            </div>
            <div className="card__footer">
                <p>Buy 3 item(s) more enjoy free shipping for Standard delivery option</p>
            </div>
        </div>
    )
}

export default CartCard
