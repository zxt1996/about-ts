import React from 'react';

interface Props {
    products: string[]
}

interface State {
    quantities: {
        [key: string]: number
    }
}

class ShoppingBasket extends React.Component<Props, State> {
    // 默认属性允许您指定属性的默认值
    static defaultProps: Props = {
        products: []
    }

    state: Readonly<State> = {
        quantities: this.props.products.reduce((acc: any, product: string) => {
            acc[product] = 1;
            return acc;
        }, {})
    }

    render() {

        const { products } = this.props;
        const { quantities } = this.state;

        return (
            <div>
                <ul>
                    {products.map(product =>
                        <li>
                            <h2>{product}</h2>
                            <p>
                                Quantity: 
                                <input 
                                    type="number" 
                                    value={quantities[product]}
                                />
                            </p>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default ShoppingBasket;