import React from 'react'
import { useSearchParams} from 'react-router-dom';
import Login from '../components/Login';
import CreateAccount from '../components/CreateAccount';
import "../styles/routes/Account.css"

export default function Account() {

  const [searchParams , setSearchParams] = useSearchParams()
  const query = searchParams.get("form")

  
  // render content based on query in URL
  return (
    <div className='text-center form-page'>
        {query === "login" 
            ? <Login /> 
            : query === "create account" 
              ? <CreateAccount /> 
              : <p className='text-danger'> 404 Form Not Found</p>
        }
    </div>
  );
}
