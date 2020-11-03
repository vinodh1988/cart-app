import React ,{useState,useEffect} from 'react'
import Axios from 'axios'
import '../styles/details.css'


const ProductDetails = ({match}) => {
    const [product,setProduct] = useState({})
    async function readProducts(){
        try{
            let response =await Axios.get("http://localhost:5000/Products/"+match.params.productid);
            setProduct(response.data);
         
        }
        catch(e){
          setProduct({})
          
        }
        
    }

    useEffect(()=>{
        readProducts()
    },[])

    


    let id = match.params.productid;
   
    console.log(product,id)

    return(
     <div id="Productdetails-container">
        <div id="image-block">
            <img src={"http://localhost:8999/beautyapp/"+product.image}/>
        </div>
        <div id="description-block">
           <h3>{product.name}</h3>
           <h6>({product.qty})</h6>
           <p>
               {product.description}
           </p>
           <h2>
                Price: &#8377;{product.price}
           </h2>
             Quantity <input type="number" defaultValue="1" min="1" max="5"/><br/>
            <button 
            type="button"
            class="btn" 
            >
                Add to cart
                </button>
        </div>
    </div>
        );
}

export default ProductDetails;