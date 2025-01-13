import Contact from '@/components/internal/contact-us/contact-us';
import BlogApp from '@/pages/Csae';
import HomePage from '@/pages/HomePage';
import JammeBlogs from '@/pages/JammeBlogs';
import PrivacyPage from '@/pages/privacy';
import SurveyForm from '@/pages/SurveyForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const RoutesIndex = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/surveyform" element={<SurveyForm />} />
        <Route path="/blogs" element={<JammeBlogs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/csae" element={<BlogApp />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesIndex;
