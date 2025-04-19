import React from 'react';
import { Helmet } from 'react-helmet-async';

import og_fb_profile from '../../img/og_fb_profile.jpg';
import og_tw_profile from '../../img/og_tw_profile.jpg';

const Meta = () => {
  const siteUrl = 'https://ralex.works/ProBusinessCard/';
  const title = 'Ronald Rivero – Full Stack & Machine Learning Developer';
  const description = '¡Hola! Soy Ronald Rivero, desarrollador Full Stack y apasionado profesor de programación. Creo soluciones innovadoras y comparto mi conocimiento con estudiantes.';
  const image = og_fb_profile;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ronald Rivero",
    "url": siteUrl,
    "sameAs": [
      "https://www.linkedin.com/in/ronald-rivero/",
      "https://twitter.com/ralex_uy",
      "https://github.com/ralexrivero",
      "https://medium.com/@ralexrivero"
    ],
    "jobTitle": "Full Stack & Machine Learning Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance / Educador"
    },
    "image": image,
    "description": description
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph */}
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content="Ralex Works" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@ralex_uy" />
      <meta name="twitter:site" content="@ralex_uy" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={og_tw_profile} />

      {/* WhatsApp y otras apps usan OG */}

      {/* JSON‑LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default Meta;
