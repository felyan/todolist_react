import React from 'react';
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
        <AppWrapper>
            <h1>Todo List</h1>
        </AppWrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`
    background: linear-gradient(to right bottom,rgb(78 179 130),rgb(135 117 184));
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AppWrapper = styled.div`
    background-color: #12343b;
    color: #fff;
    min-width: 450px;
    min-height: 650px;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 3px 6px 40px #000;
    margin-bottom: 10px;
`;
