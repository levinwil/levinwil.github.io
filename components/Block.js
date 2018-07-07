const Block = (props) => (
  <div className='section mt2 mb1 hvr-grow animated fadeInLeft'>
    <span className='left h6'>{ props.id }</span>
    <span className='h2 bold mt1 mb1'>{ props.title }</span>
    <span className='block h3 mt0 mb0'>{ props.children }</span>
  </div>
)

export default Block
