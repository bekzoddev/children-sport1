import { createContext, useState } from "react";
import { data } from "../components/data/data";
const ThemeChanger = createContext();

const ThemeProvider = (({children}) => {
  const [lang,setLang] =  useState("uz")
 return (
   <ThemeChanger.Provider  value = {[data,lang, setLang]} >
     {children}
   </ThemeChanger.Provider>
 )
})
export {
  ThemeChanger,
  ThemeProvider
}