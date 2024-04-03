const express= require('express');
const app = express()
const productData = [
	{
		"productName": "Laptop 14",
		"price": 9254,
		"rating": 4.68,
		"discount": 56,
		"availability": "out-of-stock"
	},
	{
		"productName": "Laptop 8",
		"price": 511,
		"rating": 4.65,
		"discount": 87,
		"availability": "out-of-stock"
	},
	{
		"productName": "Laptop 10",
		"price": 7145,
		"rating": 4.36,
		"discount": 15,
		"availability": "yes"
	},
	{
		"productName": "Laptop 10",
		"price": 4101,
		"rating": 4.2,
		"discount": 37,
		"availability": "yes"
	},
	{
		"productName": "Laptop 13",
		"price": 1244,
		"rating": 2.92,
		"discount": 45,
		"availability": "out-of-stock"
	},
	{
		"productName": "Laptop 11",
		"price": 5683,
		"rating": 2.84,
		"discount": 56,
		"availability": "yes"
	},
	{
		"productName": "Laptop 3",
		"price": 9102,
		"rating": 2.75,
		"discount": 98,
		"availability": "yes"
	},
	{
		"productName": "Laptop 11",
		"price": 2652,
		"rating": 2.43,
		"discount": 70,
		"availability": "yes"
	},
	{
		"productName": "Laptop 1",
		"price": 1059,
		"rating": 2.34,
		"discount": 21,
		"availability": "yes"
	},
	{
		"productName": "Laptop 1",
		"price": 2236,
		"rating": 1.99,
		"discount": 63,
		"availability": "yes"
	}
]
app.get('/test/companies/:categoryname/categories/:categoryname/products/top-ratingPrice-minPrice-:minPrice-maxPrice-:maxPrice-page-:page', (req, res) => {
    const {companyName,categoryName,minPrice,maxPrice,page} = req.params;
    const filteredProducts = productData.filter(product => 
        product.company===companyName &&
        product.productName.includes(categoryName)&&
        product.price>=parseInt(maxPrice) &&
        product.price<=parseInt(maxPrice));
    const sortedProduct = filteredProducts.sort((a,b)=> a.rating-b.rating);
    const pageSize = 10;
    const startIndex = (page-1)*pageSize;
    const endIndex= page*pageSize;
    const pagewiseProduct = sortedProduct.slice(startIndex,endIndex);
    res.json(pagewiseProduct);

})
app.get('/test/companies/:companyName/categories/:categoryName/products/:productId',(req,res)=>{
    const {companyName,categoryName,producId} = req.params;
    const product = productData.find(product=>
        product.company === companyName &&
        product.productName.includes(categoryName)&&
        product.producId === parseInt(producId));
    if(!product){
        return res.status(404).json({message:'No Product Found'});
    }
    res.json(product)
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})