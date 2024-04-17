import React , {useState , useEffect , useRef} from 'react'
import { Link } from 'react-router-dom'

export default function CreateAccount() {
  const [createAcc , setCreateAcc] = useState({"username" : "" , "password" : "" , "matchPWD" : ""})
  const createUserRef = useRef()

  useEffect(() => {
    createUserRef.current.focus()
  }, [])

  function handleSubmit(e){
    e.preventDefault()
    /* 
      logic when form submitted
    */
  }

  function handleChange(e){
    const {value , name} = e.target
    setCreateAcc(prev => ({
      ...prev , 
      [name] : value
    }))
  }

  return (
   <>
   <section className='form-container'>
      <h2>Create Account Page</h2>
      
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input 
          ref={createUserRef}
          id='username'
          name='username'
          type="text" 
          placeholder='artemis458'
          value={createAcc.username}
          onChange={handleChange}
        />
        <label htmlFor="pwd">Password : </label>
        <input 
          id='pwd'
          name='password'
          type="password" 
          placeholder='*******'
          value={createAcc.password}
          onChange={handleChange}
        />
        <label htmlFor="matchPWD">Match Password : </label>
        <input 
          id='matchPWD'
          name='matchPWD'
          type="password" 
          placeholder='*******'
          value={createAcc.matchPWD}
          onChange={handleChange}
        />
        <button className='btn btn-primary submit-btn disabled'> Submit </button>
      </form>
      <p style={{color : "red"}}>This feature will be available in the future</p>
      <p className='notice'>Already have an account ? <Link to="?form=login">Login</Link></p>
    </section>
   </>
  )
}
