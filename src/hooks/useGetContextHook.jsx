import {useContext} from "react";
import { Context } from "../context/MyContext";

/*  Grab values from context & deconstruct necessary values. 
    Saves a few lines of code instead of declaring useContext and importing context within each component
*/
export default function useGetContextHook(){
  return useContext(Context)
}