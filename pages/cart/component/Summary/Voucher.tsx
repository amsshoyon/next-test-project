import React from 'react'
import { MoneyFormat } from '../../../../misc/common';
import style from './Voucher.module.scss'
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { addCoupon } from '../../../../store/cart/actions';

const Voucher = () => {
    const [showCoupon, setShowCoupon] = React.useState(false);
    const ref = React.useRef(null);
    const dispatch: Dispatch<any> = useDispatch()

    const applyVoucher = (code: string) => {
        dispatch(addCoupon(code))
    }
    
    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShowCoupon(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }); 

    const [coupons, setCoupons] = React.useState(null);
	
	React.useEffect(() => {
		fetch('/coupon.json')
		.then(res => res.json())
		.then(res => ({ res }))
		.then(res => setCoupons(res.res))
		.catch(err=>console.log(err))
	}, [])

    return (
        <React.Fragment>
            <div className={`${style.accordicon} mb-3`}>
                <div className={`${style.accordicon__nav} flex justify-between align-center fw-600 cursor-pointer`}
                    onClick={()=>setShowCoupon(true)}>
                    <span className="pr-4">Gift Cards, Coupons & Promotional Codes</span>
                    <i className="mdi mdi-chevron-down icon"></i>
                </div>
                <div className={`${style.accordicon__content} ${showCoupon && style.accordicon__content__show}`}
                    ref={ref}>
                    <p className="mb-3">Apply any of the following vouchers to avail more discount on your purchase.</p>
                    <div className={style.code}>
                        {coupons && coupons.map((coupon: any, i: number)=>
                        <div className={style.code__single} key={i}>
                            <div className="flex justify-between">
                                <p className="fs20 fw-600">
                                    {coupon.type === "percentage" ?
                                     coupon.discount+'%' 
                                     : 
                                     <MoneyFormat amount={coupon.discount} />
                                     } Off
                                </p>
                                <i className="mdi mdi-check-circle text-primary fs20 ml-1" />
                            </div>
                            <p className="text-primary mb-1">Order Over BDT. 500</p>
                            <p className="fw-600 mb-1">For Partial Categories</p>
                            <button className="btn btn-primary mb-2" onClick={()=> applyVoucher(coupon.code)}>Apply</button>
                            <p className="fs11 text-dark">Valid until December 25, 2020, 5.30pm</p>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={style.voucher}>
                <form className={style.inputGroup}>
                    <input type="text" placeholder="Voucher Code" />
                    <button type="submit">Apply</button>
                </form>
                <div className="flex justify-between mt-3">
                    <p className="pr-2">Coupon applied,<br /> You saved BDT. 50</p>
                    <button className="btn btn__trans text-danger">Remove</button>
                </div>
                <div className="text-lighten mt-3">
                    <p>Sorry, you must purchase a minimum amount of BTD. 40,000 to apply this voucher.</p>
                    <p>Also, some items in your order may not be considered in the total amount.</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Voucher
