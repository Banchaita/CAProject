import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faHourglassStart } from '@fortawesome/free-solid-svg-icons'

const SupportCard = () => {
  return (
    <>
     <div className="grid-support-container">
     <div className="content">
        <div className="supportcard">
          <div className="icon">
                <FontAwesomeIcon icon={faFolderOpen}  style={{ color:"#05044D"}}/>
          </div>
          <p className="title">Client Confidentiality</p>
          <p className="text">All the information related to any client is considered confidential and is never disclosed to anyone.</p>
        </div>

        <div className="supportcard">
          <div className="icon">
            <FontAwesomeIcon icon={faHeadset}   style={{ color:"#05044D"}}/>
          </div>
          <p className="title">Customer Support</p>
          <p className="text">We keep building good relationships with clients and ensure a great impression. We have a time bound Client Support System</p>
        </div>

        <div className="supportcard">
          <div className="icon">
            <FontAwesomeIcon icon={faHourglassStart} style={{ color:"#05044D"}} />
          </div>
          <p className="title">Time & Cost Effectiveness</p>
          <p className="text">We provide Quality Professional Services at par with Industry Standards. Services shall be given Timely & Cost Effectively.</p>
        </div>
      </div>
     </div>
      
    </>
  );
};

export default SupportCard;
