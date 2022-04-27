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

            <jumbotron fluid className='projetos'>

                <Container className='text-center'>
                    <style>{`.servicos`}</style>
                    <h1 className='display-4'>Já ouviu falar em robótica no IF?</h1>
                    <p className='lead'>A robótica é um projeto de extenção do IF Salinas, que foi fundado em 2018.</p>

                </Container>
            </jumbotron>

        </div>
    );
}

export default Home;
