import { useState, React, useEffect } from "react";
import ManageAdminModal from "./modals/ManageAdminModal";
import AddAdminAccountModal from "./modals/AddAdminAccountModal";
import axios from "axios";

const AdminControlsTabComponent = () => {
  const token = localStorage.getItem("token");

  const [ adminAccounts, setAdminAccounts ] = useState([]);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(formData)
  };

  const handleAddAdmin = async() => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_PUBLIC_API_SERVER}/api/auth/signup/admin`, formData,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });

      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  

  useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_PUBLIC_API_SERVER}/api/admin/getAllAdmin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      setAdminAccounts(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [token])

  console.log(adminAccounts);

  return (
    <div
      class="tab-pane fade"
      id="controls"
      role="tabpanel"
      aria-labelledby="controls-tab"
    >
      <div class="container py-3">
        <div class="card border">
          <div class="card-header">
            <div >
              <div class="col align-middle">
                <div class="input-group mb-3">
                  <div class="d-flex justify-content-end">
                    <button class="btn btn-primary yuki-color button-border-color mx-2" data-toggle="modal" data-target="#AddAdminAccountModal">
                      Add Admin Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            {adminAccounts.map((account) => {
              return (
                <div>
                  <div class="card shadow mt-3">
                    <div class="card-body p-3">
                      <div class="card-body d-flex">
                        <i class="bi bi-person"></i> 
                        <div>
                          <h5 class="card-title">Admin Username: {account.username}</h5>
                          <p class="card-text text-secondary">Role: {account.role}</p>
                        </div>
                      </div>
                      <div class="d-flex justify-content-end">
                        <button
                          class="btn btn-outline-secondary mx-2"
                          data-toggle="modal"
                          data-target={"#adminControlModalTitle" + account.id}
                        >
                          Manage Account
                        </button>
                      </div>
                    </div>
                  </div>
                  <ManageAdminModal adminId={account.id}/>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <AddAdminAccountModal handleChange={handleChange} handleAddAdmin={handleAddAdmin}/>
      {/* admin control modal */}
   
    </div>
  );
};

export default AdminControlsTabComponent;
