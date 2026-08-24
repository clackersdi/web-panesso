export default function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'PANESSO MERCADO S.A.S.',
    legalName: 'PANESSO MERCADO S.A.S.',
    description:
      'Asesoría legal integral especializada en derecho corporativo, familia, laboral y comercial en Bogotá D.C.',
    url: 'https://panessomercado.com',
    telephone: '+57(1)3133900829',
    email: 'notificaciones@panessomercado.com',
    image: 'https://panessomercado.com/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle 95 No. 15-33, Oficina 204',
      addressLocality: 'Bogotá D.C.',
      addressCountry: 'CO',
      postalCode: '110111',
    },
    areaServed: 'CO',
    priceRange: '$$',
    founder: [
      {
        '@type': 'Person',
        name: 'Hernán Antonio Panesso Mercado',
        jobTitle: 'Socio',
      },
      {
        '@type': 'Person',
        name: 'María Esther Panesso Mercado',
        jobTitle: 'Socia',
      },
    ],
    knowsAbout: [
      'Derecho de la Competencia',
      'Privacidad y Protección de Datos',
      'Derecho del Consumo',
      'Derecho Administrativo Sancionatorio',
      'Telecomunicaciones y Regulación Económica',
      'Metrología Legal y Reglamentos Técnicos',
      'Derecho de Familia',
      'Derecho Corporativo y Societario',
      'Derecho Contractual y Comercial',
      'Litigios y Solución de Controversias',
      'Derecho Laboral',
      'Compliance y Gobierno Corporativo',
      'Derecho Inmobiliario',
      'Planeación Patrimonial y Sucesoral',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
