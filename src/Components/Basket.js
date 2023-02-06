import BasketItem from "./BasketItem";


function Basket({ basket,products,total,resetBasket }) {

    return (
        <>
          <div className="basket-container container ">
            <h3>Alışveriş Detayları</h3>
          {basket.map(item => (
                <BasketItem  key={item.id} item={item} product={products.find(p => p.id === item.id)} />
            ))}
            
            <div className="total" >
                Toplam: ${total}
            </div>
            <button className="rst-basket" onClick={resetBasket}>Sepeti Sıfırla</button>
          </div>

          <style jsx> {`
          .basket-container{
            padding:20px;
            background:#fff;
            border:1px solid #ddd;
          }

          .basket-container h3{
            font-size:20px;
            margin-bottom:15px;
          }

          .basket-container .total{
            border-top:1px solid #ddd;
            padding-top:10px;
            margin-top:10px;
            font-size:25px;
            font-weight:bold;
            text-align:right;
            color:green; 
          }

          .rst-basket{
            background:#61dafb;
            height:40px;
            padding:0 20px;
            font-size:25px;
            font-weight:bold;
          }
          
          `}</style>
        </>
    )
}

export default Basket;