import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, 
  PieChart, Pie, LineChart, Line, ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Jan', sales: 4000, revenue: 2400 },
  { name: 'Feb', sales: 3000, revenue: 2210 },
  { name: 'Mar', sales: 5000, revenue: 2290 },
  { name: 'Apr', sales: 2780, revenue: 2000 },
  { name: 'May', sales: 1890, revenue: 2181 },
  { name: 'Jun', sales: 2390, revenue: 2500 },
  { name: 'Jul', sales: 3490, revenue: 2700 },
  { name: 'Aug', sales: 4200, revenue: 2900 },
  { name: 'Sep', sales: 3100, revenue: 2300 },
  { name: 'Oct', sales: 4000, revenue: 2600 },
  { name: 'Nov', sales: 3700, revenue: 2800 },
  { name: 'Dec', sales: 4500, revenue: 3100 },
];

const pieData = [
  { name: 'Product A', value: 400 },
  { name: 'Product B', value: 300 },
  { name: 'Product C', value: 300 },
  { name: 'Product D', value: 200 },
];

const Analytics = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="md:text-2xl font-bold">Analytics Dashboard</h1>
      
      <div className="overflow-x-auto bg-white p-4 rounded-lg shadow">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Month</th>
              <th className="p-2 border">Sales</th>
              <th className="p-2 border">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 border">{row.name}</td>
                <td className="p-2 border">{row.sales}</td>
                <td className="p-2 border">{row.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Sales & Revenue Analytics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#4F46E5" />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Sales Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#4F46E5" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Sales Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#4F46E5" />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;