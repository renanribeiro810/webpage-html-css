import { Container, Col, Form, Button } from 'react-bootstrap';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export default function Contato(){

    return (

            <Container>
                <h2 id='contato'>Entre em contato</h2>
            <Form className='form' onSubmit={e => {e.preventDefault();}}  >
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Informe seu email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridNome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="nome" placeholder="Digite seu nome..." />
                    </Form.Group>
                </Form.Row>
                    <Form.Group controlId="formGridEndereco">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridComplemento">
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control placeholder="Apartmento, casa ...." />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEstado">
                        <Form.Label>Motivo do contato</Form.Label>
                        <Form.Control as="select" defaultValue="Escolha...">
                            <option>Escolher...</option>
                            <option>Agendamento</option>
                            <option>Orçamentos</option>
                            <option>Sugestões</option>
                            <option>Reclamações</option>
                            <option>Remarcações de Serviços Agendados</option>
                        </Form.Control>
                        </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCidade">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEstado">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Escolha...</option>
                        <option>Teresópolis</option>
                        <option>Rio de Janeiro</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCEP">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>

                {/* <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                <Button variant="dark" type="submit" >
                    Enviar
                </Button>
                </Form>
            </Container>
    )
}