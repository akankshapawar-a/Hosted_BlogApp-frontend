import React, {useState , useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router , Routes , Route , useLocation, Navigate } from 'react-router-dom'
import Signup from './components/Signup/Signup'
import Home from './components/Home/Home'
import CreateBlog from './components/Create/CreateBlog/CreateBlog'
import BlogPage from './components/Create/BlogPage/BlogPage'
import UpdateBlog from './components/Create/UpdateBlog/UpdateBlog'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import SignIn from './components/SignIn/SignIn'
import BlogCategory from './components/Create/BlogCategory/BlogCategory'
import Home1 from './Admin/Home1';
import About1 from './Admin/About1';
import Analytics from './Admin/Analytics';
import { ThemeProvider} from './components/Context/theme'
function MainContent() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
   

  const isAdmin = localStorage.getItem("isAdmin");


return (
    <div>

       {location.pathname !== '/Signup' && location.pathname !== '/' && (
        <Navbar isLoggedIn={isLoggedIn} />

      )}

      <Routes>
        <Route
          path="/"
          element={<SignIn onLogin={() => setIsLoggedIn(true)} />}
        />
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/" />}
        />
         <Route path="/about" element={<About />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path='/CreateBlog' element={<CreateBlog/>}/>
        <Route path='/categories/:id' element={<BlogPage/>}/>
        <Route path='/update/:id' element={<UpdateBlog/>}/>
        <Route path='/:category' element={<BlogCategory/>}/>


        {isAdmin === 'true' && (
        <>
        <Route path='/admin/home' element={<Home1 />} />
        <Route path='/admin/about' element={<About1 />} />
        <Route path='/admin/analytics' element={<Analytics />} />
        </>

        )}
      </Routes>
     
    </div>
   

  );
}

function App() {
  const [themeMode , setThemeMode]=useState('light')

  const darkTheme=()=>{
    setThemeMode('dark')
  }
  
  const lightTheme=()=>{
    setThemeMode('light')
  }
  useEffect(()=>{
  document.querySelector('html')?.classList.remove('dark',"light")
  document.querySelector('html')?.classList.add(themeMode)
  },[themeMode]);

  
  return (
    <ThemeProvider value={{themeMode ,darkTheme,lightTheme}}>
      <Router>
        <MainContent />
      </Router>
      </ThemeProvider>
  );
}

export default App;

