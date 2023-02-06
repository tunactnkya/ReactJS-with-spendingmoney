import {moneyFormat} from '../helpers'

function Product({ total, money, product, basket, setBasket }) {

    const basketItem = basket.find(item => item.id === product.id)


    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        if (checkBasket) {

            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])

        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1
        if (currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent])
        } else {
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }


    return (
        <>
            <div className="product" >
                <img src={product.image} />
                <h5>{product.title}</h5>
                <div className="price"> $ {moneyFormat(product.price)} </div>
                <div className="actions">
                    <button className='sell-button' disabled={!basketItem} onClick={removeBasket} >SAT</button>
                    <span className="amount">{basketItem && basketItem.amount || 0} </span>
                    <button className='buy-button'  disabled={total + product.price > money} onClick={addBasket} >SATIN AL</button>
                </div>
                <style jsx>{`
        .product {
            padding:15px;
            background:#fff;
            border:1px  solid #ddd;
            margin-bottom:20px;
           width:%100;
            flex:1;
          
        } 
        
        .product img{
            width:100%
        }

        .product h5{
            font-size:20px;
            margin-bottom:10px;
        }

        .product .actions{
            display:flex;
            align-items:center;
            margin-top:15px;
        }

        .product .price{
            font-size:20px;
            color:blue;
        }

        .actions button{
            height:40px;
            padding:0 15px;
            flex:1;
            cursor:pointer;
        }

        .actions .amount{
            width:50px;
            text-align:center;
            border:1px solid #ddd;
            height:25px;
            display:flex;
            align-item:center;
            justify-content:center;
            font-size:16px;
            font-weight:bold;
        }

        .actions .buy-button{
            background-color:aqua;
            font-size:13px;
            font-weight:bold;
            border-radius:0 4px 4px 0;
        }
        .actions .sell-button{
            background-color:#ccc;
            font-size:13px;
            font-weight:bold;
            border-radius:4px 0 0 4px;
        }




           `} </style>
            </div>
        </>
    )
}

export default Product;