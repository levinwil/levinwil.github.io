import School from '../components/School'
import Layout from '../components/Layout'

var pipeline = <a style={{'color': '#FFBD4F'}} href='https://github.com/NeuroDataDesign/pan-synapse-f16s17'>pipeline</a>

var riceReceived = [
  <span>4.15 Grade Point Average on a 4.0 Scale</span>,
  <span>Trustee Distinguished Scholarship & President's Honor Roll (All Semesters)</span>,
]

var riceStudied = [
  <span>Graduate: Statistical Machine Learning, Deep Learning</span>,
  <span>Undergraduate: Advanced OOP, Reasoning About Algorithms, Program Design, Parallel Programming, Computer Engineering Fundamentals, Introduction to Statistics</span>,
  <span>Teaching Assistance: Program Design, Introduction to Statistics</span>,
]

export default () => (
  <div>
    <Layout />
    <div id='content'>
      <School
        title='Rice University'
        url='https://www.rice.edu/'
        date1='August 2017'
        date2='Present (Expected Graduation: May 2020)'
        location='Houston, TX'
        received={riceReceived}
        studied={riceStudied}
      />
    </div>
  </div>
)
