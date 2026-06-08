import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-playfair',
  display: 'swap'
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Black Swan Luxury Driver | Chofer Privado Premium Madrid',
  description:
    'Servicio de chofer privado premium en Madrid. Traslados aeropuerto, eventos, bodas, corporativo y roadshows. Discreción, puntualidad y vehículos de alta gama. Disponible 24/7.',
  keywords: [
    'chofer privado premium Madrid',
    'chauffeur Madrid',
    'luxury driver Madrid',
    'traslados aeropuerto Madrid VIP',
    'chofer bodas Madrid',
    'servicio chofer corporativo Madrid'
  ],
  openGraph: {
    title: 'Black Swan Luxury Driver | Chofer Privado Premium Madrid',
    description:
      'Chofer privado premium en Madrid. Discreción, puntualidad y vehículos de alta gama. 24/7.',
    locale: 'es_ES',
    type: 'website'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Black Swan Luxury Driver',
  description: 'Chofer privado premium en Madrid. Traslados, eventos, bodas y servicio corporativo.',
  telephone: '+34638736058',
  email: 'otitrader@gmail.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Madrid', addressCountry: 'ES' },
  areaServed: 'Madrid',
  priceRange: '€€€€'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-bg text-ink font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
