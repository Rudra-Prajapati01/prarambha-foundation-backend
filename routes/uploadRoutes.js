import express from "express"
import multer from "multer"

import { storage }
from "../config/cloudinary.js"

const router =
  express.Router()

const upload =
  multer({ storage })

/* =====================================
    CLOUDINARY IMAGE UPLOAD
===================================== */

router.post(
  "/",

  upload.single("image"),

  async (req, res) => {

    try {

      /* =====================================
          CHECK FILE
      ===================================== */

      if (!req.file) {

        return res.status(400).json({

          success: false,

          message:
            "No image uploaded",
        })
      }

      console.log(
        "UPLOADED FILE:",
        req.file
      )

      /* =====================================
          CLOUDINARY URL
      ===================================== */

      const imageUrl =
        req.file.path

      console.log(
        "CLOUDINARY URL:",
        imageUrl
      )

      /* =====================================
          RESPONSE
      ===================================== */

      res.status(200).json({

        success: true,

        message:
          "Image uploaded successfully",

        image:
          imageUrl,
      })

    } catch (error) {

      console.log(error)

      res.status(500).json({

        success: false,

        message:
          "Upload failed",

        error:
          error.message,
      })
    }
  }
)

export default router