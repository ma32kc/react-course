import {IProduct} from "../models";
import {useState} from "react";

interface ProductProps {
    product: IProduct
}

export function Product({product}: ProductProps) {
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'bg-blue-500': 'bg-red-500'

    const btnClasses = ["inline-flex py-2 px-4 border rounded", btnBgClassName]

    return (
        <div
            className='border py-2 px-4 rounded flex flex-col items-center mb-2'
        ><img src={product.image} alt={product.title} className="w-1/5"/>
            <p>{product.title}</p>
            <p className="font-bold text-xl">{product.price}</p>
            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >{details ? 'Hide details': 'Show details'}
            </button>
            {details && <div>
                <p>
                    {product.description}
                </p>
            </div>}
        </div>
    )
}