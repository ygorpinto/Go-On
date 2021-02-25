import {ExperienceBar} from '../components/ExperienceBar'
import {Profile} from '../components/Profile'
import { CompletedChallanges } from '../components/CompletedChallanges'
import {Countdown} from '../components/Countdown'
import { ChallangeBox } from '../components/ChallangeBox'
import { CountdownProvider } from '../contexts/CountdownContext'

import GlobalStyles from '../styles/global'
import styles from '../styles/pages/Home.module.css'

import Head from 'next/head'

export default function Home() {
  return (
    <>
    <GlobalStyles/>
    <Head>
      <title>Go On</title>
    </Head>
        <div className={styles.container}>
          <ExperienceBar />
          <CountdownProvider>
        <section>
          <div>
            <Profile/>
            <CompletedChallanges/>
            <Countdown/>
          </div>
          <div>
            <ChallangeBox />
          </div>
        </section>
        </CountdownProvider>
        </div>
    </>
  )
}
