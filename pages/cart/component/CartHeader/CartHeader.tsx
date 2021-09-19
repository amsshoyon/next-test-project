import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { NextPage } from "next";

interface Props {
    className: string;
}

const CartHeader: NextPage<Props> = (props) => {
    return (
        <div className={`flex justify-between align-center ${props.className}`}>
            <div className="flex">
                <Link href="">
                    <a><i className="mdi mdi-undo-variant mr-2 text-primary icon"/></a>
                </Link>
                <div>
                    <p className="fs16 fw-700 mb-1">YOUR SHOPPING CART</p>
                    <p>2 item(s) &nbsp; <span className="text-primary">Add more</span></p>
                </div>
            </div>
            <div className="flex align-center">
                <Image src="/images/icons/shield-star.svg" width={25} height={25} alt="" />
                <span className="text-primary ml-1 fw-600">100% Secure</span>
            </div>
        </div>
    )
}

export default CartHeader
