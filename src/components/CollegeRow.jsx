import React from 'react';

const CollegeRow = ({ college }) => {
  const rowClass = college.featured ? 'college-featured-row' : '';

  return (
    <tr className={rowClass}>
      <td>{college.rank}</td>
      <td>
        {college.featured && (
          <span className="featured-tag">Featured<br/></span>
        )}
        {college.name}
        {/* Buttons under the college name */}
        <div className="college-actions">
          <button className="apply-btn">Apply Now</button>
          <button className="brochure-btn">Download Brochure</button>
        </div>
      </td>
      <td>{college.exam_fee}</td>
      <td>{college.placement.average_package}<br />Highest: {college.placement.highest_package}</td>
      <td>{college.reviews}</td>
      <td>{college.rating}</td>
    </tr>
  );
};

export default CollegeRow;
