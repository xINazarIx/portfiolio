import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../header';
import MainPage from './pages/main-page';
import SkillsPage from './pages/skills-page';
import ProjectsPage from './pages/projects-page';
import ResumePage from './pages/resume-page';

import './app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
