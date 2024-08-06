"use client";
import { useState } from 'react';
const Page = () => {
    const [activeTab, setActiveTab] = useState('Previous Appointments');

    const renderTabContent = () => {
      switch (activeTab) {
        case 'Previous Appointments':
          return <div>Content for Previous Appointments</div>;
        case 'Upcoming Appointments':
          return <div>Content for Upcoming Appointments</div>;
        case 'Videos':
          return <div>Content for Videos</div>;
        case 'Attachments':
          return <div>Content for Attachments</div>;
        default:
          return null;
      }
    };
  return (
    <>
      <h1 className="font-antic text-[#283C63] text-[30px] leading-[1.2em] mb-[25px] lg:text-[40px] lg:mb-[50px]">
        wellness portal<span>sdfsdfs</span>
      </h1>
      <div>
      <div className="tabs">
        {['Previous Appointments', 'Upcoming Appointments', 'Videos', 'Attachments'].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div> 
    </>
  );
};
export default Page;
