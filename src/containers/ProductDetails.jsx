import ProductInfo from 'components/ProductInfo';
import 'styles/ProductDetails.scss';
import close from 'icons/icon_close.png';


const ProductDetails = () => {
    return(
        <aside className="product-detail">
            <div className="product-detail-close">
            <img src={ close } alt="close" />
            </div>
            < ProductInfo />
        </aside>
    );
}

export default ProductDetails;