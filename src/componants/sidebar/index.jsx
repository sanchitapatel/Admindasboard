import { Link } from 'react-router-dom';
import  '../../assets/style/index.css';

function Sidebar() {
    return(
      <>
      <aside id="sidebar">
<ul>
    <li><Link to="/">dashboard</Link></li>
    <li><Link to="/order">order</Link></li>
    <li><Link to="/product">product</Link></li>
    <li><Link to="/customer">customer</Link></li>
    <li><Link to="/anaylitics">Anaylitics</Link></li>
    <li><Link to="/reviwe">Review</Link></li>
    <li><Link to="/setting">setting</Link></li>
</ul>
<Outlet/>
      </aside>
    
      </>
    )
  }
  
  export default Sidebar;
  
