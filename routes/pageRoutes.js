import express from "express"

import {
  getPage,
  updatePage,
} from "../controllers/pageController.js"

const router = express.Router()

router.get("/:slug", getPage)

router.put("/:slug", updatePage)

export default router