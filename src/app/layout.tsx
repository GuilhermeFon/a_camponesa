import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A Camponesa - Confeitaria Artesanal',
  description: 'Experience the taste of home at A Camponesa, your local artisanal bakery. We craft traditional breads, cakes, pies, and pastries using time-honored family recipes.',
  keywords: 'bakery, artisanal bread, homemade cakes, traditional pastries, family recipes, countryside bakery, fresh baked goods',
  authors: [{ name: 'A Camponesa Bakery' }],
  openGraph: {
    title: 'A Camponesa - Artisanal Bakery',
    description: 'Bringing the taste of home to your table with our handcrafted baked goods',
    type: 'website',
    locale: 'en_US',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
