import React, { Component } from 'react';

class Product extends Component {
  render() {
    var {match} = this.props;
    var slug = match.params.slug;
    console.log(slug);

    return (
      <div>
          <h1>This is the Product page: {slug}</h1>
      </div>
    );
  }
}

export default Product;
