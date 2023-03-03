import '../styles/ProductDetails.scss';
import ProductInfo from '../components/ProductInfo';

const ProductDetails = () => {
    return(
        <aside className="product-detail">
            <div className="product-detail-close">
            <img src="iconos/icon_close.png" alt="close" />
            </div>
            < ProductInfo />
        </aside>
    );
}

export default ProductDetails;