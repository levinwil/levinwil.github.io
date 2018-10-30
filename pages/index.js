// imports
import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import Block from '../components/Block'
import List from '../components/List'
import Img from '../components/Img'

// links
var powerlift = <a style={{color: '#FFBD4F'}} href='http://usapl.liftingdatabase.com/lifters-view?id=17117'>powerlift</a>
var music = <a style={{color: '#FFBD4F'}} href='https://www.youtube.com/channel/UC-ZyuScXM7VD_iEYuJHfINA?view_as=subscriber'>music</a>
var implement = <a style={{color: '#FFBD4F'}} href='http://github.com/levinwil'>implement</a>
var APL = <a style={{color: '#FFBD4F'}} href='http://www.jhuapl.edu/'>JHU Applied Physics Lab</a>
var PSC = <a style={{color: '#FFBD4F'}} href='https://www.progeny.net/'>Progeny Systems Corporation</a>
var facebook = <a style={{color: '#FFBD4F'}} href='https://www.facebook.com/willy.levine'>Facebook</a>
var linkedin = <a style={{color: '#FFBD4F'}} href='https://www.linkedin.com/in/will-levine-63b986123/'>LinkedIn</a>
var email = <a style={{color: '#FFBD4F'}} href='mailto:will.levine0@gmail.com'>Email</a>
var github = <a style={{color: '#FFBD4F'}} href='http://github.com/levinwil'>Github</a>
var resume = <a style={{color: '#FFBD4F'}} href='../static/resume.pdf'>here</a>
var NDD = <a style={{color: '#FFBD4F'}} href='https://neurodata.io/'>Neuro Data Design</a>
var PySight = <a style={{color: '#FFBD4F'}} href='https://devpost.com/software/pysight'>PySight</a>
var UI = <a style={{color: '#FFBD4F'}} href='https://devpost.com/software/u-eye'>U-Eye</a>
var DL = <a style={{color: '#FFBD4F'}} href='https://www.deeplearning.ai//'>deeplearning.ai's</a>




// copy
var intro = 'an aspiring computer vision engineer studying computer science and statistics at Rice University.'
var resume_section = <span>click {resume} to download my resume or read more below.</span>

var about = [
  <span>{powerlift}</span>,
  <span>create and play {music}</span>,
  <span>design and {implement} solutions to computer vision and machine learning problems</span>
]
var work = [
  <Link><span>{APL}, parallelizing large-scale graph algorithms and implementing image classifiers <Link href="/APL"><span className='follow'>more→</span></Link></span></Link>,
  <Link><span>{PSC}, designing object-detection configuration and metric infrastructures <Link href='/PSC'><span className='follow'>more→</span></Link></span></Link>,
]
var research = [
  <Link><span>{NDD}, developing image segmentation pipelines for neuroimages <Link href='/NDD'><span className='follow'>more→</span></Link></span></Link>,
]
var hackathons = [
  <Link><span>{PySight}, a computer-vision-based assistive device for the visually impaired that won third place at HackRice7</span></Link>,
  <Link><span>{UI}, computer-vision-based assistive software for the physically impaired that won most collboration-inciting hack at Bitcamp 2017</span></Link>,
]
var schools = [
  <Link><span>Rice University, pursuing a BS in Computer Science with a 4.15/4.0 GPA <Link href="/rice"><span className='follow'>more→</span></Link></span></Link>,
  <Link><span>Johns Hopkins University, studying Computer Science and Applied Math. I transferred after one year with a 4.0/4.0 GPA <Link href="/JHU"><span className='follow'>more→</span></Link></span></Link>,
  <Link><span>Coursera, completing Stanford's Machine Learning Course and {DL} Deep Learning Specailization</span></Link>

]

// home
export default class extends React.Component {
  render () {
    return (
      <div>

        <Layout />
        <div id='content'>
          <Img src='../static/me.png'/>
          <Block id="1" title="hi, i'm Will">
            <div className='intro mt1'>
              {intro}
            </div>
            <div className='intro mt1'>
              {resume_section}
            </div>
          </Block>
          <Block id="2" title='i like to'>
            <List items={about} />
          </Block>
          <Block id="3" title='i have worked at'>
            <List items={work} />
          </Block>
          <Block id="4" title='i have performed research at'>
            <List items={research} />
          </Block>
          <Block id="5" title='i have studied at'>
            <List items={schools} />
          </Block>
          <Block id="6" title='at hackathons, i have created'>
            <List items={hackathons} />
          </Block>
          <Block id="7" title='connect'>
            <div className='mt1 mb1 links'>
              {email}, {facebook}, {linkedin}, {github}
            </div>
          </Block>
        </div>
      </div>
    )
  }
}
