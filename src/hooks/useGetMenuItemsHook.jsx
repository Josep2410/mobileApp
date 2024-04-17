import {useEffect , useState , useRef} from 'react'
import {db} from '../utils/firebase.js'
import { onValue, ref  } from "firebase/database"

 // Get MenuItems data from Firebase DB. More notes at bottom
 // returns an array of objects, where each object is a menu item. 
export default function useGetMenuItems() {

  const [menuItems , setMenuItems ] = useState([])
  const firstRender = useRef(false)

  useEffect(() => {
    if(!firstRender) firstRender.current = true

    else{

      const menuItemsInDb = ref(db , "menuItems")

      return onValue(menuItemsInDb , function(snapshot){
        if(snapshot.exists()){
          let items = Object.values(snapshot.val())
          items = items.map(item => ({...item , quantity : 0}))
          setMenuItems(items)
        }
 
      })
    }
    
  }, [])

  return menuItems

}

/* 
  Code for this component provided by : 
    https://medium.com/innovance-company-blog/how-to-connect-firebase-realtime-database-to-a-react-app-f7dcb983150a
  
  Comment by Author -
    "P.S: The reason we use onValue method in useEffect’s cleanup section is that this method is an unsubscribe method, which means after the job is done connection will be closed, and in this way, we prevent memory leaks on our app."

  I , author of this MobileApp , added lines 10 and 22 
    line 10 - useRef to handle double mount on startup
    line 22 - add key , value pair to each menu item when data is retrieved
*/