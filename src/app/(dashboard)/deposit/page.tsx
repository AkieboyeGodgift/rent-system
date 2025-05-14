'use client';

import { useState } from 'react';

const DepositPage = () => {
  const [depositAmount, setDepositAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Bank Transfer');
  const [deposits, setDeposits] = useState<any[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepositAmount(e.target.value);
  };

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(depositAmount);

    if (isNaN(amount) || amount <= 0) {
      setError('Please enter a valid deposit amount.');
      return;
    }

    setDeposits((prevDeposits) => [
      ...prevDeposits,
      { amount, paymentMethod, date: new Date().toLocaleString() },
    ]);

    setDepositAmount('');
    setPaymentMethod('Bank Transfer');
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter the deposits based on the search query
  const filteredDeposits = deposits.filter(
    (deposit) =>
      deposit.amount.toString().includes(searchQuery) ||
      deposit.paymentMethod.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Deposit Funds</h1>

      {/* Deposit Form */}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label htmlFor="amount" className="block text-sm font-semibold">Deposit Amount (₦)</label>
          <input
            type="number"
            id="amount"
            value={depositAmount}
            onChange={handleAmountChange}
            className="w-full border p-2 rounded"
            placeholder="Enter amount"
            required
          />
        </div>

        <div>
          <label htmlFor="paymentMethod" className="block text-sm font-semibold">Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            className="w-full border p-2 rounded"
          >
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Cryptocurrency">Cryptocurrency</option>
            <option value="PayPal">PayPal</option>
            <option value="Credit/Debit Card">Credit/Debit Card</option>
          </select>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Deposit
        </button>
      </form>

      {/* Success Message */}
      {submitted && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded shadow">
          ✅ Your deposit has been successfully submitted.
        </div>
      )}

      {/* Search Bar */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="Search transactions..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Deposit History */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Deposit History</h2>
        {filteredDeposits.length === 0 && <p>No deposits match your search.</p>}
        <div className="space-y-4">
          {filteredDeposits.map((deposit, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow bg-white space-y-2"
            >
              <p className="font-semibold text-lg">₦{deposit.amount}</p>
              <p className="text-sm">Payment Method: {deposit.paymentMethod}</p>
              <p className="text-sm text-gray-600">Date: {deposit.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepositPage;
