import Menu from '../components/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Jumbotron, Container} from 'reactstrap';

function Eventos() {
    return (
        <div>
            <Menu />
            Eventos da Robótica!
            <Jumbotron>
                <Container>
                    <h1>Eventos da Robótica!</h1>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Eventos
