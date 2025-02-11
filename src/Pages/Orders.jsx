const Orders = () => {
  const orders = [
    { id: "001", customer: "John Doe", date: "2024-02-11", total: "$250.00", status: "Pending" },
    { id: "002", customer: "Jane Smith", date: "2024-02-10", total: "$180.00", status: "Shipped" },
    { id: "003", customer: "Michael Brown", date: "2024-02-09", total: "$320.00", status: "Delivered" },
    { id: "004", customer: "Michael Brown", date: "2024-02-09", total: "$320.00", status: "Delivered" },
    { id: "005", customer: "Michael Brown", date: "2024-02-09", total: "$320.00", status: "Delivered" },
    { id: "006", customer: "Michael Brown", date: "2024-02-09", total: "$320.00", status: "Delivered" },
    { id: "007", customer: "Michael Brown", date: "2024-02-09", total: "$320.00", status: "Delivered" },
  ];

  return (
    <section className="p-4 md:p-6">
      <div className="overflow-x-auto">
        <h1 className="text-lg md:text-2xl font-semibold mb-4">List of Orders</h1>
        <div className="w-full overflow-x-auto">
          <table className="min-w-[600px] md:min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="py-2 px-4 text-left text-sm md:text-base">Order ID</th>
                <th className="py-2 px-4 text-left text-sm md:text-base">Customer</th>
                <th className="py-2 px-4 text-left text-sm md:text-base">Date</th>
                <th className="py-2 px-4 text-left text-sm md:text-base">Total</th>
                <th className="py-2 px-4 text-left text-sm md:text-base">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} border-b`}>
                  <td className="py-2 px-4 whitespace-nowrap text-sm md:text-base">{order.id}</td>
                  <td className="py-2 px-4 whitespace-nowrap text-sm md:text-base">{order.customer}</td>
                  <td className="py-2 px-4 whitespace-nowrap text-sm md:text-base">{order.date}</td>
                  <td className="py-2 px-4 whitespace-nowrap text-sm md:text-base">{order.total}</td>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded text-white text-xs md:text-sm ${
                        order.status === "Pending"
                          ? "bg-yellow-500"
                          : order.status === "Shipped"
                          ? "bg-blue-500"
                          : "bg-green-500"
                      }`}
                    >
                      {order.status}
                    </span>
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

export default Orders;