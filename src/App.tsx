import React from 'react';
import './App.css';
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <UserList />
      <br/>
      <TodoList />
    </div>
  );
}

export default App;
