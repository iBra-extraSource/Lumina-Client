# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Lumina Aesthetics - Frontend

Lumina Aesthetics is a full-stack web application designed to support cosmetic consultations using AI-generated facial previews.

The frontend is built with React and Vite. It communicates with the Express.js backend through REST API requests and displays dynamic data stored in PostgreSQL.

## Main Features

### User / Patient
- Create an account
- Log in
- View dashboard
- View profile information
- Upload a facial image
- Choose a cosmetic procedure
- Request an AI-generated preview
- View saved prediction history

### Clinic / Doctor
- Create a clinic account
- Log in
- View clinic dashboard
- Add patients
- View patient profiles
- Update patient information
- Delete patients
- Create AI predictions for patients
- View prediction history
- View clinic profile

## Technologies Used

- React
- Vite
- JavaScript
- React Router
- CSS
- Material UI
- Lucide React
- Fetch API

## Project Structure

```text
src/
├── pages/
│   ├── public/
│   │   └── Landing.jsx
│   │
│   ├── user/
│   │   ├── UserSignup.jsx
│   │   ├── UserLogin.jsx
│   │   ├── UserDashboard.jsx
│   │   ├── UserProfile.jsx
│   │   ├── TryAI.jsx
│   │   └── PredictionHistory.jsx
│   │
│   └── clinic/
│       ├── ClinicSignup.jsx
│       ├── ClinicLogin.jsx
│       ├── ClinicDashboard.jsx
│       ├── Patients.jsx
│       ├── AddPatient.jsx
│       ├── PatientProfile.jsx
│       ├── ClinicPredictions.jsx
│       ├── NewPrediction.jsx
│       └── ClinicProfile.jsx
│
├── assets/
├── App.jsx
├── main.jsx
├── App.css
├── index.css
└── theme.css