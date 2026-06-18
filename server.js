const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Load data from db.json
const dbPath = path.join(__dirname, 'db.json');
const getData = () => {
  const data = fs.readFileSync(dbPath, 'utf8');
  return JSON.parse(data);
};

// Routes - Students
app.get('/api/students', (req, res) => {
  const data = getData();
  res.json(data.students);
});

app.get('/api/students/:id', (req, res) => {
  const data = getData();
  const student = data.students.find(s => s.id === parseInt(req.params.id));
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
});

app.post('/api/students', (req, res) => {
  const data = getData();
  const newStudent = {
    id: data.students.length > 0 ? Math.max(...data.students.map(s => s.id)) + 1 : 1,
    ...req.body,
    createdAt: new Date().toISOString().split('T')[0]
  };
  data.students.push(newStudent);
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
  res.status(201).json(newStudent);
});

app.put('/api/students/:id', (req, res) => {
  const data = getData();
  const studentIndex = data.students.findIndex(s => s.id === parseInt(req.params.id));
  if (studentIndex > -1) {
    data.students[studentIndex] = { ...data.students[studentIndex], ...req.body };
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    res.json(data.students[studentIndex]);
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
});

app.delete('/api/students/:id', (req, res) => {
  const data = getData();
  const studentIndex = data.students.findIndex(s => s.id === parseInt(req.params.id));
  if (studentIndex > -1) {
    const deletedStudent = data.students.splice(studentIndex, 1);
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    res.json(deletedStudent[0]);
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
});

// Routes - Teachers
app.get('/api/teachers', (req, res) => {
  const data = getData();
  res.json(data.teachers);
});

app.get('/api/teachers/:id', (req, res) => {
  const data = getData();
  const teacher = data.teachers.find(t => t.id === parseInt(req.params.id));
  if (teacher) {
    res.json(teacher);
  } else {
    res.status(404).json({ message: 'Teacher not found' });
  }
});

app.post('/api/teachers', (req, res) => {
  const data = getData();
  const newTeacher = {
    id: data.teachers.length > 0 ? Math.max(...data.teachers.map(t => t.id)) + 1 : 1,
    ...req.body,
    createdAt: new Date().toISOString().split('T')[0]
  };
  data.teachers.push(newTeacher);
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
  res.status(201).json(newTeacher);
});

app.put('/api/teachers/:id', (req, res) => {
  const data = getData();
  const teacherIndex = data.teachers.findIndex(t => t.id === parseInt(req.params.id));
  if (teacherIndex > -1) {
    data.teachers[teacherIndex] = { ...data.teachers[teacherIndex], ...req.body };
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    res.json(data.teachers[teacherIndex]);
  } else {
    res.status(404).json({ message: 'Teacher not found' });
  }
});

app.delete('/api/teachers/:id', (req, res) => {
  const data = getData();
  const teacherIndex = data.teachers.findIndex(t => t.id === parseInt(req.params.id));
  if (teacherIndex > -1) {
    const deletedTeacher = data.teachers.splice(teacherIndex, 1);
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    res.json(deletedTeacher[0]);
  } else {
    res.status(404).json({ message: 'Teacher not found' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
