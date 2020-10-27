import React from 'react';
import Product from './Reusable/Product';
import Axios from 'axios';
class Home extends React.Component
{
    constructor(){
        super();
        this.state ={
            products: []
        }
    }

    async readProducts(){
        try{
            let response =await Axios.get("http://localhost:5000/Products");
            this.state.products = response.data;
         
        }
        catch(e){
            this.state.products=[];
          
        }
        this.setState(this.state);
    }

    componentDidMount(){
        this.readProducts();
    }
    render(){
        return(
          <div id="product-catalog">
          {
              this.state.products.map(x=>
            <Product key={x.id} product={x}></Product>
              )
          }
          </div>
        )
    }
}

export default Home;