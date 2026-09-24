import mongoose from "mongoose"

/* =====================================
    GENERIC SECTION
===================================== */

const sectionSchema =
  mongoose.Schema({

    heading: {
      type: String,
      default: "",
    },

    content: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

  })

/* =====================================
    PROGRAMS
===================================== */

const programSchema =
  mongoose.Schema({

    title: {
      type: String,
      default: "",
    },

    points: {
      type: [String],
      default: [],
    },

    color: {
      type: String,
      default: "#E63946",
    },

    image1: {
      type: String,
      default: "",
    },

    image2: {
      type: String,
      default: "",
    },

    image3: {
      type: String,
      default: "",
    },

  })

/* =====================================
    IMPACT STORIES
===================================== */

const impactStorySchema =
  mongoose.Schema({

    title: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    desc: {
      type: String,
      default: "",
    },

    type: {
      type: String,
      default: "",
    },

  })

/* =====================================
    STATS
===================================== */

const statsSchema =
  mongoose.Schema({

    number: {
      type: String,
      default: "",
    },

    label: {
      type: String,
      default: "",
    },

    icon: {
      type: String,
      default: "smile",
    },

  })

/* =====================================
    VALUES
===================================== */

const valueSchema =
  mongoose.Schema({

    title: {
      type: String,
      default: "",
    },

    desc: {
      type: String,
      default: "",
    },

    icon: {
      type: String,
      default: "",
    },

    color: {
      type: String,
      default: "#E63946",
    },

  })

/* =====================================
    TEAM
===================================== */

const teamSchema =
  mongoose.Schema({

    name: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    color: {
      type: String,
      default: "#E63946",
    },

  })

/* =====================================
    MAIN PAGE SCHEMA
===================================== */

const pageSchema =
  mongoose.Schema(

    {
      page: {
        type: String,
        required: true,
        unique: true,
      },

      /* =====================================
          HERO
      ===================================== */

      hero: {

        title: {
          type: String,
          default: "",
        },

        subtitle: {
          type: String,
          default: "",
        },

        description: {
          type: String,
          default: "",
        },

        buttonText: {
          type: String,
          default: "",
        },

        image: {
          type: String,
          default: "",
        },

      },

      /* =====================================
          STORY SECTION
      ===================================== */

      story: {

        heading: {
          type: String,
          default: "",
        },

        title: {
          type: String,
          default: "",
        },

        description: {
          type: String,
          default: "",
        },

        image: {
          type: String,
          default: "",
        },

      },

      /* =====================================
          MISSION SECTION
      ===================================== */

      mission: {

        heading: {
          type: String,
          default: "",
        },

        content: {
          type: String,
          default: "",
        },

        image: {
          type: String,
          default: "",
        },

      },

      /* =====================================
          PHILOSOPHY
      ===================================== */

      philosophy: {

        title: {
          type: String,
          default: "",
        },

        description: {
          type: String,
          default: "",
        },

      },

      /* =====================================
          CHAIRPERSON
      ===================================== */

      chairperson: {

        name: {
          type: String,
          default: "",
        },

        role: {
          type: String,
          default: "",
        },

        quote: {
          type: String,
          default: "",
        },

        description: {
          type: String,
          default: "",
        },

        image: {
          type: String,
          default: "",
        },

      },

      /* =====================================
          CTA
      ===================================== */

      cta: {

        title: {
          type: String,
          default: "",
        },

        description: {
          type: String,
          default: "",
        },

        button1: {
          type: String,
          default: "",
        },

        button2: {
          type: String,
          default: "",
        },

      },

      /* =====================================
          PROGRAMS
      ===================================== */

      programs: {
        type: [programSchema],
        default: [],
      },

      /* =====================================
          PROGRAM GALLERY IMAGES
      ===================================== */

      programImage1: {
        type: String,
        default: "",
      },

      programImage2: {
        type: String,
        default: "",
      },

      programImage3: {
        type: String,
        default: "",
      },

      /* =====================================
          DONATE PAGE
      ===================================== */

      donate: {

        heroTitle: {
          type: String,
          default: "",
        },

        heroSubtitle: {
          type: String,
          default: "",
        },

        heroDescription: {
          type: String,
          default: "",
        },

        cards: {

          type: [
            {
              title: String,
              amount: String,
              desc: String,
              buttonText: String,
              icon: String,
            }
          ],

          default: [],
        },

      },

      /* =====================================
          IMPACT STORIES
      ===================================== */

      impactStories: {
        type: [impactStorySchema],
        default: [],
      },

      /* =====================================
          STATS
      ===================================== */

      stats: {
        type: [statsSchema],
        default: [],
      },

      /* =====================================
          VALUES
      ===================================== */

      values: {
        type: [valueSchema],
        default: [],
      },

      /* =====================================
          TEAM
      ===================================== */

      team: {
        type: [teamSchema],
        default: [],
      },

      /* =====================================
          FOOTER
      ===================================== */

      footer: {

        description: {
          type: String,
          default: "",
        },

        phone: {
          type: String,
          default: "",
        },

        email: {
          type: String,
          default: "",
        },

        address: {
          type: String,
          default: "",
        },

        logo: {
          type: String,
          default: "",
        },

        facebook: {
          type: String,
          default: "",
        },

        instagram: {
          type: String,
          default: "",
        },

        youtube: {
          type: String,
          default: "",
        },

      },

      /* =====================================
          GENERIC SECTIONS
      ===================================== */

      sections: {
        type: [sectionSchema],
        default: [],
      },

    },

    {
      timestamps: true,
    }
  )

const Page =
  mongoose.model(
    "Page",
    pageSchema
  )

export default Page