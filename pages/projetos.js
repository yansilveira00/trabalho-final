import React from 'react';
import Menu from '../components/Menu';
import { UncontrolledCarousel } from 'reactstrap';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Jumbotron, Container} from 'reactstrap';

function Projetos() {
    return (
        <div>
            <Head>
                <title>Projetos - WallBotz</title>
            </Head>
            <Menu />

            <Jumbotron fluid className='sobre'>
            <style>{`.sobre{
                        padding-top: 80px;
                        padding-bottom: 80px;
                        background-color: #DAA520;
                        color: #fff;
                        margin-bottom: 0rem !important;
                }`}</style>
                <Container >
                    <div className='text-center'>
                    <h1 className='display-4'>Projetos</h1>

                    </div>
                    
                </Container>
            </Jumbotron>

            <Jumbotron fluid className='sobre'>
            
                <Container>
                    <div class="row featurette">
                      <div class="col-md-7">
                        <h2 class="featurette-heading"> Carrinho de controle remoto feito de palitos de picolé. <span class="text-muted"></span></h2>
                        <p class="lead"></p>
                      </div>
                      <div class="col-md-5">
                      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="carrinho.jpeg" width="500" height="500" focusable="false"></img>

                      </div>
                    </div>

                    <hr class="featurette-divider"/>

                    <div class="row featurette">
                      <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading"> Braço Robotico <span class="text-muted"></span></h2>
                        <p class="lead"></p>
                      </div>
                      <div class="col-md-5 order-md-1">
                      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="robotico.jpg" width="500" height="500" focusable="false"></img>

                      </div>
                    </div>

                    <hr class="featurette-divider"/>

                    <div class="row featurette">
                      <div class="col-md-7">
                        <h2 class="featurette-heading">Robô Explorador <span class="text-muted"></span></h2>
                        <p class="lead"></p>
                      </div>
                      <div class="col-md-5">
                      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="esplorador.jpg" width="500" height="500" focusable="false"></img>

                      </div>
                    </div>

                    <hr class="featurette-divider"/>


                    <div class="row featurette">
                      <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading"> Robô X1 <span class="text-muted"></span></h2>
                        <p class="lead"></p>
                      </div>
                      <div class="col-md-5">
                      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="x1.jpeg" width="500" height="500" focusable="false"></img>

                      </div>
                    </div>

                    <hr class="featurette-divider"/>

                    <div class="row featurette">
                      <div class="col-md-7 ">
                        <h2 class="featurette-heading"> Seguidor de Linhas <span class="text-muted"></span></h2>
                        <p class="lead"></p>
                      </div>
                      <div class="col-md-5 order-md-1">
                      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="seguidor.jpg" width="500" height="500" focusable="false"></img>

                      </div>
                    </div>

                    <hr class="featurette-divider"/>

                    <div class="row featurette">
                      <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading">Drone <span class="text-muted"></span></h2>
                        <p class="lead"></p>
                      </div>
                      <div class="col-md-5">
                      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="drone1.jpeg" width="500" height="500" focusable="false"></img>

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

export default Projetos
