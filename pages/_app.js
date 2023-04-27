import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { GunProvider } from '../context/gunContext'
import { CoinMarketProvider } from '../context/context'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://6cf9e53f-ef46-4949-a908-45aced79e8c7.usemoralis.com:2053/server'
      appId='iJKDmL9RuPQkJqizO3Z20WaBVIgza8Nban4ZugXIzAhBHG4pmT65hIKLblVeURif'
    >
      <GunProvider>
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>
    </MoralisProvider>
  )
}

export default MyApp
