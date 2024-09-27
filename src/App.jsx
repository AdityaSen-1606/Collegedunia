import React, { useState, useEffect } from 'react';
import CollegeList from './components/CollegeList';
import SearchBar from './components/SearchBar';
import collegesData from './data/colleges.json';
import './App.css';


function App() {
  const [colleges, setColleges] = useState(collegesData.slice(0, 10)); // Load first 10 colleges initially
  const [searchTerm, setSearchTerm] = useState('');

  // Infinite Scroll handling
  const loadMoreColleges = () => {
    setColleges(prevColleges => [
      ...prevColleges,
      ...collegesData.slice(prevColleges.length, prevColleges.length + 10),
    ]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term === '') {
      setColleges(collegesData.slice(0, 10));
    } else {
      const filtered = collegesData.filter(college =>
        college.name.toLowerCase().includes(term.toLowerCase())
      );
      setColleges(filtered);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      loadMoreColleges();
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [colleges]);

  return (
    <div>
      <header className="header">
        <h1>Collegedunia</h1>
      </header>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div><h2>List of Colleges</h2></div>
        <SearchBar onSearch={handleSearch} />
      </div>
      <CollegeList colleges={colleges} />
    </div>
  );
}

export default App;
