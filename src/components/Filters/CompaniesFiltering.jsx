import React from 'react';
import styles from './Filters.module.css';

function CompaniesFiltering({ companiesFilter, setCompaniesFilter, companiesList }) {
  const handleCompanyFiltersSet = (event) => {
    const newFilterValue = event.target.value;
    if (!companiesFilter.includes(newFilterValue)) {
      setCompaniesFilter([...companiesFilter, newFilterValue]);
    } else {
      const newSelectedCompanies = companiesFilter
        .filter((company) => company !== newFilterValue);
      setCompaniesFilter(newSelectedCompanies);
    }
  };
  const reduceCompanyName = (name) => {
    if (name.length > 19) {
      return `${name.slice(0, 20)}...`;
    }
    return name;
  };
  return (
    <div className={styles.companies}>
      <h3 className={styles.title}>Авиакомпании</h3>
      {Object.entries(companiesList).map(([company, price]) => (
        <label htmlFor={company} className={styles.label}>
          <input
            type="checkbox"
            value={company}
            checked={companiesFilter.includes(company)}
            onChange={handleCompanyFiltersSet}
            id={company}
          />
          { ` - ${reduceCompanyName(company)} от ${price} р.` }
        </label>
      ))}
    </div>
  );
}

export default CompaniesFiltering;
