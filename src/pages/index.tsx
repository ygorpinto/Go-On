import {ExperienceBar} from '../components/ExperienceBar/ExperienceBar'
import {Profile} from '../components/Profile/Profile'
import { CompletedChallanges } from '../components/CompletedChallanges/CompletedChallanges'
import {Countdown} from '../components/Countdown/Countdown'
import { ChallangeBox } from '../components/ChallangeBox/ChallangeBox'
import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallangeProvider } from '../contexts/ChallangesContext'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

import GlobalStyles from '../styles/global'

import {GetServerSideProps} from 'next'
import Head from 'next/head'

import {ThemeProvider} from 'styled-components'
import { useState } from 'react'
import { HomeStyles } from '../styles/pages/Homestyles'



interface HomeProps {
  level:number,
  currentExp:number,
  challangesCompleted:number,
}

export default function Home(props:HomeProps) {

  const [theme, setTheme] = useState(light)

  return (
    <>
    <GlobalStyles/>
    <ThemeProvider theme={theme}>
    <ChallangeProvider
      level={props.level}
      currentExp = {props.currentExp}
      challangesCompleted = {props.challangesCompleted}
    >
    <Head>
      <title>Go On</title>
    </Head>
      <HomeStyles>
        <div className="container">
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
        </HomeStyles>
        </ChallangeProvider>
        </ThemeProvider>
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
