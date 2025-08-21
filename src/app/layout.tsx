import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A Camponesa - Confeitaria Artesanal',
  description: 'Experimente o sabor de casa na A Camponesa, sua padaria artesanal local. Nós fazemos pães tradicionais, bolos, tortas e doces usando receitas de família consagradas pelo tempo.',
  keywords: ['padaria', 'pão artesanal', 'bolos caseiros', 'doces tradicionais', 'receitas de família', 'padaria do interior', 'pães frescos', 'doces', 'brownies', 'alfajores', 'chocolate quente', 'cookies', 'confeitaria artesanal', 'confeitaria local', 'confeitaria Curitiba', 'padaria Curitiba'],
  authors: [{ name: 'A Camponesa Confeitaria' }],
  openGraph: {
    title: 'A Camponesa - Confeitaria Artesanal',
    description: 'Levando o sabor de casa para a sua mesa com nossos produtos de panificação artesanais.',
    type: 'website',
    locale: 'pt_BR',
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
