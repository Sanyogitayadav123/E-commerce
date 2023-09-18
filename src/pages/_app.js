import '@/styles/globals.css'
import {SessionProvider} from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layoutes from '../../Components/layoutes';

export default function App({ Component, pageProps,session }) {
  return(
<Layoutes>
<SessionProvider  session={session}>
        <ToastContainer />
        <Component {...pageProps} />
    </SessionProvider>
</Layoutes>
  )

  }

