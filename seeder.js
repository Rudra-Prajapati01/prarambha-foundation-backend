import dotenv from "dotenv"
import bcrypt from "bcryptjs"

import connectDB from "./config/db.js"
import Admin from "./models/Admin.js"

dotenv.config()

connectDB()

const seedAdmin = async () => {

  try {

    await Admin.deleteMany()

    const hashedPassword = await bcrypt.hash("admin123", 10)

    await Admin.create({
      name: "Admin",
      email: "admin@prarambha.com",
      password: hashedPassword,
    })

    console.log("Admin Created Successfully")

    process.exit()

  } catch (error) {

    console.log(error)

    process.exit(1)

  }
}

seedAdmin()