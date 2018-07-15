import Work from '../components/Work'
import Layout from '../components/Layout'

var bic = <a style={{'color': '#caa669'}} href='https://github.com/levinwil/User-Friendly-Image-Classifier'>user-friendly binary image classifier</a>

var aplWork = [
  <span>improving a spoof image detector F1 score from 95% to 99%. I did so by using a custom VGG-based feature extractor network, image augmentation, 10-fold cross-validation, and transfer learning with an SVM</span>,
  <span>designing a {bic} </span>,
  <span>parallelizing and distributing a previously sequential network detetion algorithm on graphs of more than 2 million vertices. I achieved linear speedup with respect to number of processors using Scala and Spark</span>,
  <span>presenting the results of my code to a group of more than 30 executives, leading to the incorporation of it into the government code-based</span>
]
var aplLearned = [
  <span>use Keras</span>,
  <span>perform cross-validation and transfer learning</span>,
  <span>apply parallelism, distribution, and functionalism to algorithms</span>,
  <span>write machine learning code in a comprehensible way with appropriate documentation</span>,
  <span>explain high-level machine learning concepts to those who have not been extensively exposed to the field</span>
]

export default () => (
  <div>
    <Layout />
    <div id='content'>
      <Work
        title='JHU Applied Physics Lab'
        url='jhuapl.edu'
        date1='May 2017'
        date2='August 2017'
        location='Laurel, MD'
        work={aplWork}
        learned={aplLearned}
      />
    </div>
  </div>
)
