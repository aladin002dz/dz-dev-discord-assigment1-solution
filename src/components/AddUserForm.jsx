export default function AddUserForm() {
  function closeModal() {
    document.getElementById("backdrop").style.display = "none";
    document.getElementById("addUserModal").style.display = "none";
    document.getElementById("addUserModal").classList.remove("show");
  }

  return (
    <div id="addUserModal" className="modal fade" tabIndex="-2">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" class="btn btn-light" onClick={closeModal}>
              <i className="fa-solid fa-arrow-left-long"></i>
            </button>

            <h5 className="modal-title">Add User</h5>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputName1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName1"
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputCity1">City</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputCity1"
                  placeholder="Enter city"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-dark"
              data-bs-dismiss="modal"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
