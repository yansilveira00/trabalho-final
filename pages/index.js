import Menu from '../components/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

function Home() {
    return (
        <div>

            <head>
                <title>Home-WallBotz</title>
                <meta name='description' content='Site sobre robótica'/>
                <meta name='autor' contet='Luiz Gustavo, Rafael Henrique e Yan Silveira'/>
            </head>
            <Menu />

            <Jumbotron fluid className="projetos">
                <style>{`.projetos{
                        padding-top: 80px;
                        padding-bottom: 80px;
                        background-color: blue;
                        color: #00ff00;
                        margin-bottom: 0rem !important;

                }`}</style>

                <Container className='text-center'>
                    
                    <h1 className='display-4'>Já ouviu falar em robótica no IF?</h1>
                    <p className='lead'>A robótica é um projeto de extenção do IF Salinas, que foi fundado em 2018.</p>

                </Container>
            </Jumbotron>

            <Jumbotron fluid className="projetos">
                <style>{`.projetos{
                        padding-top: 80px;
                        padding-bottom: 80px;
                        background-color: #00ff00;
                        color: #00ff00;
                        

                }`}</style>

                <Container className='text-center'>
                    
                    <h1 className='display-4'>Já ouviu falar em robótica no IF?</h1>
                    <p className='lead'>A robótica é um projeto de extenção do IF Salinas, que foi fundado em 2018.</p>

                </Container>
            </Jumbotron>

            

        </div>
    );
}

export default Home;
