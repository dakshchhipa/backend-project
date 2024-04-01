import { v2 as cloudinary } from "cloudinary";
import { fs } from "fs";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "process.env.Cloudinary_Cloud_Name",
  api_key: "process.env.Cloudinary_API_Key",
  api_secret: "process.env.Cloudinary_API_Secret",
});

const uploadCloudinary = async (localfilepath) => {
  try {
    if (!localfilepath) return null;
    cloudinary.uploader.upload(localfilepath, {
      resourse_type: "auto",
    });
    console.log("file is uploaded on cloudinary", response.url);
    return response;
  } catch (error) {
    fs.unlink(localfilepath);
    return null;
  }
};
export { uploadCloudinary };
