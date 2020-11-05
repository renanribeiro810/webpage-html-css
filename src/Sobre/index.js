import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import David from './img/David.png'
import Raquel from './img/Raquel.png'
import Renan from './img/Renan.png'
import Rodrigo from './img/Rodrigo.png'
import Douglas from './img/Douglas.png'
import Cleber from './img/Cleber.png'
import { Row, Container, Col } from 'react-bootstrap'
import './style.css'


export default function Sobre () {

        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };

        const itens = [
            { alt: 'Primeiro Slide - David',
                src: David
            },
            { alt: 'Segundo Slide - Raquel',
            src: Raquel
            },
            {   alt: 'Terceiro Slide - Renan',
              src: Renan
            }, 
            { alt: 'Quarto Slide - Rodrigo',
             src: Rodrigo
            },      
            { alt: 'Quinto Slide - Cleber',
              src: Cleber
            }, 
            { alt: 'Sexto Slide - Douglas',
              src: Douglas
            }
        ]
      
        return (
            <Container>
              <h2 id='sobre'>Sobre nós</h2>
            <Row> 
                <Col md={{ span: 10, offset: 1 }}>
                <p>Criada em 2016 – a SiccumCars – veio com a ideia de facilitar e otimizar o tempo dos seus clientes,
                    uma vez que atende em sistema delivery. Inicialmente baseada na cidade de Campos dos Goytacazes/RJ
                    tinha como principal atividade a estética automotiva. Posteriormente, mudou-se para a cidade do Rio
                    de Janeiro/RJ e incluiu em suas atividades a higienização de estofados residenciais,
                    como sofás, colchões e poltronas. A SiccumCars busca a excelência em seus serviços e prioriza a satisfação de seus clientes,
                    parceiros e funcionários. Em paralelo, estamos sempre em constante aprimoramento de nossas técnicas
                    e produtos visando também a preservação do meio ambiente.</p>
                </Col>
            </Row>

            <h3>Conheça nossos funcionários</h3>
           
          <Carousel activeIndex={index} onSelect={handleSelect}>
            { itens.map( i => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={i.src}
                alt={i.alt}
              />
            </Carousel.Item>
            ))}
          </Carousel>
         </ Container>
        );
      }
      