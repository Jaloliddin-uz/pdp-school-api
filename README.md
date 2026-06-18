# PDP School API

A simple REST API for managing students and teachers data in a school management system.

## Features

- ✅ Get all students/teachers
- ✅ Get student/teacher by ID
- ✅ Create new student/teacher
- ✅ Update student/teacher information
- ✅ Delete student/teacher
- ✅ CORS enabled for web applications
- ✅ JSON file-based database

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Jaloliddin-uz/pdp-school-api.git
cd pdp-school-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The server will run on `http://localhost:3000`

## Alternative: Using JSON Server

For quick prototyping without Node.js backend:

```bash
npm run json-server
```

This will start a JSON Server on `http://localhost:3001`

## API Endpoints

### Students

- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get student by ID
- `POST /api/students` - Create new student
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student

### Teachers

- `GET /api/teachers` - Get all teachers
- `GET /api/teachers/:id` - Get teacher by ID
- `POST /api/teachers` - Create new teacher
- `PUT /api/teachers/:id` - Update teacher
- `DELETE /api/teachers/:id` - Delete teacher

### Health Check

- `GET /api/health` - Check API status

## Usage Examples

### Get all students
```bash
curl http://localhost:3000/api/students
```

### Get student by ID
```bash
curl http://localhost:3000/api/students/1
```

### Create new student
```bash
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d '{
    "firstname": "Test",
    "lastname": "Student",
    "birthDate": "2010-01-01",
    "gender": "male",
    "class": "9-A",
    "email": "test@gmail.com",
    "phone": "+998901234567",
    "address": "Tashkent",
    "parents": {
      "fatherName": "Father Name",
      "fatherPhone": "+998901112233",
      "motherName": "Mother Name",
      "motherPhone": "+998933334455"
    }
  }'
```

### Update student
```bash
curl -X PUT http://localhost:3000/api/students/1 \
  -H "Content-Type: application/json" \
  -d '{
    "class": "10-A"
  }'
```

### Delete student
```bash
curl -X DELETE http://localhost:3000/api/students/1
```

## Data Structure

### Student Object
```json
{
  "id": 1,
  "firstname": "Ali",
  "lastname": "Valiyev",
  "birthDate": "2010-05-12",
  "gender": "male",
  "class": "9-A",
  "email": "ali@gmail.com",
  "phone": "+998901234567",
  "address": "Toshkent",
  "parents": {
    "fatherName": "Akmal Valiyev",
    "fatherPhone": "+998901112233",
    "motherName": "Dilnoza Valiyeva",
    "motherPhone": "+998933334455"
  },
  "createdAt": "2026-06-18"
}
```

### Teacher Object
```json
{
  "id": 1,
  "firstname": "Aziz",
  "lastname": "Karimov",
  "birthDate": "1990-08-15",
  "gender": "male",
  "subject": "Matematika",
  "email": "aziz@gmail.com",
  "phone": "+998901010101",
  "address": "Toshkent",
  "createdAt": "2026-06-18"
}
```

## File Structure

```
pdp-school-api/
├── data/
│   ├── students.json      # Students data
│   └── teachers.json      # Teachers data
├── db.json                # Combined database (for JSON Server)
├── server.js              # Express server
├── package.json           # Dependencies
├── .gitignore            # Git ignore file
└── README.md             # Documentation
```

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-Origin Resource Sharing
- **JSON Server** - JSON database server

## Development

To run in development mode with auto-reload:

```bash
npm run dev
```

This requires `nodemon` to be installed (included in devDependencies).

## License

MIT

## Author

Jaloliddin-uz
