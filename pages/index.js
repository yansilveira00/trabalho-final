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

                }`}</style>


                <Container className='text-center'>
                    <div>
                        {console.log(data)}
                        <h1 className='display-4'>{data.response.titulo}</h1>
                        <p className='lead'>{data.response.subtitulo}</p>
                    </div>

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

                        

                        <div  className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">A WallBotz é um projeto de robótica do IFNMG-Campus Salinas. <span class="text-muted">Criado com o objetivo de transformar o processo de aprendizagem utilizando mecanismos tecnológicos como ferramenta educacional.</span></h2>
                            <p className="lead">Atualmente temos estudantes de Licenciatura em Física e Sistemas de Informação.</p>
                        </div>
                        <div className="col-md-5">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="equipeRobo.jpg" width="500" height="500" focusable="false"></img>
                        </div>
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
