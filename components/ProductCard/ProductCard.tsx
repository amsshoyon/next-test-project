import React from 'react'
import Image from 'next/image'
import style from './ProductCard.module.scss'
import { MoneyFormat, Trancate } from '../../misc/common'
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { addToCart } from '../../store/cart/actions'

type Props = {
    data: CartData
	addToCart: (product: CartData | any) => void
}

const ProductCard: React.FC<Props> = ({data}) => {    
    const dispatch: Dispatch<any> = useDispatch()

	const addProduct = () => {
        let product = {
            id: data.id,
            title: data.title,
            price: data.price,
            quantity: 1,
            image: data.image,
            color: data.color ? data.color : "",
            size: data.size ? data.size : "",
            brand: data.brand ? data.brand : "others"
        }
        dispatch(addToCart(product))
    }

    return (
        <div className={style.productCard}>
            <div className="image-wrapper p-4" style={{height: "300px"}}>
                <Image src={data.image} width="100%" height="100%" alt={data.title} className="image" />
            </div>
            <p className="mb-2">{Trancate(data.title, 35)}</p>
            <div className="flex justify-between align-center"></div>
            <p className="fw-600 mb-3">Price: <MoneyFormat amount={data.price} /></p>
            <div className="h-line mb-3"></div>
            <button className="btn btn-primary radius-4 mx-auto" onClick={addProduct}>Add to Cart</button>
        </div>
    )
}

export default ProductCard
