import express from "express"
import nodemailer from "nodemailer"
import Message from "../models/Message.js"

const router = express.Router()


/* =========================================
   GMAIL TRANSPORTER
========================================= */

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})


/* =========================================
   SEND CONFIRMATION EMAIL
========================================= */

const sendConfirmationEmail = async ({
  name,
  email,
  subject,
}) => {

  const mailOptions = {
    from: `"Prarambha Foundation" <${process.env.EMAIL_USER}>`,

    to: email,

    subject:
      "Thank you for contacting Prarambha Foundation",

    html: `
      <div
        style="
          font-family: Arial, sans-serif;
          color: #333;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        "
      >

        <h2 style="color: #0B1B4D;">
          Hello ${name},
        </h2>

        <p>
          Thank you for reaching out to Prarambha Foundation.
          We have successfully received your message.
        </p>

        <div
          style="
            background-color: #f9f9f9;
            padding: 15px;
            border-left: 4px solid #E63946;
            margin: 20px 0;
          "
        >

          <p style="margin: 0;">
            <strong>Subject:</strong> ${subject}
          </p>

        </div>

        <p>
          Our team will review your inquiry and get back to you
          as soon as possible.
        </p>

        <br />

        <p style="margin-bottom: 5px;">
          Warm regards,
        </p>

        <p
          style="
            font-weight: bold;
            margin-top: 0;
            color: #E63946;
          "
        >
          The Prarambha Foundation Team
        </p>

        <hr
          style="
            border: 0;
            border-top: 1px solid #eee;
            margin: 20px 0;
          "
        />

        <p
          style="
            font-size: 0.9em;
            color: #666;
          "
        >

          <strong>Prarambha Foundation</strong>
          <br />

          Phone: +91 9825052901, 9409118461
          <br />

          Email: foundationprarambha@gmail.com

        </p>

      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
}


/* =========================================
   SEND MESSAGE
========================================= */

router.post("/", async (req, res) => {

  console.log(
    "[DEBUG] /api/messages body:",
    req.body
  )

  try {

    const {
      name,
      email,
      subject,
      message,
    } = req.body


    /* -----------------------------------------
       VALIDATION
    ----------------------------------------- */

    if (
      !name ||
      !email ||
      !subject ||
      !message
    ) {

      return res.status(400).json({
        success: false,
        message: "All fields are required",
      })

    }


    /* -----------------------------------------
       SAVE MESSAGE TO MONGODB
    ----------------------------------------- */

    const newMessage =
      await Message.create({
        name,
        email,
        subject,
        message,
      })


    console.log(
      `[MESSAGE] Message saved successfully for: ${email}`
    )


    /* -----------------------------------------
       SEND RESPONSE IMMEDIATELY
       
       IMPORTANT:
       Frontend will NOT wait for Gmail.
    ----------------------------------------- */

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
    })


    /* -----------------------------------------
       SEND EMAIL IN BACKGROUND
    ----------------------------------------- */

    sendConfirmationEmail({
      name,
      email,
      subject,
    })

      .then(() => {

        console.log(
          `[EMAIL] Confirmation email sent successfully to: ${email}`
        )

      })

      .catch((emailError) => {

        console.error(
          `[EMAIL] Email sending failed for ${email}:`,
          emailError.message
        )

      })

  } catch (error) {

    console.error(
      "[MESSAGE] Failed to save message:",
      error
    )


    if (!res.headersSent) {

      res.status(500).json({
        success: false,
        message: error.message,
      })

    }

  }

})


/* =========================================
   GET ALL MESSAGES
========================================= */

router.get("/", async (req, res) => {

  try {

    const messages =
      await Message.find()
        .sort({
          createdAt: -1,
        })


    res.json(messages)

  } catch (error) {

    console.error(
      "[MESSAGE] Failed to fetch messages:",
      error
    )

    res.status(500).json({
      message: error.message,
    })

  }

})


/* =========================================
   DELETE MESSAGE
========================================= */

router.delete("/:id", async (req, res) => {

  try {

    const message =
      await Message.findById(
        req.params.id
      )


    if (!message) {

      return res.status(404).json({
        message: "Message not found",
      })

    }


    await message.deleteOne()


    res.json({
      message: "Message deleted",
    })

  } catch (error) {

    console.error(
      "[MESSAGE] Failed to delete message:",
      error
    )

    res.status(500).json({
      message: error.message,
    })

  }

})


export default router