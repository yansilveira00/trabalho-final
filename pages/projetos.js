import React from 'react';
import Menu from '../components/Menu';
import { UncontrolledCarousel } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Jumbotron, Container} from 'reactstrap';

function Projetos() {
    return (
        <div>
            <Menu />
            <Jumbotron>
                <Container>
                    <h1>Projetos</h1>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Projetos
