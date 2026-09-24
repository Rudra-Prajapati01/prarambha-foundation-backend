import dotenv from "dotenv"

import connectDB from "./config/db.js"

import Page from "./models/Page.js"

dotenv.config()

connectDB()

const seedPages = async () => {

  try {

    await Page.deleteMany()

    await Page.create([

      {
        page: "home",

        hero: {

          title:
            "Discovering Ability Before Disability",

          subtitle:
            "Prarambha Foundation",

          description:
            "Supporting children through inclusive education, therapy support, sensory learning, early intervention, and family-centered care programs that help every child grow with confidence, dignity, and opportunity.",

          buttonText:
            "Explore Programs",

          image: "",
        },

        sections: [

          {
            heading: "Who We Are",

            content:
              "At Prarambha Foundation, we believe that every child deserves understanding, support, and equal opportunities during their early developmental years.",
          },

          {
            heading: "Our Mission",

            content:
              "Our mission is to create a safe, inclusive, and empowering environment.",
          },

          {
            heading: "Our Vision",

            content:
              "To build a world where every child is understood before being judged.",
          },
        ],
      },

      /* =====================================
          DONATE PAGE
      ===================================== */

      {
        page: "donate",

        donate: {

          heroTitle: "Donate",

          heroSubtitle:
            "Support Inclusion & Early Intervention",

          heroDescription:
            "Your contribution helps children receive therapy, inclusive education, developmental support, awareness programs, and a brighter future.",

          cards: [

            {
              title:
                "Sponsor a Child",

              amount:
                "₹45,000",

              desc:
                "Support therapy, education, intervention, and development programs for one child.",

              buttonText:
                "Donate Now",

              icon:
                "❤️",
            },

            {
              title:
                "Therapy Support Kit",

              amount:
                "₹25,000",

              desc:
                "Help provide sensory tools, therapy materials, and learning resources.",

              buttonText:
                "Donate Now",

              icon:
                "🧠",
            },

            {
              title:
                "Inclusive Classroom",

              amount:
                "₹1,50,000",

              desc:
                "Support classroom setup, learning equipment, and inclusive education infrastructure.",

              buttonText:
                "Donate Now",

              icon:
                "🏫",
            },
          ],
        },
      },

    ])

    console.log(
      "Pages Seeded Successfully"
    )

    process.exit()

  } catch (error) {

    console.log(error)

    process.exit(1)
  }
}

seedPages()