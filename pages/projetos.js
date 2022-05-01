import React from 'react';
import Menu from '../components/Menu';
import { UncontrolledCarousel } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Jumbotron, Container} from 'reactstrap';

function Projetos() {
    return (
        <div>
            <Menu />

            <Jumbotron fluid className='sobre'>
            <style>{`.sobre{
                        padding-top: 80px;
                        padding-bottom: 80px;
                        background-color: #DAA520;
                        color: #fff;
                        margin-bottom: 0rem !important;
                }`}</style>
                <Container >
                    <div className='text-center'>
                    <h1 className='display-4'>Projetos</h1>

                    </div>
                    
                </Container>
            </Jumbotron>

            <Jumbotron>
            
                <Container>

                </Container>
            </Jumbotron>
        </div>
    );
}

export default Projetos
