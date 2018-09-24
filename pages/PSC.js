import Work from '../components/Work'
import Layout from '../components/Layout'

var anchor = <a style={{'color': '#caa669'}} href='https://medium.com/@vivek.yadav/part-1-generating-anchor-boxes-for-yolo-like-network-for-vehicle-detection-using-kitti-dataset-b2fe033e5807'>kmeans-based anchor initialization</a>
var distill = <a style={{'color': '#B82D3E'}} href='https://papers.nips.cc/paper/6676-learning-efficient-object-detection-models-with-knowledge-distillation.pdf'>knowledge distillation</a>

var pscWork = [
  <span>implementing an object detection metric infrastructure with end-to-end testing</span>,
  <span>improving object detector mAP from .5 to .67 while speeding up inference from 5.6 to 8.9 FPS by designing a novel loss function & implementing {anchor}</span>,
  <span>developing training platform for hot-swapping & configuring object detection meta-architectures based on composite, deep learning networks</span>,
]
var pscLearned = [
  <span>use Tensorflow</span>,
  <span>use YOLO, FRCNN, SSD, and RetinaNet for object deteciton </span>,
  <span>perform machine learning trials for testing the efficacy of new configurations</span>,
  <span>apply {distill} to object detectors</span>,
  <span>implement machine learning architectures from academic papers</span>
]

export default () => (
  <div>
    <Layout />
    <div id='content'>
      <Work
        title='Progeny Systems Corporation'
        url='progeny.net'
        date1='May 2018'
        date2='August 2018'
        location='Manassas, VA'
        work={pscWork}
        learned={pscLearned}
      />
    </div>
  </div>
)
