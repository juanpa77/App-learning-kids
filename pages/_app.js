import { LevelProvider } from '../context/LevelContext'

function MyApp ({ Component, pageProps }) {
  return (
  <>
    <LevelProvider>
      <Component {...pageProps} />
    </LevelProvider>
  </>
  )
}

export default MyApp
