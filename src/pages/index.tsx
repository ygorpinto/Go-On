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
import { useSession, signIn, signOut } from 'next-auth/client'
import { ScreenLogStyles } from '../styles/ScreenLogStyles'


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
  const [ session, loading ] = useSession();

    if(session) {
      return <>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
      <ScreenLogStyles>
        <div className="signOut">
        <button onClick={() => signOut()}>
          <img src="/logout.svg"/>
        </button>
        </div>
        <>
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
            onColor={theme.color.blueDark}
            onHandleColor={theme.color.blue}
            handleDiameter={22}
            offColor={theme.color.text}
            offHandleColor={theme.color.blue}
            width={30}
            height={10}
          />
          </div>
          <ExperienceBar />
          <CountdownProvider>
        <section>
          <div>
            <Profile userName={session.user.name} userImg={session.user.image}/>
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
    </>
        </ScreenLogStyles>
        </ThemeProvider>
      </>
    }
    return <>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <ScreenLogStyles>
    <div className="signInContainer">
    <div className="signIn">
      <h1>Comece agora a usar a aplicação.</h1>
      <p>Entre com sua conta Github</p>
      <button onClick={() => signIn()}>Sign in <img src="/github.svg"/></button>
    </div>
    </div>
    </ScreenLogStyles>
    </ThemeProvider>
    </>
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
