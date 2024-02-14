import Menu from '../components/Menu';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Jumbotron, Container} from 'reactstrap';

function QuemSomos() {
    return (
        <div>
                <Head>
                <title>Quem Somos - WallBotz</title>
                </Head>
            <Menu />
            <Jumbotron fluid className="sobre">
            <style>{`.sobre{
                        padding-top: 80px;
                        padding-bottom: 80px;
                        background-color: #DAA520;
                        color: #fff;
                        margin-bottom: 0rem !important;
                }`}</style>

                <Container>
                    <div className="text-center">
                        <h1 className='display-4'>Sobre a Robótica</h1>
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

                <Container>
                       
                        <div class="col-md-8">
                        <h3 class="pb-4 mb-4 fst-italic border-bottom">
                            O Começo de Tudo
                        </h3>
                        
                        <article>
                            <p>Os alunos do Instituto Federal do Norte de Minas Gerais, Ângella e Wellison, munidos pela vontade de criar um projeto de extensão voltado para a robótica, buscaram um(a) coordenador(a) para o mesmo, encontrando a Docente Maria da Penha, juntos criaram o projeto.</p>
                            <hr/>
                            <p>Ângella era da Licenciatura em Física, Wellison era do Curso Tecnico em Informática e Maria da Penha, Docente da Area de Física</p>
                            <h2>Objetivo</h2>
                            <p>Com objetivo de instigar os alunos ao estudo de conceitos físicos, os presentes acadêmicos do curso de licenciatura do IFNMG- Campus Salinas, desenvolveram robôs visando propiciar um ambiente estimulante e favorável ao ensino de física. O projeto foi coordenado pela professora de física, Maria da Penha, em 2020.</p>
                            <h3>Aplicação</h3>
                            <p>Visando utilizar ferramentas que aguçam a investigação científica, fomentou o desenvolvimento de robôs para serem utilizados de maneira prática no ensino/aprendizagem de física. Os aparatos são utilizados para demonstrar os conceitos de maneira aplicável, e para isso utilizam-se todas as etapas da montagem dos robôs e também seu funcionamento. No início dos trabalhos, os discentes elaboram projetos, visando utilizá-los para ensinar um tópico de física no ensino médio.</p>
                            
                        </article>

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

export default QuemSomos
