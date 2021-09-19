import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from './Header.module.scss'

const Header = () => {
    return (
        <header className={style.header}>
            <div className={`${style.header__top} py-2 border-bottom`}>
                <Link href="/">
                    <a><Image src="/logo.svg" alt="Site Logo" width={83} height={60} /></a>
                </Link>
            </div>
            <div className="header__main">
                <nav className={`${style.header__main__menus} uppercase`}>
                    <Link href="/cart">
                        <a>
                            <i className="mdi mdi-cart-outline text-primary" />
                            <span className="m-1">Checkout</span>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <Image src="/images/icons/map-pin.svg" alt="map" width={18} height={18}/>
                            <span className="m-1">Shipping Information</span>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <Image src="/images/icons/wallet.svg" alt="map" width={18} height={18}/>
                            <span className="m-1">Payment</span>
                        </a>
                    </Link>
                </nav>
            </div>
        </header>
    )  
}

export default Header;