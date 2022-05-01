import Menu from '../components/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Jumbotron, Container} from 'reactstrap';

function Equipe() {
    return (
        <div>
            <Menu />
            Equipe da Robótica!
            <Jumbotron>
                <Container>
                    <h1>Equipe da Robótica!</h1>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Equipe
