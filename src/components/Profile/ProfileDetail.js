import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const ProfileDetail = () => {
  return (
    <div className='box profile_detail'>
      <span>
        <p>{`WJ`}</p>
      </span>
      <h3>{`Wesley Johnston`}</h3>
      <p>{`Sr. Equity Analyst`}</p>
      <p>{`Klingenstein Fields Wealth Advisors`}</p>
      <p>{`Manufacturing`}</p>
      <div className='row buttons'>
        <div className='col-md-6 text-center'>
          <button className='btn_green'>Shortlist</button>
        </div>
        <div className='col-md-6 text-center'>
          <button className='btn_yellow'>Reject</button>
        </div>
      </div>
      <div className='percentage'>
        <p>98%</p>
      </div>
      <div className='due'>
        <FontAwesomeIcon icon={faClock} className="fa_clock"/>
        <p>Due by 23 January</p>
      </div>
    </div>
  );
};

export default ProfileDetail;
