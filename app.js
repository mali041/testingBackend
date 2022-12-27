const express = require('express');
require('dotenv').config();

const dbConnect = require('./config');
const router = require('./routers/teacherRouter');
const app = express();  
const PORT = process.env.PORT || 3041; 

app.use(express.json());

const displayHome = (req, res) => {
    let date = new Date();
        let div = `<div style="background-color: skyblue">
            <h1> This is first headind <h1>
            <h1> This is Secound Heading <h1>
            <h2> ${date.toLocaleTimeString()} </h2>
        </div>`;
    res.send(div);
}

app.get('/', displayHome);

/*
  Creating CRUD for Student's.
*/

const getStudents = async (req, res) => {
  try {
    const allStudents = await dbConnect.query("SELECT * FROM students")
    res.json(allStudents.rows)
  } catch(error) {
    console.log(error.message);
    res.status(404).send("Student not exist");
  }
}

app.get('/students', getStudents);

const getStudentId = async (req, res) => {
  try {
    const student = await dbConnect.query(`SELECT * FROM students where id = ${req.params.studentId}`)
    res.json(student.rows)
  } catch(error) {
    console.log(error.message);
    res.status(404).send(`Student not exist with ID : ${req.params.studentId}`);
  }
}

app.get('/students/:studentId', getStudentId);

const createStudent = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const createStudent = await dbConnect.query(
      "INSERT INTO students (name, email, password) VALUES ($1, $2, $3)", [name, email, password])
    res.json(createStudent.rows)
    console.log("Student added Successgfully");
  } catch(error) {
    console.log(error.message);
  }
}

app.post('/students', createStudent);

const updateStudent = async (req, res) => {
  try {
    const id = parseInt(req.params.studentId);
    const { name, email, password } = req.body;
    const updateStudent = await dbConnect.query(
      "UPDATE students SET name = $1, email = $2, password = $3 WHERE id = $4", [name, email, password, id])
    res.json(updateStudent.rows)
    res.send(200).send(`Student Update Successgfully with ID: ${id}`);
  } catch(error) {
    console.log(error.message);
  }
}

app.put("/students/:studentId", updateStudent);

const deleteStudent = async (req, res) => {
  try {
    const id = parseInt(req.params.studentId);
    const deleteStudent = await dbConnect.query("DELETE FROM students WHERE id = $1", [id])
    res.json(deleteStudent.rows)
    console.log("Student deleted Successgfully");
  } catch(error) {
    console.log(error.message);
  }
}

app.delete("/students/:studentId", deleteStudent);

/*
  Creating CRUD for Teacher's.
*/

app.use('/', router);

const getTeacherId = async (req, res) => {
  try {
    const teacher = await dbConnect.query(`SELECT * FROM teachers where id = ${req.params.teacherId}`)
    res.json(teacher.rows)
  } catch(error) {
    console.log(error.message);
    res.status(404).send(`Teacher not exist with ID : ${req.params.teacherId}`);
  }
}

app.get('/teachers/:teacherId', getTeacherId);

const createTeacher = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const createTeacher = await dbConnect.query(
      "INSERT INTO teachers (name, email, password) VALUES ($1, $2, $3)", [name, email, password])
    res.json(createTeacher.rows)
    console.log("Teacher add Successgfully");
  } catch(error) {
    console.log(error.message);
  }
}

app.post('/teachers', createTeacher);

const updateTeacher = async (req, res) => {
  try {
    const id = parseInt(req.params.teacherId);
    const { name, email, password } = req.body;
    const updateTeacher = await dbConnect.query(
      "UPDATE teachers SET name = $1, email = $2, password = $3 WHERE id = $4", [name, email, password, id])
    res.json(updateTeacher.rows)
    res.send(200).send(`Teacher Update Successgfully with ID: ${id}`);
  } catch(error) {
    console.log(error.message);
  }
}

app.put("/teachers/:teacherId", updateTeacher);

const deleteTeacher = async (req, res) => {
  try {
    const id = parseInt(req.params.teacherId);
    const deleteTeacher = await dbConnect.query("DELETE FROM teachers WHERE id = $1", [id])
    res.json(deleteTeacher.rows)
    console.log("Teacher deleted Successgfully");
  } catch(error) {
    console.log(error.message);
  }
}

app.delete("/teachers/:teacherId", deleteTeacher);

/*
  Creating CRUD for Parent's.
*/

const getParents = async (req, res) => {
  try {
    const allParents = await dbConnect.query("SELECT * FROM parents")
    res.json(allParents.rows)
  } catch(error) {
    console.log(error.message);
    res.status(404).send("Parents not exist");
  }
}

app.get('/parents', getParents);

const getParentId = async (req, res) => {
  try {
    const parent = await dbConnect.query(`SELECT * FROM parents where id = ${req.params.parentId}`)
    res.json(parent.rows)
  } catch(error) {
    console.log(error.message);
    res.status(404).send(`Teacher not exist with ID : ${req.params.parentId}`);
  }
}

app.get('/parents/:parentId', getParentId);

const createParent = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const createParent = await dbConnect.query(
      "INSERT INTO parents (name, email, password) VALUES ($1, $2, $3)", [name, email, password])
    res.json(createParent.rows)
    console.log("Parent added Successgfully");
  } catch(error) {
    console.log(error.message);
  }
}

app.post('/parents', createParent);

const updateParent = async (req, res) => {
  try {
    const id = parseInt(req.params.parentId);
    const { name, email, password } = req.body;
    const updateParent = await dbConnect.query(
      "UPDATE parents SET name = $1, email = $2, password = $3 WHERE id = $4", [name, email, password, id])
    res.json(updateParent.rows)
    res.send(200).send(`Parent Update Successgfully with ID: ${id}`);
  } catch(error) {
    console.log(error.message);
  }
}

app.put("/parents/:parentId", updateParent);

const deleteParent = async (req, res) => {
  try {
    const id = parseInt(req.params.parentId);
    const deleteParent = await dbConnect.query("DELETE FROM parents WHERE id = $1", [id])
    res.json(deleteParent.rows)
    console.log("Parent deleted Successgfully");
  } catch(error) {
    console.log(error.message);
  }
}

app.delete("/parents/:parentId", deleteParent);

/*
  Creating CRUD for Subject's.
*/

const getSubjects = async (req, res) => {
  try {
    const allSubjects = await dbConnect.query("SELECT * FROM subjects")
    res.json(allSubjects.rows)
  } catch(error) {
    console.log(error.message);
    res.status(404).send("Subjects not exist");
  }
}

app.get('/subjects', getSubjects);

const getSubjectId = async (req, res) => {
  try {
    const subject = await dbConnect.query(`SELECT * FROM subjects where id = ${req.params.subjectId}`)
    res.json(subject.rows)
  } catch(error) {
    console.log(error.message);
    res.status(404).send(`Subject not exist with ID : ${req.params.subjectId}`);
  }
}

app.get('/subjects/:subjectId', getSubjectId);

const createSubject = async (req, res) => {
  try {
    const { name } = req.body;
    const createSubject = await dbConnect.query(
      "INSERT INTO subjects (name) VALUES ($1)", [name])
    res.json(createSubject.rows)
    console.log("Subject added Successgfully");
  } catch(error) {
    console.log(error.message);
  }
}

app.post('/subjects', createSubject);

const updateSubject = async (req, res) => {
  try {
    const id = parseInt(req.params.subjectId);
    const { name } = req.body;
    const updateSubject = await dbConnect.query(
      "UPDATE subjects SET name = $1 WHERE id = $2", [name, id])
    res.json(updateSubject.rows)
    res.send(200).send(`Subject Update Successgfully with ID: ${id}`);
  } catch(error) {
    console.log(error.message);
  }
}

app.put("/subjects/:subjectId", updateSubject);

const deleteSubject = async (req, res) => {
  try {
    const id = parseInt(req.params.subjectId);
    const deleteSubject = await dbConnect.query("DELETE FROM subjects WHERE id = $1", [id])
    res.json(deleteSubject.rows)
    console.log("Subject deleted Successgfully");
  } catch(error) {
    console.log(error.message);
  }
}

app.delete("/subjects/:subjectId", deleteSubject);

/* 
  ? Server Listen at PORT => 3041
*/
app.listen(PORT, () => {
  console.log(`Server start on Port ${PORT}`);
})