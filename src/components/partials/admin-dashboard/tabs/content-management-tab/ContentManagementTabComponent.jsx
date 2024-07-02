import React, { useState } from 'react';
import EditAboutUsModal from "./modals/EditAboutUsModal";
import EditAddressModal from "./modals/EditAddressModal";
import EditContactNumberModal from "./modals/EditContactNumberModal";

const ContentManagementTabComponent = () => {
  const [showAboutUsModal, setShowAboutUsModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showContactNumberModal, setShowContactNumberModal] = useState(false);

  return (
    <div class="tab-pane fade" id="content" role="tabpanel" aria-labelledby="content-tab">
      <div className="container py-3">
        <h2>Content Management</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">About Us</h5>
                <p className="card-text">
                  Yukimito Pet Boarding & Hotel Service, is a pet-friendly and professional service for the 
                  Ilonggo’s who are traveling outside of their homes and won’t be able to care of their furry loved ones.</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button className="btn btn-outline-secondary" onClick={() => setShowAboutUsModal(true)}>Edit About Us</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Address</h5>
                <p className="card-text">Q. Abeto St, Mandurriao, Iloilo City, 5000 Iloilo</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button className="btn btn-outline-secondary" onClick={() => setShowAddressModal(true)}>Edit Address</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Contact Number</h5>
                <p className="card-text">0915 571 2695</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button className="btn btn-outline-secondary" onClick={() => setShowContactNumberModal(true)}>Edit Contact Number</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modals */}
        {showAboutUsModal && <EditAboutUsModal onClose={() => setShowAboutUsModal(false)} />}
        {showAddressModal && <EditAddressModal onClose={() => setShowAddressModal(false)} />}
        {showContactNumberModal && <EditContactNumberModal onClose={() => setShowContactNumberModal(false)} />}
      </div>
    </div>
  );
};

export default ContentManagementTabComponent;
