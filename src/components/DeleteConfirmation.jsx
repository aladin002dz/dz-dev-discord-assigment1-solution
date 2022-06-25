import React from "react";

export default function DeleteConfirmation({ runDelete, currUserId }) {
  function closeModal() {
    document.getElementById("backdrop").style.display = "none";
    document.getElementById("deleteModal").style.display = "none";
    document.getElementById("deleteModal").classList.remove("show");
  }

  function deleteConfirmed() {
    console.log("clicking delete button");
    document.getElementById("backdrop").style.display = "none";
    document.getElementById("deleteModal").style.display = "none";
    document.getElementById("deleteModal").classList.remove("show");
    runDelete(currUserId);
  }

  return (
    <div id="deleteModal" className="modal fade" tabIndex="-1">
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
            <button
              type="button"
              className="btn btn-danger"
              onClick={deleteConfirmed}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
