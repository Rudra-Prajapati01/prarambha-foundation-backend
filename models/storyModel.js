import mongoose from "mongoose"

const storySchema =
  new mongoose.Schema(
    {

      title: {
        type: String,
        required: true
      },

      desc: {
        type: String,
        required: true
      },

      category: {
        type: String,
        required: true
      },

      image: {
        type: String,
        required: true
      },

      type: {
        type: String,
        default: "small"
      }

    },
    {
      timestamps: true
    }
  )

const Story =
  mongoose.model(
    "Story",
    storySchema
  )

export default Story