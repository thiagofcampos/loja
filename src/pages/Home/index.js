import React, {Component} from 'react';
import {MdAddShoppingCart} from 'react-icons/md'
import {connect} from 'react-redux';
import { ProductList } from './styles';
import api from '../../services/api'
import {formatCurrency} from '../../utils/format'

class Home extends Component {
    state = {
        products: []
    }

    async componentDidMount() {
        const response = await api.get('products');

        const data = response.data.map((product) => ({
            ...product,
            priceFormatted: formatCurrency(product.price)
        }))

        this.setState({
            products: data
        })
    }

    handleAddToCart = (product) => {
        const {dispatch} = this.props;

        dispatch({
            type: "ADD_TO_CART",
            product
        });
    };

    render(){

        const {products} = this.state
        return (
            <ProductList>
                {
                    products.map((product) => (
                        <li key={product.id}>
                            <img src={product.image} alt={product.title} />
                            <strong>{product.title}</strong>
                            <span>{product.priceFormatted}</span>

                            <button type='button' onClick={() => this.handleAddToCart(product,)}>
                                <div>
                                    <MdAddShoppingCart siz={16} color='#fff'/>
                                </div>
                                <span>adicionar ao carrinho</span>
                            </button>
                        </li>
                    ))
                }
            </ProductList>
        )
    }
}

export default connect()(Home);
