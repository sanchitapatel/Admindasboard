import Sidebar from "./componants/sidebar";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/product";
import Order from "./pages/order";
import Customer from "./pages/customer";
import Setting from "./pages/settings";
import Review from "./pages/reviews";
import Anaylitics from "./pages/Anaylitics";
import Top from "./componants/top";
import { BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  let a={
    marginLeft:"10px"
  }
  return(
    <>
    <BrowserRouter>
    <Sidebar/>
      <Top/>
      <Routes>
        <Route path="/" element={<Dashboard style={a}/>}></Route>
        <Route path="/product" element={<Product style={a}/>}></Route>
        <Route path="/order" element={<Order style={a}/>}></Route>
        <Route path="/customer" element={<Customer style={a}/>}></Route>
        <Route path="/anaylitics" element={<Anaylitics style={a}/>}></Route>
        <Route path="/review" element={<Review style={a}/>}></Route>
        <Route path="/setting" element={<Setting style={a}/>}></Route>
      </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
