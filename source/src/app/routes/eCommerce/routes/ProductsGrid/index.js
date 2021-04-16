import React from 'react';
import ProductGridItem from 'components/eCommerce/ProductGridItem'
import productData from "app/routes/eCommerce/routes/productData";

function ProductsGrid() {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <div className="row products-grid-row">
                {productData.map((product, index) => (
                    <ProductGridItem key={index} product={product}/>
                ))}
            </div>
        </div>
    );
}

export default ProductsGrid;