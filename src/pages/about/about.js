import { useContext} from "react";
import { ThemeChanger } from "../../theme/theme";
const About = ()=> {
  const [data,lang] =  useContext(ThemeChanger)
  return (
    <div className="about" >
      <h2 >
        {
          (data.find(item => {
            if (item.lang === lang) {
              return item
            }
          }).about)
        }
      </h2>
    {
      (data.find(item => {
        if (item.lang === lang) {
          return item
        }
      }).text)
    }
    </div>
  )
}
export default About;