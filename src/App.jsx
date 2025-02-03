import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/Article";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import EditArticle from "./pages/EditArticle";
import FAQ from "./pages/FAQ";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme as toggle } from "./store/authSlice";
import Footer from "./components/Footer";
import ForgotPassword from './components/ForgotPassword';
import Dashboard from "./pages/Dashboard";
import AddarticlePage from "./pages/AddarticlePage";
import Error404 from "./pages/Error404";
import ScrollToTop from "./components/ScrollToTop";
import PublicProfile from "./pages/PublicProfile";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DraftsPage from './pages/DraftsPage';


function App() {
  const theme = useSelector((state) => state.auth.theme);
  const loggedInUser = useSelector((state) => state.auth.user); // Get the logged-in user's data
  const loggedInUserId = loggedInUser ? loggedInUser._id : null; // Extract user ID if logged in
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    dispatch(toggle());
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/article-list" element={<ArticleList />} />
          <Route
            path="/article/:name"
            element={<Article loggedInUserId={loggedInUserId} />}
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route
            path="/edit-article/:id"
            element={<EditArticle loggedInUserId={loggedInUserId} />}
          />
          <Route path="/forgot-password" element={<ForgotPassword theme={theme} />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/addarticle" element={<AddarticlePage/>} />
          <Route path="/profile/:userId" element={<PublicProfile />} />
          <Route path="/drafts" element={<DraftsPage />} />
        </Routes>
        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
