import { Product } from "../models/product.model.js";

export const addProduct = async (req, res) => {
  try {
    console.log("Hello from addProduct-top");
    const { productName, productQuantity, productType, productId, status } =
      req.body;
    if (
      !productName ||
      !productQuantity ||
      !productType ||
      !productId ||
      !status
    ) {
      return res.status(400).json({ message: "All Fields are necessary" });
    }
    // Create New Product
    const newProduct = await Product.create({
      productName,
      productQuantity,
      productType,
      productId,
      status,
    });
    // If product does not get created
    if (!newProduct) {
      return res.status(500).json({ message: "Unable to create a Product" });
    } else {
      console.log("Hello from addProduct-Bottom");
      return res.json({
        message: "Product Created Successfully",
        data: newProduct,
      });
    }
  } catch (error) {
    console.log("Create Product--->", error?.message);
  }
};

export const updateProduct = async (req, res) => {
  try {
    console.log("Hello from updateProduct-top");
    const updateProduct = await Product.findOne();
    console.log(req.body);
    if (!updateProduct) {
      return res.status(100).json({ message: "Product Not Found" });
    }
    const updatedProduct = await Product.updateOne({
      productName: req.body.productName,
      productQuantity: req.body.productQuantity,
      productType: req.body.productType,
      productId: req.body.productId,
      status: req.body.status,
    });
    console.log(updatedProduct);
    //   return the Updated Product
    console.log("Hello from updateProduct-bottom");
    return res.status(200).json({
      message: "Product is Updated",
      data: updatedProduct,
    });
  } catch (error) {
    console.log("Update Product--->", error?.message);
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    if (!allProducts) {
      return res.status(100).json({ message: "No Product is Available" });
    } else {
      return res
        .status(200)
        .json({ message: "List of Products Available are", data: allProducts });
    }
    // console.log(allProducts)
  } catch (error) {
    console.log("Error in reading all documents---> ", error?.message);
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(100).json({ message: "No Such Product Found" });
    } else {
      return res
        .status(200)
        .json({ message: "Product Found Succesfully", data: product });
    }
  } catch (error) {
    console.log("Some error ocurred--->", error?.message);
  }
};

export const deleteproduct = async (req,res) =>{
    try {
      const {id} = req.params;
      const product = await Product.findByIdAndDelete(id);
      if(!product){
        return res.status(100).json({message:'Product Not Found'})
      }else{
        return res.status(200).json({message:'Product Deleted Succesfully'});
      }
    } catch (error) {
      
    }
}