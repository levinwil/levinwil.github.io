import School from '../components/School'
import Layout from '../components/Layout'

var pipeline = <a style={{'color': '#caa669'}} href='https://github.com/NeuroDataDesign/pan-synapse-f16s17'>pipeline</a>

var jhuReceived = [
  <span>4.0 Grade Point Average on a 4.0 Scale</span>,
  <span>Bloomberg Scholarship & Dean's List (All Semesters)</span>,
]

var jhuStudied = [
  <span>Graduate: Neuro Data Design</span>,
  <span>Undergraduate: Data Structures, Intro Java, Probability, Linear Algebra, Calc III</span>,
]

export default () => (
  <div>
    <Layout />
    <div id='content'>
      <School
        title='Johns Hopkins University'
        url='https://www.jhu.edu/'
        date1='August 2016'
        date2='May 2017'
        location='Baltimore, MD'
        received={jhuReceived}
        studied={jhuStudied}
      />
    </div>
  </div>
)
