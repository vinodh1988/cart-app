import React from 'react';
import '../styles/general.css';


//class Product extends React.Component{
    const Product =({product})=>{
        const imgurl="http://localhost:8999/beautyapp/"+product.image;
        return(
         <div className="product">
            <h5>{product.name}</h5>
            <div className="image-box">
                <img src={imgurl} />
            </div>
            <h6>Price: &#8377;{product.price}</h6>
        </div>
        )
    }


export default Product;