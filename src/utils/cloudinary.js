import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

const uploadOnCloudinary = async localfilepath => {
  try {
    if (!localfilepath) return null;
    // Upload File On Cloudinary
    const response = await cloudinary.uploader.upload(localfilepath, {
      resource_type: "auto",
    });
    // File has been uploaded Succesfully
    console.log("File has been uploaded succesfully ", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localfilepath);
     //Remove the locally saved Temporary file as upload operation got failed
    return null;
  }
};


export { uploadOnCloudinary };
