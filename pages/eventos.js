import Menu from '../components/Menu';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Jumbotron, Container} from 'reactstrap';

function Eventos() {
    return (
        <div>
            <Head>
                <title>Eventos - WallBotz</title>
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
                        <h1 className='display-4'>Eventos da Robótica!</h1>

                    </div>
                    
                </Container>
            </Jumbotron >
            

            <Jumbotron fluid className='eventos_'>
            <style>{`.eventos_{
                        padding-top: 80px;
                        padding-bottom: 80px;
                        background-color: #DAA520;
                        color: #fff;
                        margin-bottom: 0rem !important;
                }`}</style>
                <Container>
                    <div className='text-center'>
                        <h3 className='display-4'>Feira de Ciências</h3>
                    </div>
                    <hr class="featurette-divider"/>
                    <div class="row" data-masonry='{"percentPosition": true }'>
                        <div class="col-sm-6 col-lg-4 mb-4">
                        <div class="card">
                            <img src="feira2.jpeg" width="345" height="212" focusable="false"></img>

                            <div class="card-body">
                            <h5 class="card-title">Card title that wraps to a new line</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                        </div>

                        <div class="col-sm-6 col-lg-4 mb-4">
                        <div class="card p-3">
                            <figure class="p-3 mb-0">
                            <img src="feira1.jpg" width="280" height="280" focusable="false"></img>
                            <figcaption class="blockquote-footer mb-0 text-muted">
                                Local: <cite title="Source Title">Feira de ciências E.E.C.I.R</cite>
                            </figcaption>
                            </figure>
                        </div>
                        </div>

                        <div class="col-sm-6 col-lg-4 mb-4">
                        <div class="card">

                            <img src="feira3.jpg" width="" height="200" focusable="false"></img>

                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        </div>

                        <hr class="featurette-divider"/>
                        <div>
                            <p> Organizamos a feira de ciências, na   Escola Estadual  Coronel Idalino Ribeiro ( E.E.C.I. R), em Salinas. Primeiramente fizemos uma apresentação dos aparatos construido no projeto de robótica e levamos sugestões de outros,
                                que poderiam ser desenvolvidos pelos alunos para serem apresentados na   feira de ciências. Após, organizamos, orientamos e acompanhamos os   trabalhos de 30 alunos do ensino médio, durante um mês , com dois encontros semanais presenciais e acompanhamento virtual  através de um grupo whatsapp.  A saber:  construção dos aparatos, preparação e gravação de  vídeos explicativos, e   apresentação  dos trabalhos em um evento presencial. 
                            </p>
                        </div> 
                    </div>
    
                </Container>
            </Jumbotron>
                      
            

            <Jumbotron fluid className='eventos_'>
                
                <style>{`.eventos_{
                        padding-top: 80px;
                        padding-bottom: 80px;
                        background-color: #DAA520;
                        color: #fff;
                        margin-bottom: 0rem !important;
                }`}</style>

                <Container>
                    <div className='text-center'>
                        <h3 className='display-4'>Visita Técnica</h3>
                    </div>
                    <hr class="featurette-divider"/>
                    <div class="row" data-masonry='{"percentPosition": true }'>
                        <div class="col-sm-6 col-lg-4 mb-4">
                        <div class="card">
                            <img src="viagem01.jpg" width="345" height="212" focusable="false"></img>

                            <div class="card-body">
                            <h5 class="card-title">Card title that wraps to a new line</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                        </div>

                        <div class="col-sm-6 col-lg-4 mb-4">
                        <div class="card p-3">
                            <figure class="p-3 mb-0">
                            <img src="viagem02.jpeg" width="280" height="280" focusable="false"></img>
                            <figcaption class="blockquote-footer mb-0 text-muted">
                                Local: <cite title="Source Title">Feira de ciências E.E.C.I.R</cite>
                            </figcaption>
                            </figure>
                        </div>
                        </div>

                        <div class="col-sm-6 col-lg-4 mb-4">
                        <div class="card">

                            <img src="viagem03.jpg" width="" height="220" focusable="false"></img>

                            <div class="card-body">
                            <h5 class="card-title">FFFFFF</h5>
                            <p class="card-text">FFFFFFF</p>
                            <p class="card-text">FFFF<small class="text-muted"></small></p>
                            </div>
                        </div>
                        </div>

                        <hr class="featurette-divider"/>
                        <div>
                            <p> Visando trocar experiência com outras equipes que desenvolvem trabalhos com robótica, foi realizada uma visita ao CEFET de Belo Horizonte "TRINCABOTS". 
                            </p>
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

export default Eventos
