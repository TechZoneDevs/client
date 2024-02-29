import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import { Red_Hat_Display } from 'next/font/google';

export const montserrat = Montserrat({ subsets: ['latin'], weight : '500'});
export const RedHatDisplay = Red_Hat_Display({ subsets: ['latin'], weight : '700'});
export const inter = Inter({subsets: ['latin'],  });