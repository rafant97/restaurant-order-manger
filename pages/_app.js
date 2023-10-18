import '../styles/globals.css'
import '../styles/toastify.css'
import {QuioscoProvider} from '../context/QuioscoProvider'

function MyApp({ Component, pageProps }) {
  return (
    <QuioscoProvider>
      <Component {...pageProps} />
    </QuioscoProvider>
  )
}

export default MyApp
