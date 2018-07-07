import Link from 'next/link'
import List from './List'

const Work = ({title, work, learned, url, location, date1, date2}) => (
  <div className='work section mt2 mb1 animated fadeInRight'>
    <Link href='/'><span className='block h4 mt1 mb3 hvr-backward'>← go back</span></Link>
    <span className='block h1 bold mt1 mb2 work-black'>{title}</span>
    <span className='block work-date'>{date1} – {date2}</span>
    <span className='block work-location'>{location}</span>
    <a className='work-link' href={`http://${url}`}>{url}</a>
    {work && <span>
      <span className='block h3 header mt3 mb2 work-black'>i worked on</span>
      <span className='block h3 mt0 mb2'>
        <List items={work} />
      </span>
    </span>}
    <span className='divider' />
    {learned && <span>
      <span className='block h3 header mb2 work-black'>i learned to</span>
      <span className='block h3 mt0 mb2'>
        <List items={learned} />
      </span>
    </span>}
  </div>
)

export default Work
