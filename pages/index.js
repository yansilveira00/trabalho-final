import Menu from '../components/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

import { Jumbotron, Container } from 'reactstrap';

function Home() {
    return (
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

                }`}</style>

                <Container className='text-center'>
                    <div>
                        <h1 className='display-4'>Já ouviu falar em robótica no IF?</h1>
                        <p className='lead'>A robótica é um projeto de extenção do IF Salinas, que foi fundado em 2018.</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-4">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                            <h2>Heading</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                        <div class="col-lg-4">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                            <h2>Heading</h2>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                        <div class="col-lg-4">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                            <h2>Heading</h2>
                            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                        </div>
                    

                </Container>

               
            </Jumbotron>



        </div>
    );
}

export default Home;
