import Menu from '../components/Menu';
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

import { Jumbotron, Container } from 'reactstrap';

const Home = (data) => (
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
                .featurette-divider {
                    margin: 5rem 0; 
                  }

                }`}</style>


                <Container className='text-center'>
                    <div>
                        {console.log(data)}
                        <h1 className='display-4'>{data.response.titulo}</h1>
                        <p className='lead'>{data.response.subtitulo}</p>
                    </div>

                    <hr class="featurette-divider"/>

                    <div className="row">
                        <div className="col-lg-4">
                            <div >
                                <img className="ang " src="ang_joca.png" />
                            </div>
                            
                            <h2 className='mt-4 mt-4'>{data.response.servUmTitulo}</h2>
                            <p>{data.response.servUmDescricao}</p>
                            
                        </div>
                        <div className="col-lg-4">
                            <div >
                                <img className="welisom" src="welisom_joca.png" />
                            </div>

                            <h2 className='mt-4 mt-4'>{data.response.servDoisTitulo}</h2>
                            <p>{data.response.servDoisDescricao}</p>
                            
                        </div>
                        <div className="col-lg-4">
                            <div >
                                <img className="penha" src="penha_joca.png" />

                            </div>

                            <h2 className='mt-4 mt-4'>{data.response.servTresTitulo}</h2>
                            <p>{data.response.servTresDescricao}</p>
                    
                        </div>
                        

                        </div>

                        <hr class="featurette-divider"/>

                        <div  className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">{data.response.servQuatroTitulo} <span class="text-muted">{data.response.servQuatroSubtitulo}</span></h2>
                            <p className="lead">{data.response.servQuatroDescricao}</p>
                        </div>
                        <div className="col-md-5">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="equipeRobo.jpg" width="500" height="500" focusable="false"></img>
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

    Home.getInitialProps = async () => {
       var response = await axios.get('http://localhost:8010/home');

       console.log(response.data);

       return {response: response.data}
    }

export default Home;
