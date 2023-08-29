import './globals.css'
import './customResponsive.css'
import Head from 'next/head';
export const metadata = {
  title: 'oloid',
  description: 'oloid app build with powerful technologies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="../Assets/fonts/AvenirLTStd-Roman.otf"
          rel="stylesheet"
        />
      </Head>
      <body>{children}</body>
    </html>
  )
}
