import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/general.css';


//class Product extends React.Component{
    const Product =({product})=>{
        const imgurl="http://localhost:8999/beautyapp/"+product.image;
        let link="/details/"+product.id;
        return(
        <Link to={link}>
         <div className="product">
            <h5>{product.name}</h5>
            <div className="image-box">
                <img src={imgurl} />
            </div>
            <h6>Price: &#8377;{product.price}</h6>
        </div>
        </Link>
        )
    }


export default Product;