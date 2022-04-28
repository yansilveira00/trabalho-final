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

                }
                .circulo{
                    width: 140px;
                    height: 140px;
                    background-color: blue;
                    font-size: 52px;
                    padding-top: 24px;

                }

                .ang, .penha, .welisom{
                    width= 100px;
                    height= 100px;
                    font-size= 40px; 
                    padding-top= 20px; 
                }
                .centralizar{
                    margin: 0 auto !important;
                    float: none !important;
                }

                }`}</style>


                <Container className='text-center'>
                    <div>
                        <h1 className='display-4'>Já ouviu falar em robótica no IF?</h1>
                        <p className='lead'>A robótica é um projeto de extenção do IF Salinas, que foi fundado em 2018.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div >
                                <img className="ang " src="ang_joca.png" />
                            </div>
                            
                            <h2 className='mt-4 mt-4'>Ângella</h2>
                            <p>Licenciatura em Física</p>
                            
                        </div>
                        <div className="col-lg-4">
                            <div >
                                <img className="welisom" src="welisom_joca.png" />
                            </div>

                            <h2 className='mt-4 mt-4'>Wellison</h2>
                            <p>Técnico em Informática</p>
                            
                        </div>
                        <div className="col-lg-4">
                            <div >
                                <img className="penha" src="penha_joca.png" />

                            </div>

                            <h2 className='mt-4 mt-4'>Maria da Penha</h2>
                            <p>Coordenado e docente de física</p>
                    
                        </div>

                        </div>

                        

                        <div  className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">A WallBotz é um projeto de robótica do IFNMG-Campus Salinas. <span class="text-muted">Criado com o objetivo de transformar o processo de aprendizagem utilizando mecanismos tecnológicos como ferramenta educacional.</span></h2>
                            <p className="lead">Atualmente temos estudantes de Licenciatura em Física e Sistemas de Informação.</p>
                        </div>
                        <div className="col-md-5">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                        </div>
                        </div>

                      

                        

                        
                    

                </Container>

               
            </Jumbotron>



        </div>
    );
}

export default Home;
