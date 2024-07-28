import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productQuantity: {
    type: Number,
    default: 0,
    required:true
  },
  productType: {
    type: String,
    enum: ["Electrical", "Food", "Asscesorries","Fashion"],
  },
  productId: {
    type: String,
    required: true,
  },
  status: {
    enum: ["SOLD", "UNSOLD"],
  },
  productImage:{
    type:String,
  }
});

export const Product = mongoose.model("Product", productSchema);
