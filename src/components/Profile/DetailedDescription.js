import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const DetailedDescription = ({desc}) => {
    return (
      <div className='box box-item'>
      <FontAwesomeIcon icon={faUser} className="fa_icon"/>
        <h4>{desc.title}</h4>
        <p>
          {desc.desc}
        </p>
      </div>
    );
}

export default DetailedDescription
