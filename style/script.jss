body {
  font-family: 'Segoe UI', sans-serif;
  background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e') no-repeat center center fixed;
  background-size: cover;
  margin: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
}

.todo-container {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  width: 90%;
  max-width: 420px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  color: #fff;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
}

.input-section {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.input-section input {
  flex: 1 1 200px;
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
  box-shadow: 0 0 10px rgba(255,255,255,0.2);
  transition: box-shadow 0.3s;
}

.input-section input:focus {
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.8);
}

.input-section button {
  flex: 1 1 100px;
  padding: 12px 16px;
  background: #00bcd4;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease;
}

.input-section button:hover {
  background: #0097a7;
  transform: scale(1.05);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background: rgba(255, 255, 255, 0.1);
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

li span {
  cursor: pointer;
  flex: 1;
}

li.completed span {
  text-decoration: line-through;
  opacity: 0.6;
}
