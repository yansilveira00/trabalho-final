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
                    <div  className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">texto <span class="text-muted">texto</span></h2>
                            <p className="lead">texto</p>
                        </div>
                        <div className="col-md-5">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="equipeRobo.jpg" width="500" height="500" focusable="false"></img>
                        </div>
                    </div>

                    <hr class="featurette-divider"/>

                    <div  className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">texto <span class="text-muted">texto</span></h2>
                            <p className="lead">texto</p>
                        </div>
                        <div className="col-md-5">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="equipeRobo.jpg" width="500" height="500" focusable="false"></img>
                        </div>
                    </div>


                </Container>
            </Jumbotron>
            
        </div>
    );
}

export default QuemSomos
