import OrdenItem from "components/OrdenItem";
import 'styles/MyOrder.scss';
import flechita from 'icons/flechita.svg';

const MyOrder = () => {
    return(
        <aside className="MyOrder">
            <div className="title-container">
                <img src={ flechita } alt="arrow" />
                <p className="title">My order</p>
            </div>
            <div className="my-order-content">
                <OrdenItem />
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>$560.00</p>
                </div>
                <button className="primary-button">
                    Checkout
                </button>
            </div>
        </aside>
    );
}

export default MyOrder;