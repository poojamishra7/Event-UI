
import '../components/Breadcrum.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useBreadcrumbs } from '../context/BreadcrumContext';

const Breadcrumbs = () => {
  const { breadcrumbs } = useBreadcrumbs();
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {breadcrumbs.length > 0 && (
          <>
            {breadcrumbs.map((crumb, index) => (
              <li
                key={index}
                className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? 'active' : ''}`}
                aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
              >
                {index === breadcrumbs.length - 1 ? (
                  crumb.label
                ) : (
                  <Link to={crumb.path}>{crumb.label}</Link>
                )}
              </li>
            ))}
          </>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
