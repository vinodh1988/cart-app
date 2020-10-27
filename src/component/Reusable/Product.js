import React from 'react';
import '../styles/general.css';


class Product extends React.Component{
    render(){
        const imgurl="http://localhost:8999/beautyapp/"+this.props.product.image;
        return(
         <div className="product">
            <h5>{this.props.product.name}</h5>
            <div className="image-box">
                <img src={imgurl} />
            </div>
            <h6>Price: &#8377;{this.props.product.price}</h6>
        </div>
        )
    }
}

export default Product;