import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Link } from 'react-router-dom'
import { FormRow, Logo } from '../components'

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' labelText='first name' />
        <FormRow type='text' name='lastName' labelText='last name' />
        <FormRow type='text' name='location' />
        <FormRow type='email' name='email' />
        <FormRow type='password' name='password' />
        <button type='submit' className='btn btn-block'>Submit</button>
        <p>
          Already signed up?
          <Link to='/login' className='link'>Login</Link>
        </p>
      </form>
    </Wrapper>
  )
}













export default Register

// import Logo  from '../components/Logo'
// import FormRow from '../components/FormRow'
// import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
// import { Link } from 'react-router-dom'

// const Register = () => {
//   return (
//     <Wrapper>
//       <form className='form'>
//         <Logo />
//         <h4>Register</h4>
//         <FormRow type='text' name='name' />
//         <FormRow type='text' name='lastName' labelText='last name' />
//         <FormRow type='text' name='location' />
//         <FormRow type='email' name='email' />

//         <FormRow type='password' name='password' />
//         <button type='submit' className='btn btn-block'>
//           Submit
//         </button>
//         <p>
//           Already a member?
//           <Link to='/login' className='member-btn'>
//             Login
//           </Link>
//         </p>
//       </form>
//     </Wrapper>
//   )
// }
// export default Register
