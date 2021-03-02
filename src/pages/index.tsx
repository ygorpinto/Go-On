import {ExperienceBar} from '../components/ExperienceBar'
import {Profile} from '../components/Profile'
import { CompletedChallanges } from '../components/CompletedChallanges'
import {Countdown} from '../components/Countdown'
import { ChallangeBox } from '../components/ChallangeBox'
import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallangeProvider } from '../contexts/ChallangesContext'

import GlobalStyles from '../styles/global'
import styles from '../styles/pages/Home.module.css'

import {GetServerSideProps} from 'next'
import Head from 'next/head'
import { ToogleDarkMode } from '../components/ToogleDarkMode'


interface HomeProps {
  level:number,
  currentExp:number,
  challangesCompleted:number,
}

export default function Home(props:HomeProps) {
  return (
    <>
    <GlobalStyles/>
    <ChallangeProvider
      level={props.level}
      currentExp = {props.currentExp}
      challangesCompleted = {props.challangesCompleted}
    >
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
        </ChallangeProvider>
    </>
  )
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {

  const { level, currentExp, challangesCompleted } = ctx.req.cookies;

  return {
    props:{
      level:Number(level),
      currentExp:Number(currentExp),
      challangesCompleted:Number(challangesCompleted)
    }
  }
}
