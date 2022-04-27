import React from 'react';
import Menu from '../components/Menu';
import { UncontrolledCarousel } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function Projetos() {
    return (
        <div>
            <Menu />
            <UncontrolledCarousel
  items={[
    {
      altText: 'Projeto 2018',
      caption: 'Alpha',
      key: 1,
      src: 'https://picsum.photos/id/123/1200/600'
    },
    {
      altText: 'Projeto 2019',
      caption: 'Seguidor de Linha',
      key: 2,
      src: 'https://picsum.photos/id/456/1200/600'
    },
    {
      altText: 'Projeto 2020',
      caption: 'Coruja',
      key: 3,
      src: 'https://picsum.photos/id/678/1200/600'
    },
    {
        altText: 'Projeto 2020',
        caption: 'Robô Explorador',
        key: 4,
        src: 'https://picsum.photos/id/678/1200/600'
      },
      {
        altText: 'Projeto 2020',
        caption: 'Garra',
        key: 5,
        src: 'https://picsum.photos/id/678/1200/600'
      }
  ]}
 />

        </div>
    );
}

export default Projetos
