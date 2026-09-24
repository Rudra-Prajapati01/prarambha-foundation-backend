import express from "express"

import {
  getGallery,
  createGallery,
  deleteGallery,
} from "../controllers/galleryController.js"

const router = express.Router()

router.route("/")
  .get(getGallery)
  .post(createGallery)

router.route("/:id")
  .delete(deleteGallery)

export default router