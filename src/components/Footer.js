import React from 'react';
import { Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


export default function Footer () {


    const styles = {
        borderTop: '1px solid white',
        color: 'white',
        paddingTop: '10px'
      };
      
    return (
        <Container style={styles}>
          <Row className='justify-content-md-center'>SiccumCars &copy;</Row>
          <Row className='justify-content-md-center'>
            <a href="https://www.instagram.com/siccumcars/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.google.com/maps/place/Pra%C3%A7a+Higino+da+Silveira+-+Alto,+Teres%C3%B3polis"target="_blank" rel="noopener noreferrer" >Onde Estamos</a>
            <a href="https://www.facebook.com/SiccumCars/" target="_blank" rel="noopener noreferrer">Facebook</a>
         </Row>
        </Container>
    )
}

