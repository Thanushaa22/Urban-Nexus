# 🌆 Urban Nexus – AI-Powered Smart City Intelligence Platform

Urban Nexus is a modern, enterprise-grade Smart City Intelligence Platform that leverages Artificial Intelligence, real-time analytics, secure authentication, and geospatial data visualization to improve urban governance and public infrastructure management.

Designed with a scalable microservice-ready architecture, Urban Nexus enables city administrators to monitor healthcare infrastructure, emergency incidents, traffic conditions, and urban statistics through an intelligent, centralized command center.

The platform integrates secure REST APIs, role-based access control, predictive analytics, and interactive dashboards to support data-driven decision-making for smarter, safer, and more sustainable cities.

---

## 🚀 Key Features

### 🔐 Enterprise Security
- JWT Authentication
- Spring Security
- BCrypt Password Encryption
- Role-Based Access Control (RBAC)
- Secure RESTful APIs
- Stateless Authentication

### 🏥 Healthcare Intelligence
- Hospital Management
- Real-time Bed Availability
- ICU Capacity Monitoring
- Healthcare Analytics Dashboard

### 🚨 Emergency Management
- Emergency Alert System
- Disaster Monitoring
- Priority-based Incident Classification
- City-wide Alert Management

### 🚦 Traffic Intelligence
- Traffic Monitoring
- Congestion Analysis
- Urban Mobility Insights
- Smart Route Planning *(Upcoming)*

### 🌍 Smart City Administration
- City Information Management
- Population Statistics
- Infrastructure Monitoring
- Administrative Dashboard

### 🤖 Artificial Intelligence
- Predictive Analytics
- AI-powered Decision Support
- Intelligent Risk Assessment
- Future LLM-based Smart Assistant

---

# 🏗 Architecture

```
React.js
      │
      ▼
Axios REST Client
      │
      ▼
Spring Boot REST API
      │
      ▼
Spring Security + JWT
      │
      ▼
Hibernate / JPA
      │
      ▼
MySQL Database
```

---

# 💻 Technology Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router

## Backend
- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT Authentication
- Maven

## Database
- MySQL

## DevOps
- Git
- GitHub
- Docker *(Planned)*
- Kubernetes *(Planned)*

## AI & Analytics
- Python
- Machine Learning
- Data Analytics

---

# 📂 Project Structure

```
UrbanNexus/
│
├── frontend/
│   ├── React Components
│   ├── Pages
│   ├── Services
│   └── Assets
│
├── backend/
│   ├── Controllers
│   ├── Services
│   ├── Security
│   ├── Repository
│   ├── Entities
│   └── Configuration
│
├── database/
│   ├── Schema
│   └── SQL Scripts
│
└── docs/
    ├── Architecture
    ├── API Documentation
    └── Design Diagrams
```

---

# 🔑 Authentication Workflow

```
User Login
      │
      ▼
JWT Token Generation
      │
      ▼
Secure Authentication
      │
      ▼
Role Validation
      │
      ▼
Protected API Access
```

---

# 📊 Core Modules

- Authentication & Authorization
- User Management
- Hospital Management
- Emergency Alert System
- Traffic Monitoring
- City Management
- Dashboard Analytics
- AI Decision Support

---

# 📈 Planned Enhancements

- AI Chat Assistant
- Google Maps Integration
- Live Weather Services
- WebSocket Notifications
- Docker Containerization
- Kubernetes Deployment
- CI/CD Pipeline
- Cloud Deployment (AWS/Azure)
- Prometheus & Grafana Monitoring

---

# 🎯 Project Objectives

- Build a scalable smart city management platform
- Demonstrate enterprise-grade backend architecture
- Implement secure authentication using JWT
- Develop responsive dashboards for urban analytics
- Integrate AI-driven insights for better decision-making
- Explore cloud-native deployment and DevOps practices

---

# 👨‍💻 Author

**Thanusha M**

Software Developer | Full-Stack Engineer | AI Enthusiast

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/ThanushaM/UrbanNexus-AI.git
cd UrbanNexus-AI
```

---

# 📦 Backend Setup

Navigate to the backend project.

```bash
cd backend/cityverse-backend
```

### Install Maven Dependencies

```bash
mvn clean install
```

### Run Spring Boot

```bash
mvn spring-boot:run
```

Backend runs at:

```
http://localhost:8080
```

---

# 💻 Frontend Setup

Open another terminal.

```bash
cd frontend/cityverse-frontend
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 🗄 Database Setup

Open MySQL.

```sql
CREATE DATABASE cityverse_db;
```

Update the database configuration in:

```
src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/cityverse_db
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
spring.jpa.hibernate.ddl-auto=update
```

Start MySQL before running the backend.

---

# 🔐 Authentication

Register

```
POST /api/auth/register
```

Login

```
POST /api/auth/login
```

Copy the JWT Token and include it in every protected request.

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# 📁 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login |
| GET | `/api/dashboard` | Dashboard |
| GET | `/api/hospitals` | Hospital Data |
| GET | `/api/cities` | City Information |
| GET | `/api/traffic` | Traffic Data |
| GET | `/api/alerts` | Emergency Alerts |
| GET | `/api/admin/dashboard` | Admin Dashboard |

---

# 🐳 Docker (Upcoming)

```bash
docker compose up --build
```

---

# ☁ Future Deployment

```bash
Docker
Kubernetes
AWS
GitHub Actions
```

Building intelligent, scalable, and secure software solutions using Java, Spring Boot, React, Python, and modern cloud technologies.
<img width="1052" height="630" alt="UN_1" src="https://github.com/user-attachments/assets/6c49c1a1-4cd2-4414-ad34-d6327c2be92c" />
<img width="1003" height="535" alt="UN_2" src="https://github.com/user-attachments/assets/37d7891b-adf4-4ad1-afaa-6203ed738cbc" />
<img width="965" height="628" alt="UN_3" src="https://github.com/user-attachments/assets/86997bdb-63ed-43c9-b3eb-86c6bdd2894d" />
<img width="936" height="627" alt="UN_4" src="https://github.com/user-attachments/assets/2167aae0-0539-43cc-8b26-2935e4558372" />
<img width="1114" height="628" alt="UN_5" src="https://github.com/user-attachments/assets/3f1f5111-d22b-46a4-8f83-803290a6c73d" />
<img width="981" height="630" alt="UN_6" src="https://github.com/user-attachments/assets/94bea64f-e525-4918-b04e-e173de8f7887" />
<img width="1366" height="631" alt="Login_UN" src="https://github.com/user-attachments/assets/c9fcea9d-1081-4de8-99fa-7d044c3882f8" />
<img width="1357" height="630" alt="Register_UN" src="https://github.com/user-attachments/assets/a5757275-41a6-470f-9fb1-11566e91ed68" />
<img width="1363" height="633" alt="UND1" src="https://github.com/user-attachments/assets/6225b172-5055-48d8-82e7-909e6bbd62f7" />
<img width="1364" height="626" alt="UND2" src="https://github.com/user-attachments/assets/8a391eb3-a5a1-4a8a-b5ff-0da56fa79dc2" />
<img width="1365" height="631" alt="UND3" src="https://github.com/user-attachments/assets/b734f3cf-dd00-4c2f-9f9e-0c6d5f94ad6a" />
<img width="1366" height="631" alt="UND4" src="https://github.com/user-attachments/assets/123cdc3b-f015-4d4c-b469-a78018fc5955" />
<img width="1356" height="630" alt="UND5" src="https://github.com/user-attachments/assets/2516b6bb-9460-497f-b78c-b7195c6bc2f8" />
<img width="1365" height="631" alt="UND6" src="https://github.com/user-attachments/assets/00b60f45-5d13-4752-89c2-d94574ba969b" />
