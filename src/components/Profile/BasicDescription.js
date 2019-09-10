import React, { Fragment } from 'react';

const BasicDescription = ({ desc }) => {
  let color = '#000000';
  let relevance = desc.relevance;
  relevance = relevance.toLowerCase();

  if (relevance === 'low') {
    color = '#F33400';
  } else if (relevance === 'medium') {
    color = '#F69900';
  } else if (relevance === 'high') {
    color = `#62BB00`;
  }
  return (
    <Fragment>
      <div className='box box-item'>
        <h4>{desc.title}</h4>
        <span>
          Relevance: <span style={{ color: color }}>{desc.relevance}</span>
        </span>
        <p>{desc.desc}</p>
      </div>
    </Fragment>
  );
};

export default BasicDescription;
