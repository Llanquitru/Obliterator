import multer from 'multer'
import { extname } from 'path'

import { allowedExtensions } from './constants.js'

// Multer config
const multerInstance = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    const ext = extname(file.originalname)

    if (!allowedExtensions.includes(ext)) {
      cb(new Error('No soporta ese formato'), false)

      return
    }

    cb(null, true)
  }
})

export { multerInstance }
