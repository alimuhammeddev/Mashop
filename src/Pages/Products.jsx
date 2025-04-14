import AddProduct from "../Components/Cards/AddProduct";
const Products = () => {
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", description: "lorem", price: "$1200" },
    { id: 2, name: "Smartphone", category: "Electronics", description: "lorem", price: "$800" },
    { id: 3, name: "Headphones", category: "Accessories", description: "lorem", price: "$150" },
    { id: 4, name: "Shoes", category: "Fashion", description: "lorem", price: "$100" },
    { id: 5, name: "Trouser", category: "Fashion", description: "lorem", price: "$600" },
    { id: 6, name: "Plate", category: "Utensils", description: "lorem", price: "$70" },
    { id: 6, name: "Shirt", category: "Fashion", description: "lorem", price: "$50" },
    { id: 7, name: "Medicated Glasses", category: "Health", description: "lorem", price: "$500" },   
  ];

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold mb-4 md:text-2xl">List Of Products</h2>

        <AddProduct />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Product ID</th>
              <th className="border border-gray-300 px-4 py-2">Product Name</th>
              <th className="border border-gray-300 px-4 py-2">Product Category</th>
              <th className="border border-gray-300 px-4 py-2">Product Description</th>
              <th className="border border-gray-300 px-4 py-2">Product Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{product.id}</td>
                <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                <td className="border border-gray-300 px-4 py-2">{product.description}</td>
                <td className="border border-gray-300 px-4 py-2">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
