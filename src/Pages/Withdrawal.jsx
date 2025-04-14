import RequestWithdrawal from "../Components/RequestWithdrawal";

const withdrawalData = [
  { id: 1, date: '2025-04-10', amount: '$200', method: 'Bank Transfer', status: 'Completed' },
  { id: 2, date: '2025-04-08', amount: '$150', method: 'Bank transfer', status: 'Pending' },
  { id: 3, date: '2025-04-05', amount: '$300', method: 'Bank transfer', status: 'Failed' },
  { id: 4, date: '2025-04-01', amount: '$100', method: 'Bank Transfer', status: 'Completed' },
  { id: 5, date: '2025-04-01', amount: '$500', method: 'Bank Transfer', status: 'Processing' },
  { id: 6, date: '2025-04-01', amount: '$700', method: 'Bank Transfer', status: 'Completed' },
  { id: 7, date: '2025-04-01', amount: '$900', method: 'Bank Transfer', status: 'Completed' },
];

const statusColors = {
  Completed: 'text-green-600',
  Pending: 'text-yellow-600',
  Failed: 'text-red-600',
  Processing: 'text-blue-600',
};

const Withdrawal = () => {
  return (
    <section className="p-4">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold md:text-2xl">Withdrawal History</h1>
          <RequestWithdrawal />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b text-left">Date</th>
                <th className="py-2 px-4 border-b text-left">Amount</th>
                <th className="py-2 px-4 border-b text-left">Method</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {withdrawalData.map((withdrawal) => (
                <tr key={withdrawal.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{withdrawal.date}</td>
                  <td className="py-2 px-4 border-b">{withdrawal.amount}</td>
                  <td className="py-2 px-4 border-b">{withdrawal.method}</td>
                  <td className={`py-2 px-4 border-b ${statusColors[withdrawal.status]}`}>
                    {withdrawal.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Withdrawal;
