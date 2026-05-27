# 🏥 Hospital Management System

A full stack Hospital Management System built with React.js, Spring Boot, and MySQL.

## 🔗 Live Links
- **Frontend:** https://hospital-frontend-pink-five.vercel.app
- **Backend API:** https://hospital-backend-adnu.onrender.com/api
- **GitHub:** https://github.com/vanikaushik1712/hospital-management-system

## 🔐 Demo Login
- **Email:** admin@hospital.com
- **Password:** admin123

## 🛠️ Tech Stack
| Layer | Technology | Hosting |
|-------|-----------|---------|
| Frontend | React.js | Vercel |
| Backend | Spring Boot (Java) | Render |
| Database | MySQL | Aiven Cloud |
| API Testing | Postman | - |
| Version Control | Git & GitHub | GitHub |

## ✨ Features
- 🔐 Secure login with encrypted passwords
- 👤 Patient management (Add, Edit, Delete, Search)
- 👨‍⚕️ Doctor management (Add, Edit, Delete)
- 📅 Appointment booking and management
- 📊 Dashboard with live counts

## 📁 Project Structure

## 🚀 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login user |

### Patients
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/patients | Get all patients |
| GET | /api/patients/{id} | Get patient by ID |
| POST | /api/patients | Create patient |
| PUT | /api/patients/{id} | Update patient |
| DELETE | /api/patients/{id} | Delete patient |

### Doctors
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/doctors | Get all doctors |
| GET | /api/doctors/{id} | Get doctor by ID |
| POST | /api/doctors | Create doctor |
| PUT | /api/doctors/{id} | Update doctor |
| DELETE | /api/doctors/{id} | Delete doctor |

### Appointments
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/appointments | Get all appointments |
| GET | /api/appointments/{id} | Get appointment by ID |
| POST | /api/appointments | Create appointment |
| PATCH | /api/appointments/{id}/status | Update status |
| DELETE | /api/appointments/{id} | Delete appointment |

## ⚙️ Local Setup

### Backend
```bash
cd hospital-backend
./mvnw spring-boot:run
```

### Frontend
```bash
cd hospital-frontend
npm install
npm start
```

## 👩‍💻 Developer
**Vani Kaushik**
GitHub: https://github.com/vanikaushik1712

