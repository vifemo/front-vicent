import { Link,  useLocation } from "react-router-dom"
import "../../styles/breadcrumbs.css";


function Breadcrumbs() {
    const location = useLocation();
    const paths = location.pathname.split("/").filter((path) => path);


  return (
    <nav className="breadcrumb">
        <ul className="breadcrumb-mid" >
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
          </li>
          {paths.map((path, index) => {
            const routeTo = `/${paths.slice(0, index + 1).join("/")}`;
            return (
                <li key={index} className="breadcrumb-item">
                 {index === paths.length - 1 ? path : <Link to={routeTo}>{path}</Link>}
             </li>
          );
        })}
       
        </ul>
    </nav>
  )
}

export default Breadcrumbs
