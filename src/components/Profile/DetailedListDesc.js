import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const DetailedListDesc = ({ desc }) => {
  return (
    <div className='box box-item'>
      <FontAwesomeIcon icon={faUser} className='fa_icon' />
      <h4>{desc.title}</h4>
      <div>
        <ul>
          {desc.list.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailedListDesc;
