import Menu from '../components/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Jumbotron, Container} from 'reactstrap';

function Eventos() {
    return (
        <div>
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

                            <img src="viagem03.jpeg" width="" height="200" focusable="false"></img>

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


            
        </div>
    );
}

export default Eventos
