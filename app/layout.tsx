import '@/app/ui/global.css';
import '@/app/ui/styles/main.scss'

import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* This is how we load fonts to our project. Antialiased is a tailwind class that smooths out the fonts.*/}
          <body className={`${inter.className}  antialiased bg-slate-50`}>
                {children}
            </body>
    </html>
  );
} 
