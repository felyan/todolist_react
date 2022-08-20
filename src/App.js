import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <Container>
      <AppWrapper>
        <Header />
        <Form />
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
  min-width: 450px;
  min-height: 650px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 3px 6px 40px #000;
  margin-bottom: 10px;
`;
