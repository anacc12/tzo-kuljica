export const metadata = { title: 'TZO Kukljica CMS' }

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr">
      <body>{children}</body>
    </html>
  )
}
