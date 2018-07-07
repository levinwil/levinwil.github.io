const List = ({items}) => (
  <ul className='h3 mt1 pl3'>
    {items.map((item, i) =>
      (<li className='hvr-grow' key={i}>{item}</li>)
    )}
  </ul>
)

export default List
