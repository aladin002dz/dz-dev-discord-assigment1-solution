export default function AddUserForm() {
  function closeModal() {
    document.getElementById("backdrop").style.display = "none";
    document.getElementById("addUserModal").style.display = "none";
    document.getElementById("addUserModal").classList.remove("show");
  }

  return (
    <div id="addUserModal" className="modal fade" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete Confirmation</h5>
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
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
