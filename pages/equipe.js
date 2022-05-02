import React from 'react';
import Menu from '../components/Menu';
import { UncontrolledCarousel } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Jumbotron, Container} from 'reactstrap';

function Projetos() {
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
                    <h1 className='display-4'>Projetos</h1>

                    </div>
                    
                </Container>
            </Jumbotron>

            <Jumbotron>
            
                <Container>

                    

                    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading"> Carrinho de controle remoto feito de palitos de picolé. <span class="text-muted"></span></h2>
        <p class="lead"></p>
      </div>
      <div class="col-md-5">
      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="equipeRobo.jpg" width="500" height="500" focusable="false"></img>

      </div>
    </div>

    <hr class="featurette-divider"/>

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading"> Braço Robotico <span class="text-muted"></span></h2>
        <p class="lead"></p>
      </div>
      <div class="col-md-5 order-md-1">
      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="equipeRobo.jpg" width="500" height="500" focusable="false"></img>

      </div>
    </div>

    <hr class="featurette-divider"/>

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">Robô Explorador <span class="text-muted"></span></h2>
        <p class="lead"></p>
      </div>
      <div class="col-md-5">
      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="equipeRobo.jpg" width="500" height="500" focusable="false"></img>

      </div>
    </div>

    <hr class="featurette-divider"/>


    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading"> Robô X1 <span class="text-muted"></span></h2>
        <p class="lead"></p>
      </div>
      <div class="col-md-5">
      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="equipeRobo.jpg" width="500" height="500" focusable="false"></img>

      </div>
    </div>

    <hr class="featurette-divider"/>

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading"> Seguidor de Linhas <span class="text-muted"></span></h2>
        <p class="lead"></p>
      </div>
      <div class="col-md-5 order-md-1">
      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="equipeRobo.jpg" width="500" height="500" focusable="false"></img>

      </div>
    </div>

    <hr class="featurette-divider"/>

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">Drone <span class="text-muted"></span></h2>
        <p class="lead"></p>
      </div>
      <div class="col-md-5">
      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="equipeRobo.jpg" width="500" height="500" focusable="false"></img>

      </div>
    </div>



                    

                </Container>
            </Jumbotron>
        </div>
    );
}

export default Projetos

