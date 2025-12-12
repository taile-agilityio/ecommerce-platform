import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist - United Deals",
};

export default function WishlistPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <button className="text-gray-600">&larr; Back</button>
      </div>

      <h1 className="text-3xl font-bold mb-8">Wishlist</h1>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Products
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Price
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Stock Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0">
                    {/* Product image */}
                  </div>
                  <div>
                    <p className="font-semibold">
                      2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB
                      RAM, 256GB SSD Storage) - Space Grey
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="font-semibold">$1,449.00</span>
              </td>
              <td className="px-6 py-4">
                <span className="text-green-600 font-semibold">In stock</span>
              </td>
              <td className="px-6 py-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Add to cart
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0">
                    {/* Product image */}
                  </div>
                  <div>
                    <p className="font-semibold">
                      Oneplus Buds Z True Wireless in Ear Earbuds - White
                      (Renewed)
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="font-semibold">$3,849</span>
              </td>
              <td className="px-6 py-4">
                <span className="text-green-600 font-semibold">In stock</span>
              </td>
              <td className="px-6 py-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Add to cart
                </button>
              </td>
            </tr>
            {/* More wishlist items */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
