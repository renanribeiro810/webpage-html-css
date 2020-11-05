import React from 'react';
import { Container, Row, Image} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './style.css'
import Logo from './logo.png'


export default function Header () {

    const menu = [
        {pagina: 'Home',
        rota:'/'},
        {pagina: 'Contato',
        rota: '/Contato'},
        {pagina: 'Sobre',
        rota: '/Sobre'}
    ]

    const styleLogo = {
        width: '180px',
        textAlign: 'center',

    }

    const ativo = {
        color: 'brown',
        fontWeight: 'bold'
        }

    return (
    <Container>
        <Row className='justify-content-md-center'>
        <NavLink activeStyle={ativo} exact to='/'>
            <Image style={styleLogo} src={Logo}/>
        </NavLink> 
        </Row>
        
        <nav>
        { menu.map(s => (
        <NavLink activeStyle={ativo} exact to={s.rota}>
            {s.pagina}
        </NavLink>
        ))}
        </nav>
    </Container>
    )
}


