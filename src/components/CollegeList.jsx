import React, { useState } from 'react';
import CollegeRow from './CollegeRow';

const CollegeList = ({ colleges }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // Function to sort the college data
  const sortedColleges = [...colleges].sort((a, b) => {
    if (sortConfig.key) {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];

      // Handling nested sorting for placement (average_package)
      if (sortConfig.key === 'placement') {
        aValue = parseInt(a.placement.average_package.replace(/[^0-9]/g, '')); // Remove 'INR' and commas
        bValue = parseInt(b.placement.average_package.replace(/[^0-9]/g, ''));
      }

      // Sorting based on key and direction
      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    }
    return 0;
  });

  // Function to set the sorting config
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr>
          <th>CD Rank</th>
          <th>College</th>
          <th>Exam Fee</th>
          <th>Placement <button onClick={() => handleSort('placement')}>&#9650;&#9660;</button></th>
          <th>User Reviews <button onClick={() => handleSort('reviews')}>&#9650;&#9660;</button></th>
          <th>Rating <button onClick={() => handleSort('rating')}>&#9650;&#9660;</button></th>
        </tr>
      </thead>
      <tbody>
        {sortedColleges.map((college, index) => (
          <CollegeRow key={index} college={college} />
        ))}
      </tbody>
    </table>
  );
};

export default CollegeList;
