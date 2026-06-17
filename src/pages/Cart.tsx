import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

function Cart() {
  const { products, loading, error } = useSelector(
    (state: RootState) => state.shopCart,
  );

  console.log(products);

  return (
    <>
      <div className="max-w-screen-2xl px-6 mx-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200">
            <thead className="ltr:text-left rtl:text-right">
              <tr className="*:font-medium *:text-gray-900">
                <th className="px-3 py-2 whitespace-nowrap">Product</th>
                <th className="px-3 py-2 whitespace-nowrap">Price</th>
                <th className="px-3 py-2 whitespace-nowrap">Quantity</th>
                <th className="px-3 py-2 whitespace-nowrap">Subtotal</th>
                <th className="px-3 py-2 whitespace-nowrap">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 *:even:bg-gray-50">
              {products.map((product) => {
                return (
                  <tr
                    key={product.id}
                    className="*:text-gray-900 *:first:font-medium"
                  >
                    <td className="px-3 py-2 whitespace-nowrap">
                      <div className="flex gap-x-4">
                        <img
                          src={product.img}
                          alt=""
                          className="aspect-square size-20 rounded-sm object-cover"
                        />
                        <div>
                          <h1 className="font-bold">{product.name}</h1>
                          <p>{product.description.slice(0, 30)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {product.price}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <div className="flex items-center gap-x-3">
                        <button className="cursor-pointer rounded-sm border border-gray-700 bg-gray-700 px-2 py-0.25 text-lg font-medium text-white focus:ring-3 focus:outline-hidden">
                          -
                        </button>
                        <p>{product.qty}</p>
                        <button className="cursor-pointer rounded-sm border border-gray-700 bg-gray-700 px-2 py-0.25 text-lg font-medium text-white focus:ring-3 focus:outline-hidden">
                          +
                        </button>
                      </div>
                    </td>

                    <td className="px-3 py-2 whitespace-nowrap">
                      {product.price * product.qty}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <button className="cursor-pointer rounded-sm border border-red-600 bg-red-600 px-3 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 focus:ring-3 focus:outline-hidden">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <hr />

          <div className="mt-5 flex justify-between items-center">
            <button className="cursor-pointer rounded-sm border border-gray-800 bg-gray-800 px-4 py-2 text-sm font-medium text-white focus:ring-3 focus:outline-hidden">
              Clear Cart
            </button>
            <h1 className="text-xl font-bold">Total: {products.reduce((total , product)=>{
              return total + product.qty * product.price
            },0)}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
