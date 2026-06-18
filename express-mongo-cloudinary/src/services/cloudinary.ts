import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryConfig } from '../config';

cloudinary.config({
  cloud_name: CloudinaryConfig.CLOUD_NAME,
  api_key: CloudinaryConfig.API_KEY,
  api_secret: CloudinaryConfig.API_SECRET,
});

export const uploadImage = async (filePath: string) => {
  try {
    const result = await cloudinary.uploader.upload(filePath);
    return result;
  } catch (error) {
    throw new Error(`Cloudinary upload error: ${error.message}`);
  }
};

export const deleteImage = async (publicId: string) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    throw new Error(`Cloudinary delete error: ${error.message}`);
  }
};