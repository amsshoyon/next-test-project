import React from 'react'
import { useSelector} from 'react-redux';
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import CartHeader from './component/CartHeader/CartHeader'
import style from './cart.module.scss'
import CartCard from './component/CartCard/CartCard'
import Summary from './component/Summary/Summary'
import { getCart } from './../../store/cart/actions';

const Cart = () => {
	const dispatch: Dispatch<any> = useDispatch();
	const cartData: any = useSelector((prop) => prop)
	let products: Object = [];
	
	React.useEffect(() => {
		dispatch(getCart())
	}, [dispatch])

	if (cartData){
		console.log('cartData:', cartData)
		products = cartData.products.reduce((acc: any, curr: CartData)=> {
			if(!acc[curr.brand]) {
				acc[curr.brand] = [...[], curr]
			}else {
				acc[curr.brand].push(curr) 
			}
			return acc;
		}, {})
	}

	return (
		<div className="container pt-4">
			<CartHeader className="mb-4"/>
			<div className="row">
				<div className="col-8">
					{products && Object.keys(products).map((key: string, i)=> 
						<div className={style.marcentModule} key={i}>
							<CartCard brand={key} data={products[key]} />
						</div>
					)}
				</div>
				<div className="col-4">
					{cartData && <Summary data={cartData}/>}
				</div>
			</div>
		</div>
	)
}

export default Cart
