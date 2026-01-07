import React from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    getCartCount, 
    isCartOpen, 
    setIsCartOpen, 
    clearCart 
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b-2 border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">
                Your Cart ({getCartCount()})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-blue-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="w-20 h-20 text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
                <p className="text-gray-400">Add some water bottles to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.size}
                        className="w-20 h-20 object-contain"
                      />

                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-lg mb-1">
                          {item.size}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">{item.caseInfo}</p>
                        <p className="text-xl font-bold text-blue-600">{item.price}</p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors h-fit"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-blue-200">
                      <span className="text-sm font-semibold text-gray-600">Quantity:</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 bg-white border-2 border-blue-300 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <Minus className="w-4 h-4 text-blue-600" />
                        </button>
                        <span className="text-lg font-bold text-gray-800 w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 bg-white border-2 border-blue-300 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <Plus className="w-4 h-4 text-blue-600" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-2 text-right">
                      <span className="text-sm text-gray-600">Subtotal: </span>
                      <span className="text-lg font-bold text-gray-800">
                        ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t-2 border-blue-100 p-6 bg-gradient-to-r from-blue-50 to-cyan-50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-semibold text-gray-700">Total:</span>
                <span className="text-3xl font-bold text-blue-600">
                  ${getCartTotal().toFixed(2)}
                </span>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg mb-3">
                Proceed to Checkout
              </button>

              <button
                onClick={clearCart}
                className="w-full py-3 bg-white border-2 border-red-300 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-all duration-300"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;