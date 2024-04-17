import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [login, setLogin] = useState({username : "" , password : ""})
  const userRef = useRef()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  function handleChange(e){
    const {value , name} = e.target
    setLogin(prev => ({
      ...prev , 
      [name] : value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    
    // no DB yet to validate users
    //validateFormData(login)
  }

  function validateFormData(formData){
    /* 
      validate user logic
    */
    
  }

  return( 
  <>
    <section className='form-container'>
      <h2>Login Page</h2>
      <form action="" onSubmit={handleSubmit}>
      <label htmlFor="username">Username : </label>
      <input 
        ref={userRef}
        type="text" 
        id="username"
        name="username" 
        value={login.username} 
        onChange={handleChange} 
        placeholder='jamey627' 
      />
      <label htmlFor="password">Password : </label>
      <input 
        type="password"
        id="password" 
        name="password" 
        value={login.password} 
        onChange={handleChange} 
        placeholder='********' 
      />
      <button className='btn btn-primary submit-btn disabled'> Submit </button>
    </form>
    <p style={{color : "red"}}>This feature will be available in the future</p>
    <p className='notice'>Don't have an account ? <Link to="?form=create account">Create account</Link></p>
    </section>
    
  </>
  )
}
