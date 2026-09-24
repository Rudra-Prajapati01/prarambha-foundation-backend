import express from "express"
import multer from "multer"

import Page from "../models/Page.js"

import { storage } from "../config/cloudinary.js"

const router = express.Router()

const upload =
  multer({ storage })

/* =====================================
   UPLOAD FOOTER LOGO
===================================== */

router.post(
  "/footer-logo",

  upload.single("logo"),

  async (req, res) => {

    try {

      console.log("FILE:", req.file)

      if (!req.file) {

        return res.status(400).json({

          success: false,

          message: "No file uploaded",
        })
      }

      /* =====================================
          CLOUDINARY IMAGE URL
      ===================================== */

      const logoUrl =
        req.file.path

      console.log(
        "LOGO URL:",
        logoUrl
      )

      /* =====================================
          FIND PAGE
      ===================================== */

      let page =
        await Page.findOne()

      /* =====================================
          CREATE PAGE IF NOT EXISTS
      ===================================== */

      if (!page) {

        page = new Page({

          footer: {},
        })
      }

      /* =====================================
          SAVE LOGO
      ===================================== */

      page.footer.logo =
        logoUrl

      await page.save()

      console.log(
        "SAVED:",
        page.footer.logo
      )

      /* =====================================
          RESPONSE
      ===================================== */

      res.status(200).json({

        success: true,

        logo: logoUrl,

        footer: page.footer,
      })

    } catch (error) {

      console.log(error)

      res.status(500).json({

        success: false,

        message:
          "Logo upload failed",

        error: error.message,
      })
    }
  }
)

export default router