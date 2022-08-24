import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  //depending on the card selected, return either home, about, blog
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      
      {/* // TODO: Add a comment describing what we are passing as props */}
      { /* passing in the current card selected, and changing it to the selected card */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      { /* Renders the correct card based off selection */}
      {renderPage()}
    </div>
  );
}
