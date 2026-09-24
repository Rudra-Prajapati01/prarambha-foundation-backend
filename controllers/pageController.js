import Page from "../models/Page.js"

/* =====================================
    GET PAGE
===================================== */
const getPage = async (req, res) => {

  try {

    const page = await Page.findOne({
      page: req.params.slug,
    })

    if (!page) {

      return res.status(404).json({
        message: "Page not found",
      })
    }

    res.json(page)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }
}

/* =====================================
    UPDATE PAGE
===================================== */
const updatePage = async (req, res) => {

  try {

    // Construct the update object from req.body
    const updateData = {};
    const fields = [
      "hero", "story", "mission", "philosophy", "cta", "programs",
      "programImage1", "programImage2", "programImage3", "donate",
      "impactStories", "stats", "values", "chairperson", "team",
      "footer", "sections"
    ];

    fields.forEach((field) => {
      if (req.body[field] !== undefined) {
        updateData[field] = req.body[field];
      }
    });

    const updatedPage = await Page.findOneAndUpdate(
      { page: req.params.slug },
      { $set: updateData },
      { new: true, upsert: true }
    );

    res.json(updatedPage);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
}

export {
  getPage,
  updatePage,
}