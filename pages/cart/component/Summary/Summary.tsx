import React from 'react'
import { MoneyFormat } from '../../../../misc/common'
import Voucher from './Voucher'

type Props = {
    data: any
}

const Summary: React.FC<Props>  = ({data}) => {
console.log('data:', data)

    return (
        <div className="card">
            <div className="card__header text-center">
                <p className="uppercase text-dark fw-600">ORDER SUMMARY</p>
            </div>
            <div className="card__body">
                <p className="w-100 flex justify-between mb-3">
                    <span>Subtotal ({data.products.length} Items)</span>
                    <span className="text-right"><MoneyFormat amount={data.subTotal} /></span>
                </p>
                <p className="w-100 flex justify-between mb-3">
                    <span>Discount</span>
                    <span className="text-right"><MoneyFormat amount={data.discount} /></span>
                </p>
                <p className="w-100 flex justify-between mb-4">
                    <span>Shipping Charge</span>
                    <span className="text-right"><MoneyFormat amount={data.shippingCharge} /></span>
                </p>
                <div className="h-line mb-3"></div>
                <Voucher />
                <div className="h-line mb-4 mt-4"></div>
                <p className="w-100 flex justify-between fw-600">
                    <span>Total Payable</span>
                    <span className="text-right"><MoneyFormat amount={data.totalPayable} /></span>
                </p>
            </div>
        </div>
    )
}

export default Summary
