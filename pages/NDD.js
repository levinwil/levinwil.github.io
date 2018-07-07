import Work from '../components/Work'
import Layout from '../components/Layout'

var pipeline = <a style={{'color': '#caa669'}} href='https://github.com/NeuroDataDesign/pan-synapse-f16s17'>pipeline</a>

var nddWork = [
  <span>developing an analytical computer vision {pipeline} to segment synapses in Array Tomography NeuroImages that was presented at NIPS 2017</span>,
  <span>presenting my code weekly, explaining my design decisions, and showing its performance on real and synthesized data</span>,
]
var nddLearned = [
  <span>use OpenCV and Scipy</span>,
  <span>develop algorithms to handle large-scale datasets</span>,
  <span>justify my design decisions to researchers</span>
]

export default () => (
  <div>
    <Layout />
    <div id='content'>
      <Work
        title='Neuro Data Design'
        url='neurodata.io'
        date1='December 2016'
        date2='May 2018'
        location='Baltimore, MD'
        work={nddWork}
        learned={nddLearned}
      />
    </div>
  </div>
)
