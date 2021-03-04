import {ExperienceBar} from '../components/ExperienceBar/ExperienceBar'
import {Profile} from '../components/Profile/Profile'
import { CompletedChallanges } from '../components/CompletedChallanges/CompletedChallanges'
import {Countdown} from '../components/Countdown/Countdown'
import { ChallangeBox } from '../components/ChallangeBox/ChallangeBox'
import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallangeProvider } from '../contexts/ChallangesContext'

import Switch from 'react-switch'
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

  const [theme, setTheme] = useState(dark)

  const handleTheme = () => {
    setTheme(theme === light ? dark : light)
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
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
          <div className="switch">
          <Switch
            checked={theme.title === 'dark'}
            onChange={handleTheme}
            onColor={theme.color.text}
            onHandleColor={theme.color.blue}
            handleDiameter={22}
            offColor={theme.color.text}
            offHandleColor={theme.color.blue}
            width={50}
            height={20}
          />
          </div>
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
