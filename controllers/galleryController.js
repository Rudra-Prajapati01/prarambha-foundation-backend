import Gallery from "../models/Gallery.js"

/* =====================================
    GET GALLERY
===================================== */

const getGallery = async (req, res) => {

  try {

    const gallery =
      await Gallery.find().sort({
        createdAt: -1,
      })

    res.json(gallery)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }
}

/* =====================================
    CREATE GALLERY ITEM
===================================== */

const createGallery = async (
  req,
  res
) => {

  try {

    const {
      title,
      caption,
      category,
      image,
    } = req.body

    const gallery =
      new Gallery({
        title,
        caption,
        category,
        image,
      })

    const createdGallery =
      await gallery.save()

    res.status(201).json(
      createdGallery
    )

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }
}

/* =====================================
    DELETE GALLERY ITEM
===================================== */

const deleteGallery = async (
  req,
  res
) => {

  try {

    const gallery =
      await Gallery.findById(
        req.params.id
      )

    if (!gallery) {

      return res.status(404).json({
        message:
          "Gallery item not found",
      })
    }

    await gallery.deleteOne()

    res.json({
      message:
        "Gallery item deleted",
    })

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }
}

export {
  getGallery,
  createGallery,
  deleteGallery,
}