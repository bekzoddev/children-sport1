import { useContext } from "react";
import { ThemeChanger } from "../../theme/theme";

const First = () => {
  const [data,lang] = useContext(ThemeChanger);
  return (
<div className="aside">
    <h2 className="head">
      {
        (data.find(item => {
          if (item.lang == lang) {
            return item
          }
        })).matn
      }
    </h2>
      <p className="matn">
        {
          (data.find(item => {
            if (item.lang == lang) {
              return item
            }
          })).body
        }
    </p>
    <a className="link" href="#">
       {
         (data.find(item => {
           if (item.lang == lang) {
             return item
           }
         })).watch
       }
    </a>
</div>
  )
}
export default First;