import React, { useState } from "react";
import { FaMoneyBill } from "react-icons/fa";

function RequestWithdrawal() {
  const [showModal, setShowModal] = useState(false);
  const [showFinalConfirm, setShowFinalConfirm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [amount, setAmount] = useState("");

  const handleInitialConfirm = () => {
    setShowModal(false);
    setShowFinalConfirm(true);
  };

  const handleFinalConfirm = () => {
    setShowFinalConfirm(false);
    console.log("Withdrawal requested for amount:", amount);

    // Show success modal
    setShowSuccessModal(true);

    // Auto-close after 3 seconds
    setTimeout(() => {
      setShowSuccessModal(false);
      setAmount(""); // Optionally reset amount
    }, 1000);
  };

  return (
    <div className="relative">
      <button
        className="bg-white p-2 flex items-center justify-center gap-2 shadow rounded-md cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <FaMoneyBill className="text-xl text-blue-500" />
        Request Withdrawal
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">Request Withdrawal</h2>
            <input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
            />
            <p className="mb-5 mt-5">Are you sure you want to request a withdrawal?</p>
            <div className="flex justify-end space-x-3">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleInitialConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {showFinalConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">Confirm Withdrawal</h2>
            <p className="mb-5">
              You are about to request a withdrawal of <strong>${amount}</strong>. Are you absolutely sure?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setShowFinalConfirm(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                onClick={handleFinalConfirm}
              >
                Yes, Withdraw
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Success!</h2>
            <p className="mb-5">
              Your withdrawal request for <strong>${amount}</strong> has been submitted successfully.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestWithdrawal;