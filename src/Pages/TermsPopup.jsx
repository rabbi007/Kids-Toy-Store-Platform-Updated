import React from "react";
import useDocumentTitle from "../Hook/useDocumentTitle";

const TermsPopup = () => {
  useDocumentTitle ('Terms - ToyPark');
  return (
    <>
      {/* Button to open modal */}
      <button
        className="link link-warning cursor-pointer"
        onClick={() => document.getElementById("terms_modal").showModal()}
      >
        Terms Details
      </button>

      {/* Modal */}
      <dialog id="terms_modal" className="modal">
        <div className="modal-box max-w-2xl">
          <h3 className="font-bold text-lg mb-3">Terms & Conditions</h3>

          <div className="space-y-3 text-sm text-gray-700 max-h-[60vh] overflow-y-auto pr-2">
            <p>
              Welcome to our website! By registering an account, you agree to
              comply with our terms and conditions described below.
            </p>

            <p>
              <strong>1. Account Responsibility:</strong> You are responsible
              for maintaining the confidentiality of your login credentials and
              all activities under your account.
            </p>

            <p>
              <strong>2. Usage Policy:</strong> You agree not to use our
              services for unlawful, harmful, or fraudulent activities.
            </p>

            <p>
              <strong>3. Privacy:</strong> We value your privacy. Personal data
              will be handled according to our Privacy Policy.
            </p>

            <p>
              <strong>4. Ownership:</strong> All trademarks, logos, and
              materials belong to their respective owners.
            </p>

            <p>
              <strong>5. Termination:</strong> We reserve the right to suspend
              or terminate accounts that violate our terms.
            </p>

            <p>
              <strong>6. Modifications:</strong> We may update these terms at
              any time. Continued use means acceptance of the new terms.
            </p>

            <p>
              By registering, you confirm that you’ve read, understood, and
              agreed to these terms and conditions.
            </p>
          </div>

          {/* Close Button without form */}
          <div className="modal-action">
            <button
              className="btn bg-blue-500 hover:bg-blue-600 text-white animate-pulse"
              onClick={() => document.getElementById("terms_modal").close()}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default TermsPopup;
