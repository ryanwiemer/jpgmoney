import React, { useEffect } from 'react'
import { Global } from '@emotion/react'
import { ThemeProvider, styled } from 'theme-ui'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import Script from 'next/script'
import Menu from '../components/Menu'
import Background from '../components/Background'
import theme from '../lib/theme'
import { global } from '../lib/global.js'
import { AnimatePresence } from 'framer-motion'

const App = ({ Component, pageProps, router }) => {
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
    }
  }
  useEffect(() => window.addEventListener('keydown', handleFirstTab), [])

  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo
        titleTemplate="%s — JPG Money"
        defaultTitle="JPG Money 💰"
        description="JPG Money is a virtual gallery of some of the most expensive and sought after NFTs."
        canonical="https://jpgmoney.vercel.app"
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180',
          },
          {
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            name: 'theme-color',
            content: '#f3f3f3',
          },
        ]}
        openGraph={{
          type: 'website',
          url: 'https://jpgmoney.vercel.app',
          site_name: 'JPGs',
          images: [
            {
              url: 'https://jpgmoney.vercel.app/og.jpg',
              width: 1200,
              height: 630,
            },
          ],
        }}
      />
      <Script
        strategy="lazyOnload"
        id="GA1"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />
      <Script id="GA2" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.GOOGLE_ANALYTICS});
        `}
      </Script>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="theme-color" content="#000000"></meta>
      </Head>
      <Global styles={global} />
      <Menu />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Background />
    </ThemeProvider>
  )
}

export default App
