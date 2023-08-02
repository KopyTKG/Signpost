import '../assets/scss/index.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Signpost',
  description: 'Opensource replica of LinkTree',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='darkblue-color bold-text md-text flex float-right'>
          <div className='nav-share' >
            <img src='/share.svg' alt='An SVG for share icon'/>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
