/* eslint-disable react/prop-types */


function ProductCard({product}) {
  return (
    <div className="product-card">
        <img src={product.image} alt={product.productName} />
        <div>
            <h2>{product.productName}</h2>
            <p>comapny : {product.comapany}</p>
            <p>price : ${product.price}</p>
            <p>rating:{product.rating}</p>
        </div>
    </div>
  )
}

export default ProductCard