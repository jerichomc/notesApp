const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

//get all notes
router.get("/", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

//create note
router.post("/", async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({ title, content });
  await newNote.save();
  res.json(newNote);
});

//delete note
router.delete("/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
});

module.exports = router;
