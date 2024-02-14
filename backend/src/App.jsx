import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./Components/Pages/Login"
import Register from "./Components/Pages/Register"
import Navbar from "./Components/Pages/Navbar"
import Home from "./Components/Pages/Home"
import BookEvents from "./Components/Pages/BookEvents"
import ViewEvents from "./Components/Pages/Academy"
import RegistrationForm from "./Components/Pages/RegistrationForm"
// import Confirm from "./Components/Pages/Confirm"
// import Confirm1 from "./Components/Pages/Confirm1"
// import Confirm2 from "./Components/Pages/Confirm2"
// import EventBox2 from "./Components/Pages/EventBox2"
// import EventBox1 from "./Components/Pages/EventBox1"
import Offers from "./Components/Pages/Offers"
import Addacademy from "./Components/Pages/Addacademy"
// import Addapplicant from "./Components/Pages/Addapplicant"
import Updateapplicant from "./Components/Pages/Updateapplicant"
import Course from "./Components/Pages/Course"
import Editcourse from "./Components/Pages/Editcourse"
import Backnavbar from "./Components/Pages/Backnavbar"
import Backhome from "./Components/Pages/Backhome"
import Adminlogin from "./Components/Pages/Adminlogin"
import Adminregister from "./Components/Pages/Adminregister"
import Info from "./Components/Pages/Info"
import Book from "./Components/Pages/Book"
import Booked from "./Components/Pages/Booked"



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Info/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/BookEvents" element={<BookEvents/>}></Route>
      <Route path="/ViewEvents" element={<ViewEvents/>}></Route>
      <Route path="/RegistrationForm" element={<RegistrationForm/>}></Route>
      
      {/* <Route path="/EventBox1" element={<EventBox1/>}></Route>
      <Route path="/EventBox2" element={<EventBox2/>}></Route> */}
      {/* <Route path="/Confirm" element={<Confirm/>}></Route>
      <Route path="/Confirm1" element={<Confirm1/>}></Route>
      <Route path="/Confirm2" element={<Confirm2/>}></Route> */}
      <Route path="/Back to home" element={<Backhome/>}></Route>
      <Route path="/Book" element={<Book/>}></Route>
      <Route path="/Booked" element={<Booked/>}></Route>
       <Route path="/AddAcademy" element={<Addacademy/>}></Route>
      
      <Route path="/Updateapplicant" element={<Updateapplicant/>}></Route>
      <Route path="/Course" element={<Course/>}></Route>
      <Route path="/Editcourse" element={<Editcourse/>}></Route>
      <Route path="/Backhome" element={<Backhome/>}></Route> 
      
      
       <Route path="/Adminlogin" element={<Adminlogin/>}></Route>
       <Route path="/Adminregister" element={<Adminregister/>}></Route>
      
      
      
      

    </Routes>
    </BrowserRouter>
    // <div>
    //   <Login/>
    // </div>
  )
}

export default App