import { TextField, Button } from '@mui/material'
import React from 'react'
import styled from "styled-components";

const Form = () => {
    return (
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
        />
        <Button
            variant="outlined"
            color="warning"
            size="large"
        >
        Add
        </Button>
    </Row>
  )
}

export default Form

const Row = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
`