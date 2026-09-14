import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'NuX — Your club, connected.', description: 'Manage members, send beautiful newsletters, and bring your student community together. Built for Haverford and the Tri-Co.', icons: {icon:'/favicon.svg'} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html> }
