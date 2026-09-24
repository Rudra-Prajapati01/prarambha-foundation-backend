import bcrypt from "bcryptjs"

import Admin from "../models/Admin.js"
import generateToken from "../utils/generateToken.js"

const loginAdmin = async (req, res) => {

  const { email, password } = req.body

  try {

    const admin = await Admin.findOne({ email })

    if (!admin) {
      return res.status(401).json({
        message: "Invalid email",
      })
    }

    const isMatch = await bcrypt.compare(password, admin.password)

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid password",
      })
    }

    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      token: generateToken(admin._id),
    })

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }
}

export { loginAdmin }