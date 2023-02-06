import { moneyFormat } from '../helpers'

function Header({ total, money }) {
    return (
        <>

            {total > 0 && money - total !== 0 && (
                <div className='header' >
                    Harcayacak $  {moneyFormat(money - total)} paranız kaldı!!
                </div>
            )}

            {total === 0 && (
                <div className='header' >
                    Harcamak için $  {moneyFormat(money)}paranız var !!
                </div>
            )}

            {money - total === 0 && (
                <div className='header' >
                    Paran bitti
                </div>
            )}
            
            <style jsx>{`
            .header{
                position:sticky;
                top:0;
                background:linear-gradient(to bottom,green,greenyellow);
                height:60px;
                display:flex;
                align-items:center;
                justify-content:center;
                color:#fff;
                font-size:25px
            }
            
            
            `}

            </style>

        </>
    )
}

export default Header;