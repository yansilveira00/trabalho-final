import Menu from '../components/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Jumbotron, Container} from 'reactstrap';

function QuemSomos() {
    return (
        <div>
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
            
        </div>
    );
}

export default QuemSomos
