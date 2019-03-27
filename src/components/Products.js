import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom'
import Product from "./Product";

class Products extends Component {
  render() {
    var products = [{
      id: 1,
      slug: "iphone",
      name: "iPhone X",
      price: 35000000
    },{
      id: 2,
      slug: "samsung",
      name: "Samsung Galaxy 7",
      price: 7000000
    },{
      id: 3,
      slug: "oppo",
      name: "Oppo F1s",
      price: 5000000
    }];

    var {match} = this.props;
    var url = match.url;

    var result = products.map((product, index) => {
      return (
        <NavLink key={index} to={`${url}/${product.slug}`}>
          <li className="list-group-item">
            {product.id} - {product.name} - {product.price}
          </li>
        </NavLink>
      );
    });

    return (
      <div>
          <h1>Product List</h1>
         <div className="row">
           <ul className="list-group">
            {result}
           </ul>
         </div>
          <div className="row">
            <Route path="/products/:slug" component={Product}/>
          </div>
      </div>
    );
  }
}

export default Products;
