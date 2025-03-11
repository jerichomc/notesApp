require("dotenv").config();  // Loads environment variables from .env file
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());  // Allows us to parse JSON data sent to the API
app.use(cors());  // Enables Cross-Origin Resource Sharing for frontend-backend communication

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Define the Note model
const Note = mongoose.model("Note", new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
}));

// Routes

// Get all notes
app.get("/api/notes", async (req, res) => {
  try {
    const notes = await Note.find();  // Fetch all notes
    res.json(notes);  // Return all notes
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new note
app.post("/api/notes", async (req, res) => {
  const { title, content } = req.body;  // Get title and content from the request body
  const newNote = new Note({
    title,
    content,
  });

  try {
    const savedNote = await newNote.save();  // Save the new note to MongoDB
    res.json(savedNote);  // Return the saved note
  } catch (err) {
    res.status(400).json({ message: err.message });  // If there's an error, send a bad request
  }
});

// Update a note
app.put("/api/notes/:id", async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });  // If the note doesn't exist, return 404
    }
    res.json(updatedNote);  // Return the updated note
  } catch (err) {
    res.status(400).json({ message: err.message });  // If there's an error, send a bad request
  }
});

// Delete a note
app.delete("/api/notes/:id", async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);  // Delete the note by its ID
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });  // If the note doesn't exist, return 404
    }
    res.json({ message: "Note deleted" });  // Return a success message
  } catch (err) {
    res.status(500).json({ message: err.message });  // If there's an error, send a server error
  }
});

// Start the Server
const PORT = process.env.PORT || 5000;  // Default port to 5000 if not specified
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  // Start the server and log the message
