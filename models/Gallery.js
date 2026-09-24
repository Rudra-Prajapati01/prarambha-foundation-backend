import mongoose from "mongoose"

const gallerySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Gallery = mongoose.model(
  "Gallery",
  gallerySchema
)

export default Gallery