import { Helmet } from 'react-helmet-async';

import og_fb_profile from '../../img/og_fb_profile.jpg';
import og_tw_profile from '../../img/og_tw_profile.jpg';


const Meta = () => {
  return (
    <Helmet>
      <meta property="og:title" content="Ronald Rivero - Desarrollador de software profesional y profesor de programación" />
      <meta property="og:description" content="¡Hola! Soy Ronald Rivero, un desarrollador de software profesional y apasionado profesor de programación. Mi objetivo es crear soluciones innovadoras y brindar conocimientos a estudiantes en el mundo de la programación." />
      <meta property="og:image" content={og_fb_profile} />
      <meta property="og:url" content="https://ralexrivero.github.io/ProBusinessCard/" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ralexrivero.github.io/ProBusinessCard/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ronald Rivero - Desarrollador de software profesional y profesor de programación" />
      <meta property="og:description" content="¡Hola! Soy Ronald Rivero, un desarrollador de software profesional y apasionado profesor de programación. Mi objetivo es crear soluciones innovadoras y brindar conocimientos a estudiantes en el mundo de la programación." />
      <meta property="og:image" content={og_tw_profile} />
    </Helmet>
  )
}

export default Meta;
