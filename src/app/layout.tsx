// src/app/layout.tsx

import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'BSAN | Boiler Substance Awareness Network',
  description: 'Promoting harm reduction and recovery support at Purdue.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
