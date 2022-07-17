import { v2 } from 'cloudinary'

const cloudinary = v2

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

/**
 * @param {String} path
 */
const uploadImage = async path => {
  const result = await cloudinary.uploader.upload(path, {
    resource_type: 'image'
  })

  return result.secure_url
}

export { uploadImage }
