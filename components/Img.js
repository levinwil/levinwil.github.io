const Img = ({src}) => (
  <div>
    <img className='hvr-grow mb1 animated fadeInDown' src={src} />
    <style jsx>{`
      div {
        min-width: 400px !important;
        text-align: left;
      }
      img {
        max-width: 40%;
      }
    `}</style>
  </div>
)

export default Img
