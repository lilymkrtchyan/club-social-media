import type { AppProps } from 'next/app';
import '../styles/global.css'
import AuthUserProvider from "../components/AuthUserProvider"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthUserProvider>
      <Component {...pageProps} />
    </AuthUserProvider>
  )
}