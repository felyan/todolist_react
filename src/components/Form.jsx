import { TextField, Button } from '@mui/material';
import React, {useEffect} from 'react';
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    }

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("")
        }
    }, [setInput, editTodo]);

    const onInputChange = (e) => {
        setInput(e.target.value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
        
    }

    return (
        <form onSubmit={onFormSubmit}>
            <Row>            
                <TextField
                    id="filled-basic"
                    label="Enter a Todo..."
                    variant="filled"
                    color="warning"
                    sx={{
                        width: '75%',
                        input: { color: 'orange' }
                    }}
                    value={input}
                    required
                    onChange={onInputChange}
                />
                <Button
                    type="submit"
                    variant="outlined"
                    color="warning"
                    size="large"
                >
                    {editTodo ? "OK" : "Add"}
                </Button>        
            </Row>
        </form>
  )
}

export default Form

const Row = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
`