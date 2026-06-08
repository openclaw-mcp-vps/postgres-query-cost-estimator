import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Postgres Query Cost Estimator',
  description: 'Estimate Postgres query costs before running them. Analyze SQL queries using EXPLAIN plans and get detailed execution cost analysis.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="14933376-0494-4e02-8b21-178239a088aa"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
