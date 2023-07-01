import '@/styles/_globals.scss';
import { Roboto } from 'next/font/google';
import Layout from '@/components/Layout';
import Side from '@/components/Side';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});

export const metadata = {
  title: 'cinemaze',
  description:
    'Cinemaze - Your Gateway to Cinematic Bliss. Discover the latest movies, reviews, trailers, and more. Immerse yourself in a world of captivating storytelling and unforgettable cinematic experiences.',
  icons: {
    icon: 'icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Layout>
          <Side />
          {children}
        </Layout>
      </body>
    </html>
  );
}
