import React from 'react';
import styled from "styled-components";
import { Fab, TextField } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Todolist = ({ todos, setTodos, setEditTodo, completed }) => {
    
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return{...item, completed: !item.completed}
                }
                return item;
            })
        )
    }
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))        
    }
  return (
    <div>
          {todos.map((todo) => (
              <ListItem key={todo.id}>
                <TextField
                      id="outlined-size-small"
                      size="small"
                      value={todo.title}
                      onChange={(e) => e.preventDefault()}
                      sx={completed ? {
                          textDecorationStyle: 'solid',
                            textDecorationLine: 'line-through',
                            textDecorationColor: '#ff6c6c',
                            opacity: '0.6',
                      } : {
                          width: '75%',
                            input: { color: 'orange' },
                            backgroundColor: '#12343b',
                            fontSize: '20px',
                            paddingLeft: '10px',
                            marginRight: '15px',
                      }
                    }
                                   
                />                  
                  <Fab
                      size="small"
                      color="primary"
                      aria-label="check"
                      sx={{ marginRight: '5px' }}
                      onClick={() => handleComplete(todo)}
                  >
                        <CheckCircleIcon />
                    </Fab>
                  <Fab
                      size="small"
                      color="warning"
                      aria-label="edit"
                      sx={{ marginRight: '5px' }}
                      onClick={() => handleEdit(todo)}
                  >
                        <EditIcon />
                      </Fab>
                  <Fab
                      size="small"
                      color="success"
                      aria-label="delete"
                      onClick={() => handleDelete(todo)}
                  >
                        <DeleteIcon />
                    </Fab>
           </ListItem>
       ))} 
    </div>
  )
}

export default Todolist

const ListItem = styled.li`
    display: flex;
    margin: 20px 0;
    border-radius: 10px;
    padding: 10px;
    max-height: 30px;
`