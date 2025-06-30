import React, {useState, useEffect} from 'react';
import '../assets/products.css';
import {useDispatch, useSelector} from "react-redux";
import {addProduct, getAllProducts} from "../app/product/productThunk";
import {addToCart, getAllCart} from '../app/cart/cartThunk'
import {toast} from "react-toastify";

function Products() {
    const [selectedId, setSelectedId] = useState(null);

    const dispatch = useDispatch();
    const {allProducts, message} = useSelector((state) => state.product);

    const [products, setProducts] = useState({
        product: '',
        avatar: '',
        price: ''
    });

    const {product, avatar, price} = products;

    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getAllCart());
    }, [dispatch])

    const handleChange = (e) => {
        setProducts({
            ...products,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(addProduct(products)).then(() => {
            dispatch(getAllProducts());
            toast.success(message);
            setProducts({
                product: '',
                avatar: '',
                price: ''
            })
        })
    }

    const handleAdd = (id, prod) => {
        setSelectedId(id);
        dispatch(addToCart({id, prod})).then(() => {
            dispatch(getAllCart());
            toast.success(message);
        })
    }

    return (
        <div className="products-section-container">
            <h2 className="section-title" style={{textAlign: 'center', marginTop: '50px'}}>Featured Products</h2>

            <form className="product-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="product"
                        value={product}
                        placeholder="product name.."
                        className="form-input"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="avatar"
                        value={avatar}
                        placeholder="product image..."
                        className="form-input"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="price"
                        value={price}
                        placeholder="product price..."
                        className="form-input"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="submit-button">Add Product</button>
            </form>

            <div className="products-grid">
                {allProducts && allProducts.length > 0 ? (
                    allProducts.map((prod) => (
                        <div className="product-card" key={prod._id}>
                            <img
                                src={prod.avatar}
                                alt={prod.product}
                                className="product-image"
                            />
                            <div className="product-details">
                                <h3 className="product-name">{prod.product}</h3>
                                <div className="product-price">${prod.price}</div>
                                <button className="add-to-cart-button" onClick={() => handleAdd(prod._id, prod)}>Add to
                                    cart
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p style={{textAlign: "center", marginTop: "30px"}}>No products found</p>
                )}
            </div>
        </div>
    );
}

export default Products;