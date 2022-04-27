import Menu from '../components/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

import { Jumbotron, Container } from 'reactstrap';

function Home() {
    return (
        <div>

            <Head>
                <title>Home-WallBotz</title>
                <meta name='description' content='Site sobre robótica'/>
                <meta name='autor' contet='Luiz Gustavo, Rafael Henrique e Yan Silveira'/>
            </Head>
            <Menu />

            <Jumbotron fluid className="projetos">
                <style>{`.projetos{
                        padding-top: 80px;
                        padding-bottom: 80px;
                        background-color: #DAA520;
                        color: #fff;
                        margin-bottom: 0rem !important;

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
