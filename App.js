body, html {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
}

/* Base app style */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px;
  color: white;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  transition: background 1s ease;
}

/* Dynamic backgrounds */
.app.sunny { background: linear-gradient(to right, #fddb92, #d1fdff); color: #333; }
.app.cloudy { background: linear-gradient(to right, #bdc3c7, #2c3e50); }
.app.rainy { background: linear-gradient(to right, #00c6fb, #005bea); }
.app.snowy { background: linear-gradient(to right, #e6f0ff, #99ccff); }

h1 {
  margin-bottom: 20px;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
}

.form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  padding: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  width: 60%;
}

button {
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: #ff4d6d;
  color: white;
  font-weight: bold;
  transition: 0.3s;
}

button:hover { background: #ff1a3c; }

.weather-card {
  background: rgba(255,255,255,0.2);
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  margin-bottom: 20px;
}

.weather-card img { width: 80px; height: 80px; }
.temp { font-size: 36px; font-weight: bold; margin: 5px 0; }

.forecast-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 15px;
  width: 100%;
  max-width: 600px;
}

.forecast-card {
  background: rgba(255,255,255,0.2);
  border-radius: 12px;
  padding: 10px;
  text-align: center;
}

.info { margin-top: 10px; }
.error { color: #ffb3b3; margin-top: 10px; }
