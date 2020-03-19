import React from 'react';
import RegisterForm from './Components/RegisterForm';
import NavBar from './Components/NavBar/navBar';
import { Container } from 'reactstrap';


function App() {
  return (

    <div>

      <NavBar />,

      <Container className="themed-container" fluid="md">

     <RegisterForm />
      
      </Container>

    </div>

  );
}

export default App;
