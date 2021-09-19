import { toast } from 'react-toastify';
import CurrencyFormat from 'react-currency-format';

export const Trancate =  (str: string, limit: number) => {
    if(str.length <= limit) return str;
    return str.slice(0, limit) + "..."
}

export const Notify = (msg: String, type: string = 'info') => {
    toast( msg, {
        position: 'top-left',
        autoClose: 2500,
        type: type
    });
}

export const MoneyFormat = (amount: number, currency: string = "৳ ") => {
    return <>
        {amount && amount > 0 ?
            <CurrencyFormat value={amount.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={currency} />
            : <span>{currency} 0.00</span>
        } 
    </>
}

export const Percentage = (price: number, prevPrice: number) => {
    let percent = 0;

    if(price !== 0 && prevPrice !== 0) percent = Math.round(((price - prevPrice) / prevPrice) * 100);

    return <span>{percent.toFixed(2)}%</span>
}