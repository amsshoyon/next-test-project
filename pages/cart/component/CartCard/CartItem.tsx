import React from 'react'
import style from './CartItem.module.scss'
import Image from 'next/image';
import { MoneyFormat } from '../../../../misc/common';
import { removeFromCart } from './../../../../store/cart/actions';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

type Props = {
	data: CartData
    key:number
}

const CartItem: React.FC<Props> = ({data}) => {
    const dispatch: Dispatch<any> = useDispatch()

    const removeProduct = () => {
        if(confirm("Remove this product?")){
            dispatch(removeFromCart(data))
        }
    }

    return (
        <div className={`${style.cartItem} border-bottom`}>
            <div className={style.cartItem__info}>
                <div className={style.cartItem__info__image}>
                    <Image src={data.image} alt={data.title} width={120} height={140} objectFit="contain"/>
                </div>
                <div className="flex flex-column justify-between">
                    <p className="mb-3">{data.title}</p>
                    <p className="text-lighten mb-1">
                        <span className="mr-5">Color: {data.color}</span>
                        <span>Size: {data.size}</span>
                    </p>
                    <p className="mb-1">Quantity: {data.quantity}</p>
                    <p>
                        Price : <MoneyFormat amount={data.price} /> &nbsp; 
                        <span className="line-through text-lighten"><MoneyFormat amount={data.price} /></span> &nbsp; 
                        <span className="badge">0% Off</span>
                    </p>
                </div>
            </div>
            <div className={style.cartItem__action}>
                <div className="mr-4">
                    <Image src="/images/icons/heart.svg" width={23} height={23} alt=""/>
                </div>
                <div className="mr-0">
                    <Image src="/images/icons/delete.svg" width={23} height={23} alt="" onClick={removeProduct} className="cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}

export default CartItem
