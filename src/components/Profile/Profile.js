import React from 'react';
import './css/profile.css';
import ProfileDetail from './ProfileDetail';
import BasicDescription from './BasicDescription';
import DetailedDescription from './DetailedDescription';
import DetailedListDesc from './DetailedListDesc';

const Profile = () => {
  const basicDescription = [
    {
      title: 'skills',
      relevance: 'low',
      desc:
        'Customizing financial strategies for our clients, we are dedicated to help them properly a locate Customizing financial strategies for our clients, we are dedicated to help them properly a locate Customizing financial strategies.'
    },
    {
      title: 'company',
      relevance: 'medium',
      desc:
        'Customizing financial strategies for our clients, we are dedicated to help them properly a locate Customizing financial strategies for our clients,'
    },
    {
      title: 'industry',
      relevance: 'high',
      desc:
        'Customizing financial strategies for our clients, we are dedicated to help them properly.'
    },
    {
      title: 'education',
      relevance: 'medium',
      desc:
        'Customizing financial strategies for our clients, we are dedicated to help them properly.'
    }
  ];
  const detailedDesc = [
    {
      title: 'Summary',
      desc:
        'Technology Entrepreneur with 13+ experience.Founded Zhopout - a smart app & website to discover local brands and deals with location based notification. As a product owner and CTO of Zhopout figured out the requirements, implemented the same with just the tech. team of 3, got the feedback from the users and re-implemented the important features, managed both on-field and offline marketing and sales team of 5. As one of the frequent learner of technology in the team, for the past four years learned/learning the following ',
      icon: 'faUser'
    },
    {
      title: 'Education',
      desc:
        'Technology Entrepreneur with 13+ experience.Founded Zhopout - a smart app & website to discover local brands and deals with location based notification. As a product owner and CTO of Zhopout figured out the requirements, implemented the same with just the tech. team of 3, got the feedback from the users and re-implemented the important features, managed both on-field and offline marketing and sales team of 5. As one of the frequent learner of technology in the team, for the past four years learned/learning the following ',
      icon: 'faBriefcase'
    }
  ];
  const detailedListDesc = [
    {
      title: 'Skills',
      list: ['financial audits', 'company low', 'cost accounting']
    },
    {
      title: 'Interests',
      list: ['tax advisory', 'corporate finance', 'strategic planing']
    }
  ];
  return (
    <section className='common_section_padding'>
      <div className='row'>
        <div className='col-md-4'>
          <div>
            <ProfileDetail />
            {basicDescription.map((item, index) => (
              <BasicDescription desc={item} key={index} />
            ))}
          </div>
        </div>
        <div className='col-md-8'>
          <div>
            {detailedDesc.map((item,index) => (
              <DetailedDescription desc={item} key={index} />
            ))}
            {detailedListDesc.map(item => (
              <DetailedListDesc desc={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
