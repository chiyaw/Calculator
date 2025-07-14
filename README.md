# Calculator

[Live Demo](https://calculator-vzv6.vercel.app/)

A simple, modern calculator app built with React and Vite.

## Features
- Basic arithmetic operations: addition, subtraction, multiplication, division
- Responsive and clean UI
- Keyboard and mouse input support
- Clear and delete functionality

## Project Structure

```
├── src/
│   ├── App.jsx              # Main calculator logic and UI
│   ├── App.css              # Calculator styles
│   ├── DigitButton.jsx      # Digit button component
│   ├── OperationButton.jsx  # Operation button component
│   └── main.jsx             # App entry point
├── index.html               # Main HTML file
├── package.json             # Project metadata and dependencies
├── vite.config.js           # Vite configuration
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd Calculator
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App
Start the development server:
```sh
npm run dev
```
Open your browser and go to the local address shown in the terminal (usually http://localhost:5173).

### Building for Production
To build the app for production:
```sh
npm run build
```

To preview the production build:
```sh
npm run preview
```

## Dependencies
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)

