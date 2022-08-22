import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <Container>
      <AppWrapper>
        <Header />
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <Todolist todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
      </AppWrapper>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background: linear-gradient(to right bottom, rgb(150 179 130), rgb(143 150 102));
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppWrapper = styled.div`
  background-color: #12343b;
  min-width: 600px;
  min-height: 650px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 3px 6px 40px #000;
  margin-bottom: 10px;
`;
