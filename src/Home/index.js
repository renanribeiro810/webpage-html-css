import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BBanco from './img/bBanco.jpg';
import BLavagem from './img/bLavagem.jpg';
import BMotor from './img/bMotor.jpg';
import BPolimento from './img/bPolimento.jpg';
import Banco from './img/banco.jpg';
import Lavagem from './img/lavagem.jpg';
import Motor from './img/motor.jpg';
import Polimento from './img/polimento.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom";
import './style.css'


export default function Home () {

  const botaoImagem = [
    {imagem: BLavagem,
     titulo: 'Lavagem a Seco',
     rota: 1
    },

    {imagem: BMotor,
     titulo: 'Limpeza do Motor',
     rota: 2
    },

    {imagem: BBanco,
     titulo: 'Limpeza dos Bancos', 
     rota: 3
    },

    {imagem: BPolimento,
     titulo: 'Polimento', 
     rota: 4
    }
  ]


  const apresentacao = [
    {titulo: 'LAVAGEM A SECO',
    imagem: Lavagem,
    primDescricao: `A Lavagem a seco é um método de limpeza que gasta pouquíssima água, além de ser mais
    eficiente e prática, mais em conta para o bolso dos proprietários — além disso, não podemos
    esquecer, é muito mais benéfica à economia de água das cidades e aos esgotos.
    Essa Lavagem automotiva surgiu da necessidade de se economizar água em tempos de
    racionamento. Assim, em vez de usar jatos de água sobre o carro, ela é feita com toalhas
    específicas (de microfibras) e um produto próprio para esse tipo de limpeza, de modo que o
    atrito com a lataria diminua e não arranhe o veículo.
    Os Motoristas ainda têm muitas inseguranças na hora de saber como se deve recorrer a ela na
    hora da limpeza. Porém, como veremos a seguir, ela é sim bem vantajosa!`,
    tituloDois: 'COMO É REALIZADA',
    segDescricao: `Basicamente, o produto para a Lavagem deve ser espalhado sobre a lataria do carro para
    limpá-lo e dar brilho. O profissional responsável, após espalhar esse líquido, vai
    eliminando a sujeira com um pano.
    O ideal é que o lavador use duas ou três toalhas para isso, evitando que a pintura seja
    danificada à medida que a toalha vai se gastando.
    Olhando assim, parece que todo o processo é simples, não? Mas é preciso ter atenção em
    alguns pontos, especialmente no que diz respeito aos produtos e materiais que serão
    usados. Por isso, selecionamos a seguir as observações mais importantes sobre a Lavagem
    a seco.`,
    ancora: 1
    },
    //usei 'crase' nos textos por causa da quebra de linha 

    {titulo: 'LIMPEZA TÉCNICA DO MOTOR',
    imagem: Motor,
    primDescricao: `O Motor é completamente limpo: campos de reservatório, mangueiras, as borrachas e parte
    interna do capô
    com pinceis de cerdas especiais com produtos biodegradáveis que não agridem as borrachas,
    partes plásticas e nem mesmo os sensores.`,
    tituloDois:'OS BENEFÍCIOS',
    segDescricao: ` Quando a limpeza é feita por um profissional especializado, utilizando os produtos e
    materiais não abrasivos, além de deixar o visual do Motor
    bonito e brilhante, como se tivesse acabado de sair de fábrica, também auxilia na
    conservação das peças e mangueiras, evitando rachaduras por ressecamento.`,
    ancora: 2
    },

    {titulo: 'LIMPEZA DOS BANCOS',
    imagem: Banco,
    primDescricao: `A limpeza de Banco de carro é realizada com técnicas exclusivas e aprimoradas ao longo de
    vários serviços prestados durante anos. Tem como finalidade aproximar a aparência e textura
    do estofamento e do interior do carro à de um carro novo e previne o envelhecimento precoce
    do tecido do Banco, sem causar danos.
    A limpeza de Banco de carro não demanda a remoção do estofado ou das estruturas internas do
    veículo, diferentemente dos procedimentos adotados em um lava a jato. Portanto, não oferece
    riscos de afetar os encaixes internos e a colagem do Banco do veículo.
    É recomendado que o procedimento de limpeza do interior dos carros ou apenas do Banco seja
    realizado a cada três ou quatro meses.`,
    tituloDois:'CUIDADOS COM BANCO DE COURO',
    segDescricao: `Além da limpeza de estofados de tecido, trabalhamos, ainda, com a limpeza e higienização de
    Bancos de couro. É importante saber que os Bancos de couro dos carros merecem uma atenção
    maior na hora da limpeza.
    Por isso, é recomendada a limpeza e a higienização feita por profissionais, a fim de
    garantir a vitalidade de seu Banco de couro. O cuidado deve ser ainda maior se o couro for
    escuro, já que não demonstra a sujeira.
    Outra técnica importante é a hidratação do couro, pois, com o tempo, esse material perde sua
    umidade e suavidade. Esse procedimento evita o ressecamento, que posteriormente causa
    rachaduras e danos permanentes.`,
    ancora: 3
    },

    {titulo: 'POLIMENTO',
    imagem: Polimento,
    primDescricao: `O Polimento automotivo tem a função de reparar determinados danos que ocorrem à pinturado
    carro no dia-a-dia, como manchas causadas por árvores ou pássaros, pequenos riscos, e
    até a
    perda do brilho original. A simples exposição ao sol e à chuva pode desgastar a pintura.
    O serviço é realizado com polidores abrasivos e uma máquina, chamada politriz, e deve
    ser
    feito exclusivamente por profissionais. E é importante frisar que o uso incorreto dos
    produtos e ferramentas podem causar danos mais sérios à pintura do veículo.
    É necessário que um técnico avalie o carro para definir se esse serviço é a melhor
    opção,
    pois apenas um profissional poderá dizer, com certeza, se realizar um Polimento é o
    tratamento ideal, ou se superfície precisa passar por um processo diferente, como a
    descontaminação ou a repintura.`,
    tituloDois:'TIPO DE ENCERAMENTO',
    segDescricao:`Existem dois serviços de Polimento oferecidos: 
    O chamado Enceramento Proteção é o serviço padrão de Polimento, onde são utilizados
    polidores de altíssima performance que são aplicados com equipamentos profissionais. Esse
    serviço promove a remoção eficaz de riscos superficiais e eliminação de manchas causadas por
    intempéries.
    Já o Enceramento Premium soma o serviço descrito acima com a máxima proteção. Esse serviço
    consiste de um Polimento, seguido de descontaminação da pintura utilizando produtos
    profissionais, além da aplicação de Cera de Carnaúba Premium, que promove proteção à
    pintura. Assim, a lataria fica ainda mais protegida. `,
    ancora: 4
  }

  ]

    return (
      <Container>
        <Row>
          <Col md={7}>
            <h1>{'Muito mais que estética,'}</h1>
            <h2>{'é questão de saúde e bem estar'}</h2>
          </Col>
        </Row>

        <div className='botao'>
        <Row className='justify-content-md-center'>  
          { botaoImagem.map(b => (<>
            <Col className='align' md={3}>
            <a href={`#${b.rota}`}> 
            <Image className='bImage' src={b.imagem} roundedCircle /> 
              <div>{b.titulo}</div> </a>

            </Col>
          </>))}

        </Row> 
        </div>

      <div className='apresentacao'>
        { apresentacao.map(a => (
          
          <Row className='justify-content-md-center'> 
            <Col className='align' md={12}>
              <ScrollAnimation animateIn='fadeIn'>
                <div id={a.ancora}></div>
                <h3>{a.titulo}</h3>
                <Col md={{ span: 10, offset: 1 }}><p>{a.primDescricao}</p>  </Col> 
                <Image className='aImage'  resizeMode="contain" src={a.imagem}/>
                <h4>{a.tituloDois}</h4> 
                <Col md={{ span: 10, offset: 1 }}><p>{a.segDescricao}</p> </Col> 
              </ScrollAnimation>
            </Col>
        </Row>   
       
            ))} 
            </div> 
      </Container>
    )
}


