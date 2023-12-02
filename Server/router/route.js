const Router = require("express");
const router = Router()
const ProductModel = require("../model/productModel")

// Product View Request - Get Method

router.get("/", async(req,res)=>{
    const ProductData = await ProductModel.find({})
    res.status(200).json({products: ProductData});

});


router.get('/products/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    // Example: Fetch product from the database
    const product = await ProductModel.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Respond with the product data
    res.json({ data: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Product ADD Request - Post Method

//http://localhost:8080/productApi/productadd

// {
//   "productName": "Redmi 9i",
//   "productType": "Mobile",
//   "productWeight": "250gm",
//   "productPrice": 10000,
//   "productDiscount": 10
// }

router.post("/productadd", async(req,res)=>{
    const {productName,productDiscount,productDiscPrice,productQty,productColor, productPrice,productImg,smallText,specificationsText,careMainText} = req.body;
    if(!productName || !productDiscPrice || !productDiscount || !productColor || !productQty || !productPrice || !smallText || !specificationsText || !careMainText || !productImg){
        return res.status(422).json({error : "Please Fill All Requied Filed"})

    };
    const product = new ProductModel({
        productName,
        productPrice,
        productDiscPrice,
        productDiscount,
        productImg,
        smallText,
        specificationsText,
        careMainText,
        productQty,
        productColor
    });
    await product.save();
    res.status(200).json({message: "Product Added Scussful!"})
});



router.delete("/:id", async (req,res)=>{
    let deleteData = await ProductModel.deleteOne({_id: req.params.id})
    res.status(200).send("Product Deleted");
})

//update Product

router.put("/updateproduct", async (req,res)=>{
    let {
        userId,
        productName,
        productPrice,
        productDiscount,
        productImg,
        smallText,
        specificationsText,
        careMainText,
        productDiscPrice,
        productQty,
        productColor

    } = req.body

    ProductModel.updateOne(
        {_id: userId},
        {
            productName,
            productPrice,
            productDiscount,
            productImg,
            smallText,
            specificationsText,
            careMainText,
            productDiscPrice,
            productQty,
            productColor
        }
    )
    .then(() =>{
        res.status(200).send({message: "Updated data"});
    })
    .catch((error) =>{
        res.status(500).send({error: "Error"})
    })
})


module.exports = router;