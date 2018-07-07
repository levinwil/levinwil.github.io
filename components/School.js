import Link from 'next/link'
import List from './List'

const School = ({title, received, studied, url, location, date1, date2}) => (
  <div className='work section mt2 mb1 animated fadeInRight'>
    <Link href='/'><span className='block h4 mt1 mb3 hvr-backward'>← go back</span></Link>
    <span className='block h1 bold mt1 mb2 work-black'>{title}</span>
    <span className='block work-date'>{date1} – {date2}</span>
    <span className='block work-location'>{location}</span>
    <a className='work-link' href={`http://${url}`}>{url}</a>
    {received && <span>
      <span className='block h3 header mt3 mb2 work-black'>i received</span>
      <span className='block h3 mt0 mb2'>
        <List items={received} />
      </span>
    </span>}
    <span className='divider' />
    {studied && <span>
      <span className='block h3 header mb2 work-black'>i studied</span>
      <span className='block h3 mt0 mb2'>
        <List items={studied} />
      </span>
    </span>}
  </div>
)

export default School
