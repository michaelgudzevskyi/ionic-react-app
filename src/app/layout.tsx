import './globals.css';

export const metadata = {
  title: 'Next.js App with Ionic',
  description: 'Using Ionic components with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
