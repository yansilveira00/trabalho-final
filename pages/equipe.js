import Menu from '../components/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Jumbotron, Container} from 'reactstrap';

function Equipe() {
    return (
        <div>
            <Menu />
            
            <Jumbotron>
            <style>{`.sobre{
                        padding-top: 80px;
                        padding-bottom: 80px;
                        background-color: #DAA520;
                        color: #fff;
                        margin-bottom: 0rem !important;
                }`}</style>
                <Container>

                    <div className='text-center'>
                        <h1 className='display-4'>Equipe da Robótica!</h1>
                    </div>
                   
                </Container>
            </Jumbotron>

            <Jumbotron>
                <Container>
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
                                <img className="ang " src="ang_joca.png" />
                            </div>
                            <h2 className='mt-4 mt-4'>Patrícia</h2>
                            <p>Licenciatura em Física</p>
                            <p>2019</p>
                        </div>

                        <div className="col-lg-4">
                            <div >
                                <img className="welisom" src="welisom_joca.png" />
                            </div>
                            <h2 className='mt-4 mt-4'>Eduardo</h2>
                            <p>Licenciatura em Física</p>
                            <p>2019</p>  
                        </div>

                        <div className="col-lg-4">
                            <div >
                                <img className="penha" src="penha_joca.png" />
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
                                <img className="ang " src="ang_joca.png" />
                            </div>
                            <h2 className='mt-4 mt-4'>Samuel</h2>
                            <p>Licenciatura em Física</p>
                            <p>2019</p>
                        </div>

                        <div className="col-lg-4">
                            <div >
                                <img className="welisom" src="welisom_joca.png" />
                            </div>
                            <h2 className='mt-4 mt-4'>Jeferson</h2>
                            <p>Técnico em Informática</p>
                            <p>2019</p>    
                        </div>

                        <div className="col-lg-4">
                            <div >
                                <img className="penha" src="penha_joca.png" />
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
                                <img className="ang " src="ang_joca.png" />
                            </div>
                            <h2 className='mt-4 mt-4'>Rafael Henrique</h2>
                            <p>Sistemas de Informação</p>
                            <p>2021</p>
                        </div>

                        <div className="col-lg-4">
                            <div >
                                <img className="welisom" src="welisom_joca.png" />
                            </div>
                            <h2 className='mt-4 mt-4'>João Paulo</h2>
                            <p>Sistemas de Informação</p>
                            <p>2021</p>    
                        </div>

                        <div className="col-lg-4">
                            <div >
                                <img className="penha" src="penha_joca.png" />
                            </div>
                            <h2 className='mt-4 mt-4'>Matheus</h2>
                            <p>Licenciatura em Física</p>
                            <p>2018</p>
                        </div>

                        </div>

                        

                    </div>
                </Container>
            </Jumbotron>



        </div>
    );
}



export default Equipe
