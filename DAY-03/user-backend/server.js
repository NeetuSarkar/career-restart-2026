import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./models/User.js";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("MongoDB connection failed:", error);
  });

// Home
app.get("/", (req, res) => {
  res.json("Welcome to the server");
});

// Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users",
    });
  }
});

// Get single user
app.get("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);
  } catch (error) {
    res.status(400).json({
      message: "Invalid user ID",
    });
  }
});

// Create user
app.post("/api/users", async (req, res) => {
  try {
    const { name, age, role, status } = req.body;

    const newUser = await User.create({
      name,
      age,
      role,
      status,
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
});

//UPdate User
app.put("/api/users/:id", async (req, res) => {
  try {
    const { name, age, role, status } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        name,
        age,
        role,
        status,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update user",
      error: error.message,
    });
  }
});

//Delete a user
// Delete User
app.delete("/api/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(
      req.params.id
    );

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      message: "User deleted successfully",
      user: deletedUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to delete user",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
