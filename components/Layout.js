import Head from 'next/head'
import React from 'react'
import { initGA, logPageView } from './Analytics'


export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render () {
    return (
      <div>
        <Head>
          <title>Will LeVine</title>
          <meta name='description' content='learning, laughing, and pushing pixels' />
          <meta name='keywords' content='will levine, object-detection, machine learning, keras, tensorflow, engineer, student' />
          <meta name='author' content='Will LeVine' />
          <meta name='robots' content='index, follow' />
          <meta name='viewport' content='width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no' />
          <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
          <link href='https://fonts.googleapis.com/css?family=Overpass+Mono:300,600' rel='stylesheet' />
          <link href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' rel='stylesheet' />
          <link href='https://unpkg.com/basscss@8.0.2/css/basscss.min.css' rel='stylesheet' />
          <link href='https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.1.1/css/hover-min.css' rel='stylesheet' />
        </Head>
        <style global jsx>{`
          * {
            font-family: 'Overpass Mono';
            letter-spacing: -0.5px;
          }

          html, body {
            padding: 0px;
            margin: 0px;
            background: #202020	;
            color: white;
            width: 100% !important;
            height: 100% !important;
            -webkit-box-sizing: border-box !important;
            -moz-box-sizing: border-box !important;
            box-sizing: border-box !important;
            overflow-x: hidden !important;
          }

          span >  {
            font-weight: 300 !important;
          }

          a, u {
            text-decoration: none;
            border-bottom: 0.5px solid;
            color: #1E9CD4;
            font-weight: bold;
          }

          ul {
            margin-bottom: 0px;
            padding-left: 0px !important;
          }


          li {
            font-size: 0.8em;
            box-shadow: 0px 0px 5px #172635 !important;
            width: auto;
            padding: 10px 15px 10px 15px !important;
            clear:left;
            float:left;
            margin-bottom: 5px;
            background: #3D0B0C;
            border-radius: 1%;
          }

          li:not(:last-child) {
            margin-bottom: 10px;
          }

          .divider {
            margin: 1.5em;
          }

          .intro {
            font-size: 0.8em;
          }

          .header {
            font-weight: 600;
            text-transform: uppercase;
          }

          .header:last-child {
            padding-top: 2em !important;
          }

          .work {
            background: #fff;
            padding: 2em;
            margin: -2em;
          }

          .links {
            font-size: 0.8em;
            line-height: 40px;
          }

          .follow {
            font-weight: bold;
            color: white;
          }

          .work-date {
            font-weight: 300;
            font-size: 1em;
            color: #9D9D9D;
          }

          .work-location {
            font-weight: 300;
            font-size: 1em;
            color: #397367;
          }

          .work-link {
            font-weight: 300;
            font-size: 1em;
            color: #4A90E2;
          }

          .left {
            margin-top: 1em;
            margin-left: -3em;
            color: #9D9D9D;
          }

          .bullet {
            margin-left: -1.4em;
            font-size: 0.7em;
          }

          .hvr-forward {
            display: block !important;
          }

          .hvr-backward {
            color: black;
          }

          .work-black {
            color: black;
          }

          #content {
            padding: 2em 0em 1em 1em;
            max-width: 25em;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: left;
          }

          @media screen and (max-width: 560px) {
            #content {
              max-width: 18em !important;
            }
          }
        `}</style>
      </div>
    )
  }
}
