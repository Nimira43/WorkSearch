import { useRouteError } from 'react-router'
import { Link } from 'react-router-dom'
import img from '../assets/images/page-not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  const error = useRouteError()
  console.log(error)
  
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt='404 - Page Not Found'/>
          <h3>Page Not Found</h3>
          <p>We cannot find the page that you were looking for.</p>          
          <Link to='/dashboard'>Back Home</Link>     
        </div>
    </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3>Something has gone wrong</h3>
      </div>   
    </Wrapper>
  )
}

export default Error


// import { Link, useRouteError } from 'react-router-dom'
// import img from '../assets/images/not-found.svg'
// import Wrapper from '../assets/wrappers/ErrorPage'

// const Error = () => {
//   const error = useRouteError()
//   if (error.status === 404) {
//     return (
//       <Wrapper>
//         <div>
//           <img src={img} alt='not found' />
//           <h3>Page Not Found.</h3>
//           <p>We cannot find the page that you are looking for</p>
//           <Link to='/dashboard'>Return Home</Link>
//         </div>
//       </Wrapper>
//     )
//   }
//   return (
//     <Wrapper>
//       <div>
//         <h3>Something Went Wrong</h3>
//       </div>
//     </Wrapper>
//   )
// }

// export default Error
