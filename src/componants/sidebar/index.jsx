import { Link } from 'react-router-dom';
import  '../../assets/style/index.css';

function Sidebar() {
    return(
      <>
      <aside id="sidebar">
<ul>
    <li><Link to="/">Dashboard</Link></li>
    <li><Link to="/order">Order</Link></li>
    <li><Link to="/product">Product</Link></li>
    <li><Link to="/customer">Customer</Link></li>
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
  