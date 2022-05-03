import Menu from '../components/Menu';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Jumbotron, Container} from 'reactstrap';

function Equipe() {
    return (
        <div>
            <Head>
                <title>Equipe - WallBotz</title>
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
                .featurette-divider {
                    margin: 5rem 0; 
                  }

                }`}</style>
                <Container className='text-center'>

                    <div className='text-center'>
                        <h1 className='display-4'>Equipe da Robótica!</h1>
                    </div>
                   
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="head-sobre">
            <style>{`.head-sobre{
                        padding-top: 80px;
                        padding-bottom: 80px;
                        background-color: #DAA520;
                        color: #fff;
                        margin-bottom: 0rem !important;
                    }
                    .featurette-divider {
                        margin: 5rem 0; 
                      }
                }`}</style>
                <Container  className='text-center'>
                    <div>

                    <div>   
                        <h1 className='display-4'>Equipe</h1>
                        <p className='lead'>2018-2021</p>
                    </div>

                    <hr class="featurette-divider"/>

                    <div className="row">

                        <div className="col-lg-4">
                            <div >
                                <img className="ang " src="ang_joca.png" />
                            </div>
                            <h2 className='mt-4 mt-4'>Ângela</h2>
                            <p>Licenciatura em Física</p>
                            <p>2018</p>
                        </div>

                        <div className="col-lg-4">
                            <div >
                                <img className="welisom" src="welisom_joca.png" />
                            </div>
                            <h2 className='mt-4 mt-4'>Wellison</h2>
                            <p>Técnico em Informática</p>
                            <p>2018</p>   
                        </div>

                        <div className="col-lg-4">
                            <div >
                                <img className="penha" src="penha_joca.png" />
                            </div>
                            <h2 className='mt-4 mt-4'>Maria da Penha</h2>
                            <p>Coordenadora e Docente de Física</p>
                            <p>2018</p>
                        </div>
                
                        </div>

                        <hr class="featurette-divider"/>

                        <div className="row">
                        
                        <div className="col-lg-4">
                            <div >
                                <img className="ang " src="pat_joca.png" />
                            </div>
                            <h2 className='mt-4 mt-4'>Patrícia</h2>
                            <p>Licenciatura em Física</p>
                            <p>2019</p>
                        </div>

                        <div className="col-lg-4">
                            <div >
                                <img className="welisom" src="edu_joca.png" />
                            </div>
                            <h2 className='mt-4 mt-4'>Eduardo</h2>
                            <p>Licenciatura em Física</p>
                            <p>2019</p>  
                        </div>

                        <div className="col-lg-4">
                            <div >
                                <img className="penha" src="paumer_joca.png" />
                            </div>
                            <h2 className='mt-4 mt-4'>Paumer</h2>
                            <p>Licenciatura em Física</p>
                            <p>2019</p>
                        </div>
                
                        </div>

                        <hr class="featurette-divider"/>

                        <div className="row">

                        <div className="col-lg-4">
                            <div >
                                <img className="ang " src="samu_joca.png" />
                            </div>
                            <h2 className='mt-4 mt-4'>Samuel</h2>
                            <p>Licenciatura em Física</p>
                            <p>2019</p>
                        </div>

                        <div className="col-lg-4">
                            <div >
                                <img className="welisom" src="jeff_joca.png" />
                            </div>
                            <h2 className='mt-4 mt-4'>Jeferson</h2>
                            <p>Técnico em Informática</p>
                            <p>2019</p>    
                        </div>

                        <div className="col-lg-4">
                            <div >
                                <img className="penha" src="ageu_joca.png" />
                            </div>
                            <h2 className='mt-4 mt-4'>Ageu</h2>
                            <p>Técnico em Informática</p>
                            <p>2019</p>
                        </div>

                        </div>

                        <hr class="featurette-divider"/>

                        <div className="row">

                        <div className="col-lg-4">
                            <div >
                                <img className="ang " src="rafa_joca.png" />
                            </div>
                            <h2 className='mt-4 mt-4'>Rafael Henrique</h2>
                            <p>Sistemas de Informação</p>
                            <p>2021</p>
                        </div>

                        <div className="col-lg-4">
                            <div >
                                <img className="welisom" src="joao_joca.png" />
                            </div>
                            <h2 className='mt-4 mt-4'>João Paulo</h2>
                            <p>Sistemas de Informação</p>
                            <p>2021</p>    
                        </div>

                        <div className="col-lg-4">
                            <div >
                                <img className="penha" src="ma_joca.png" />
                            </div>
                            <h2 className='mt-4 mt-4'>Matheus</h2>
                            <p>Licenciatura em Física</p>
                            <p>2018</p>
                        </div>

                        </div>

                        

                    </div>
                </Container>
            </Jumbotron>

                <Jumbotron fluid className="zz">
            <style>{`.zz{
                        padding-top: 80px;
                        padding-bottom: 80px;
                        background-color: #363636;
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
                .featurette-divider {
                    margin: 5rem 0; 
                  }

                }`}</style>
                    <Container>
                    <div background-color='black'>
            <div class="content">
        </div>
            <footer id="myFooter">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-3">
                            <h5>Inicio</h5>
                            <ul>
                                <li><a href='http://localhost:3000'>Inicio</a></li>
                                <li><a href='http://localhost:3000/projetos'>Projetos</a></li>
                                <li><a href='http://localhost:3000/eventos'>Eventos</a></li>
                                <li><a href='http://localhost:3000/equipe'>Membros</a></li>
                                <li><a href='http://localhost:3000/quemsomos'>Quem somos</a></li>
                                
                            </ul>
                        </div>
                        <div class="col-sm-3">
                            <h5>Sobre nós</h5>
                            <ul>
                                <li><a href="">Informações da Robótica</a></li>
                                <li><a href="https://www.instagram.com/idalino.ribeiro/">Feira de Ciências</a></li>
                                <li><a href="https://youtube.com/channel/UCSwOcTeWCmZArzMXBPfYc1A">YouTube</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-3">
                            <h5>Suporte</h5>
                            <ul>
                                <li><a href="https://www.instagram.com/wallbotz/">FAQ</a></li>
                                <li><a href="https://www.instagram.com/wallbotz/">Telefones</a></li>
                                <li><a href="https://www.instagram.com/wallbotz/">Chat</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-3 info">
                            <h5>Informações</h5>
                            <p> Entre em contato em caso de bug. </p>
                        </div>
                    </div>
                </div>
                <div class="second-bar">
                   <div class="container">
                        
                        <div class="social-icons">
                            <a href="https://youtube.com/channel/UCSwOcTeWCmZArzMXBPfYc1A" class="YouTube"><i class="fa fa-facebook"></i></a>
                            <a href="https://www.instagram.com/wallbotz/" class="instagram"><i class="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
            <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
            
                    </div>


                    </Container>
                </Jumbotron>
            


        </div>
    );
}



export default Equipe
