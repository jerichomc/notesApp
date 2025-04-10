# Notes App

This is a full-stack notes application where you can create, view, update, and delete notes. It uses **React** for the frontend and **Node.js** with **MongoDB Atlas** for the backend.

## Features
- **Create a new note**: Add a title and content for your note.
- **View all notes**: See a list of all notes you’ve added.
- **Update a note**: Edit the title or content of an existing note.
- **Delete a note**: Remove a note you no longer need.

## Technologies Used
- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB Atlas

## Getting Started

### 1. Clone the repository

To get started, clone this repo to your local machine:
git clone https://github.com/yourusername/notes-app.git


### 2. Set up the Backend
- Navigate to the backend folder:
cd backend

- Install the necessary dependencies:
npm install

- Create a `.env` file in the backend directory with the following content:
MONGO_URI=your_mongodb_connection_string

Replace `your_mongodb_connection_string` with the connection URL from MongoDB Atlas.

- Start the server: 
node server.js


### 3. Set up the Frontend
- Navigate to the frontend folder:
cd frontend

- Install the necessary dependencies:
npm start

Your app should now be running at `http://localhost:3000`.

### 4. Using the App
- Once both the frontend and backend are running, you can:
- Create new notes by typing a title and content, and clicking **Add Note**.
- View your notes displayed on the page.
- Update any note by clicking the **Update** button.
- Delete any note by clicking the **Delete** button.

## What I Learned
- **Frontend (React)**:
- Learned how to create functional components and manage state with `useState` and `useEffect`.
- Used **Axios** to make HTTP requests to interact with the backend.
- Used form elements like input fields and text areas to gather user input.

- **Backend (Node.js + Express)**:
- Learned how to set up a basic Express server to handle **GET**, **POST**, **PUT**, and **DELETE** requests.
- Connected the backend to a **MongoDB Atlas** database to store and manage data.
- Used **Mongoose** to interact with MongoDB and perform CRUD operations.

- **Database (MongoDB Atlas)**:
- Learned how to set up a MongoDB database on **MongoDB Atlas** and connect it to my app.
- Used Mongoose to define a schema and create models for the notes.



This project has been a great learning experience for me. I’ve learned how to connect a frontend and backend, manage a database, and handle CRUD operations. 
