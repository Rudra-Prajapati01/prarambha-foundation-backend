import express from "express"

import Story from "../models/storyModel.js"

const router = express.Router()

/* =========================================
   GET ALL STORIES
========================================= */
router.get("/", async (req, res) => {

  try {

    const stories =
      await Story.find().sort({
        createdAt: -1,
      })

    res.json(stories)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })
  }
})

/* =========================================
   GET SINGLE STORY
========================================= */
router.get("/:id", async (req, res) => {

  try {

    const story =
      await Story.findById(
        req.params.id
      )

    if (!story) {

      return res
        .status(404)
        .json({
          message:
            "Story not found",
        })
    }

    res.json(story)

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: error.message,
    })
  }
})

/* =========================================
   CREATE STORY
========================================= */
router.post("/", async (req, res) => {

  try {

    const {
      title,
      desc,
      category,
      image,
      type,
    } = req.body

    const story =
      await Story.create({

        title,

        desc,

        category,

        image,

        type,
      })

    res.status(201).json(story)

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: error.message,
    })
  }
})

/* =========================================
   UPDATE STORY
========================================= */
router.put("/:id", async (req, res) => {

  try {

    const updatedStory =
      await Story.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      )

    res.json(updatedStory)

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: error.message,
    })
  }
})

/* =========================================
   DELETE STORY
========================================= */
router.delete("/:id", async (req, res) => {

  try {

    await Story.findByIdAndDelete(
      req.params.id
    )

    res.json({
      message:
        "Story deleted",
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: error.message,
    })
  }
})

export default router