const Customers = () => {
  const customers = [
    { id: 1, name: "John Park", email: "john@example.com", phone: "+234 123-456-7890" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "+234 987-654-3210" },
    { id: 3, name: "Alice Botson", email: "alice@example.com", phone: "+234 456-789-1234" },
    { id: 4, name: "Aliyu Atiku", email: "atikubobo@example.com", phone: "+234 789-123-4567" },
    { id: 5, name: "Abdulrazaq Salihu", email: "razsmallboy@example.com", phone: "+234 567-444-7789" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 md:text-2xl">List Of Customers</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Customer Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Customer Email</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Customer Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2">{customer.id}</td>
                <td className="border border-gray-300 px-4 py-2">{customer.name}</td>
                <td className="border border-gray-300 px-4 py-2">{customer.email}</td>
                <td className="border border-gray-300 px-4 py-2">{customer.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;