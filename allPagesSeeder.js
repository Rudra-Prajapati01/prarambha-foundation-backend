import dotenv from "dotenv"

import connectDB from "./config/db.js"

import Page from "./models/Page.js"

dotenv.config()

connectDB()

const seedPages = async () => {

  try {

    await Page.deleteMany()

    /* =========================
        HOME PAGE
    ========================= */
    await Page.create({

      page: "home",

      /* HERO */
      hero: {

        title:
          "Discovering Ability Before Disability",

        subtitle:
          "Prarambha Foundation",

        description:
          "Supporting children through inclusive education, therapy support, sensory learning, early intervention, and family-centered care programs.",

        buttonText:
          "Explore Programs",

        image: "",
      },

      /* IMPACT STORIES */
      impactStories: [

        {
          title:
            "Seeds of Confidence",

          category:
            "Livelihood",

          image:
            "/uploads/story1.jpg",

          desc:
            "Supporting children and families through inclusive education, therapy, and confidence-building programs.",

          type:
            "large",
        },

        {
          title:
            "Letting Children Dream Big",

          category:
            "Sports",

          image:
            "/uploads/story2.jpg",

          desc:
            "Helping every child discover their abilities and grow with confidence and dignity.",

          type:
            "tall",
        },

        {
          title:
            "From Classroom To Confidence",

          category:
            "Education",

          image:
            "/uploads/story3.jpg",

          desc:
            "Creating safe learning environments for children with special needs.",

          type:
            "small",
        },

        {
          title:
            "Every Family Matters",

          category:
            "Care",

          image:
            "/uploads/story4.jpg",

          desc:
            "Empowering families with therapy support and community care programs.",

          type:
            "small",
        },
      ],

      /* STATS */
      stats: [

        {
          number: "500+",
          label: "Children Supported",
        },

        {
          number: "120+",
          label: "Families Helped",
        },

        {
          number: "15+",
          label: "Programs Running",
        },

        {
          number: "10+",
          label: "Partner Schools",
        },
      ],

      /* FOOTER */
      footer: {

        description:
          "Prarambha Foundation supports children through inclusive education and developmental care.",

        phone:
          "+91 940 911 8461",

        email:
          "foundationprarambha@gmail.com",

        address:
          "Ahmedabad, Gujarat, India",
      },

      /* SECTIONS */
      sections: [

        {
          heading: "Who We Are",

          content:
            "At Prarambha Foundation, we believe every child deserves understanding and support.",
        },

        {
          heading: "Our Mission",

          content:
            "Creating inclusive and empowering environments for children.",
        },
      ],
    })

    /* =========================
        ABOUT PAGE
    ========================= */
    await Page.create({

      page: "about",

      /* HERO */
      hero: {

        title:
          "Who We Are",

        subtitle:
          "About Prarambha Foundation",

        description:
          "We focus on early intervention, inclusive education, and child development support.",

        buttonText:
          "Learn More",

        image: "",
      },

      /* MISSION */
      mission: {

        heading:
          "Empowering Every Child",

        content:
          "We work towards inclusive education, therapy support, early intervention, and family-centered development programs for children with special needs.",

        image: "",
      },

      /* VALUES */
      values: [

        {
          title:
            "Inclusive Learning",

          desc:
            "Creating equal opportunities for every child.",

          icon:
            "book",

          color:
            "#E63946",
        },

        {
          title:
            "Therapy Support",

          desc:
            "Supporting developmental growth with professional care.",

          icon:
            "therapy",

          color:
            "#2563EB",
        },

        {
          title:
            "Family Empowerment",

          desc:
            "Helping families grow with confidence and support.",

          icon:
            "users",

          color:
            "#16A34A",
        },

        {
          title:
            "Child Development",

          desc:
            "Encouraging every child to discover their abilities.",

          icon:
            "brain",

          color:
            "#F59E0B",
        },
      ],

      /* IMPACT */
      impact: [

        {
          number: "500+",
          label:
            "Children Supported",
        },

        {
          number: "120+",
          label:
            "Families Helped",
        },

        {
          number: "15+",
          label:
            "Programs Running",
        },

        {
          number: "10+",
          label:
            "Partner Schools",
        },
      ],

      /* PHILOSOPHY */
      philosophy: {

        title:
          "Every Child Deserves Opportunity",

        description:
          "We believe inclusion begins with understanding, compassion, and accessible support systems for every child and family.",
      },

      /* CTA */
      cta: {

        title:
          "Join Our Mission",

        description:
          "Support inclusive education and child development initiatives through collaboration and care.",

        button1:
          "Get Involved",

        button2:
          "Contact Us",
      },

      /* FOOTER */
      footer: {

        description:
          "Prarambha Foundation supports children through inclusive education and developmental care.",

        phone:
          "+91 940 911 8461",

        email:
          "foundationprarambha@gmail.com",

        address:
          "Ahmedabad, Gujarat, India",
      },

      /* SECTIONS */
      sections: [

        {
          heading: "Our Vision",

          content:
            "To build a world where every child is understood before being judged.",
        },

        {
          heading: "Our Values",

          content:
            "Inclusion, dignity, compassion, and empowerment.",
        },
      ],
    })

    /* =========================
        PROGRAMS PAGE
    ========================= */
    await Page.create({

      page: "programs",

      hero: {

        title:
          "Our Programs",

        subtitle:
          "Development Programs",

        description:
          "Therapy support, inclusive education, family counseling, and developmental care.",

        buttonText:
          "View Programs",

        image: "",
      },

      programs: [

        {
          title:
            "Therapy Support",

          points: [
            "Speech Therapy",
            "Occupational Therapy",
            "Behavioral Therapy",
          ],

          color:
            "#E63946",
        },

        {
          title:
            "Inclusive Education",

          points: [
            "School Inclusion",
            "Learning Support",
            "Child Development",
          ],

          color:
            "#2563EB",
        },
      ],

      footer: {

        description:
          "Prarambha Foundation supports children through inclusive education and developmental care.",

        phone:
          "+91 940 911 8461",

        email:
          "foundationprarambha@gmail.com",

        address:
          "Ahmedabad, Gujarat, India",
      },

      sections: [

        {
          heading:
            "Therapy Support",

          content:
            "Speech, occupational, and behavioral therapy services.",
        },

        {
          heading:
            "Inclusive Education",

          content:
            "Creating equal opportunities for every child.",
        },
      ],
    })

    console.log(
      "All Pages Seeded Successfully"
    )

    process.exit()

  } catch (error) {

    console.log(error)

    process.exit(1)
  }
}

seedPages()