# Student Management CRUD App (React + JSON Server)

This project is a simple and clean **Student Management System** built
using **React** for the frontend and **JSON Server** as a mock backend.\
It supports full **CRUD operations**:

-   Create Student\
-   View Student Details\
-   Edit Student\
-   Delete Student\
-   List All Students

## 📌 Features

-   React-based UI with modern styling.
-   Centralized routing using React Router.
-   Fully responsive table and form UI.
-   JSON Server REST API integration.
-   Components:
    -   `StudentTable`
    -   `CreateStudent`
    -   `EditStudent`
    -   `ViewDetails`

## 📂 Project Structure

    /src
    │── App.js
    │── App.css
    │── index.css
    │── StudentTable.js
    │── CreateStudent.js
    │── EditStudent.js
    │── ViewDetails.js (expected)

## 🚀 Getting Started

### 1. Install Dependencies

``` bash
npm install
```

## 🗄️ Setup JSON Server (Backend)

Create a `db.json` file in the root:

``` json
{
  "students": []
}
```

Start JSON server:

``` bash
npx json-server --watch db.json --port 8000
```

## 💻 Start React Frontend

``` bash
npm start
```

## 🧩 Component Overview

-   **StudentTable.js** -- Lists all students.
-   **CreateStudent.js** -- Form to add new student.
-   **EditStudent.js** -- Form to edit student.
-   **ViewDetails.js** -- View specific student details.

## 📦 Dependencies

-   React\
-   React Router DOM\
-   JSON Server
