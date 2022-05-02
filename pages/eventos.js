import Menu from '../components/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Jumbotron, Container} from 'reactstrap';

function Eventos() {
    return (
        <div>
            <Menu />
            
            <Jumbotron>
            <style>{`.sobre{
                        padding-top: 80px;
                        padding-bottom: 80px;
                        background-color: #DAA520;
                        color: #fff;
                        margin-bottom: 0rem !important;
                }`}</style>
                <Container >
                    <div className='text-center'>
                        <h1 className='display-4'>Eventos da Robótica!</h1>

                    </div>
                    
                </Container>
            </Jumbotron>

            <Jumbotron>
                <Container>
                    <div>
                        
                    </div>
                </Container>
            </Jumbotron>


            
        </div>
    );
}

export default Eventos
