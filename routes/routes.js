const render = require("ejs")
const express = require("express");
const router = express.Router();

const Product = require('../controllers/Products')

router.get('/', async (req, res) => {
    res.render('index');
});

router.get('/createProduct', async(req, res) => {
    res.render('newProduct');
});

router.get('/products', async(req, res) => {
    let products = await new Product().getProducts();
    res.render('products', {products});
});

router.get('/about', async(req, res) => {
    res.render('about');
});

router.get('/register', async(req, res) => {
    res.render('register');
});

router.get('/contact', async(req, res) => {
    res.render('contact');
});

router.get('/cart', async(req, res) => {
    res.render('cart');
});

router.get('/login', async(req, res) => {
    res.render('login');
});

router.get('/profile', async(req, res) => {
    res.render('profile');
});

router.get('/loginAuth', async(res, res) => {
    
})

router.get('/profile/:userid', async (req,res) => {
    let products = await new Product().getProductsOwned(req.params.userid);
    console.log(products)
    res.render('profile', {products})
});

// Inician las rutas de API
//Get all products.
router.get('/api/getProducts', async (req,res) => {
    let products = await new Product().getProducts();
    res.send(products)
});

//Get all products owned by user.
router.get('/api/getProductsByOwner/:userid', async (req,res) => {
    let products = await new Product().getProductsOwned(req.params.userid);
    res.send(products)
});

//post a product.
router.post('/api/newProduct', async (req,res) => {
    let {name, price, ownerID} = req.body;

    console.log(req.body);

    await new Product().newProduct({name, price, ownerID}, res);

    res.redirect('/');
});

//Update a product.
router.put('/api/updateProduct/:productId', async (req,res) => {
    let {name, price} = req.body;

    await new Product().updateProduct(req.params.productId, {name, price}, res);

    res.redirect('/');
});

//get product details.
router.get('/api/getProductById/:productId', async (req,res) => {
    let products = await new Product().getProductID(req.params.productId);
    res.send(products)
});

//Delete a product.
router.delete('/api/delete/:productId', async (req,res) => {
    await new Product().deleteProduct(req.params.productId);

    res.redirect('/');
});

module.exports = router;