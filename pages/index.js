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

                    <div class="row">
                        <div class="col-lg-4">
                            <div >
                                <img className="ang " src="ang_joca.png" />
                            </div>
                            
                            <h2 className='mt-4 mt-4'>Ângella</h2>
                            <p>Licenciatura em Física</p>
                            
                        </div>
                        <div class="col-lg-4">
                            <div className="rounded-circle circulo centralizar">
                                <img className="welisom" src="welisom_joca.png" />
                            </div>

                            <h2 className='mt-4 mt-4'>Wellison</h2>
                            <p>Técnico em Informática</p>
                            
                        </div>
                        <div class="col-lg-4">
                                
                        

                            <div className="rounded-circle circulo centralizar">
                                <img className="penha" src="penha_joca.png" />

                            </div>

                            <h2 className='mt-4 mt-4'>Maria da Penha</h2>
                            <p>Coordenado e docente de física</p>
                    
                        </div>

                        </div>

                        

                        <div  class="row featurette">
                        <div class="col-md-7">
                            <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
                            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div class="col-md-5">
                            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                        </div>
                        </div>

                      

                        

                        
                    

                </Container>

               
            </Jumbotron>



        </div>
    );
}

export default Home;
