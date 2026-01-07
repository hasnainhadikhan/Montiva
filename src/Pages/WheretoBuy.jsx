import React, { useState  } from 'react';
import { MapPin, Store, Phone, Clock, Navigation, Search } from 'lucide-react';
import Newletter from '../components/Newletter.jsx'
const WhereToBuy = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [zipCode, setZipCode] = useState('');
 
  const handleToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

 

  const nearbyStores = [
    {
      name: 'Walmart Supercenter',
      address: '123 Main Street, Karachi',
      distance: '2.5 km',
      hours: 'Open 24 hours',
      phone: '+92-21-1234567'
    },
    {
      name: 'Target Store',
      address: '456 Commerce Ave, Karachi',
      distance: '3.8 km',
      hours: '8:00 AM - 10:00 PM',
      phone: '+92-21-7654321'
    },
    {
      name: 'CVS Pharmacy',
      address: '789 Health Plaza, Karachi',
      distance: '5.2 km',
      hours: '7:00 AM - 11:00 PM',
      phone: '+92-21-9876543'
    }
  ];

  

  const handleZipSearch = (e) => {
    e.preventDefault();
    if (zipCode) {
      handleToast(`Searching stores near ${zipCode}...`);
    }
  };
  const [showMap, setShowMap] = useState(false);
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg shadow-2xl animate-slide-in">
          {toastMessage}
        </div>
      )}

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-cyan-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
              Where to Buy Montiva
            </h1>
            <p className="text-center text-blue-100 text-lg md:text-xl mb-8">
              Find Earth's finest water at stores near you or order online
            </p>

            {/* Store Finder */}
            <form onSubmit={handleZipSearch} className="max-w-2xl mx-auto">
              <div className="bg-white rounded-full shadow-2xl p-2 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-gray-400 ml-4" />
                <input
                  type="text"
                  placeholder="Enter ZIP code or city"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="flex-1 px-4 py-3 text-gray-800 outline-none bg-transparent"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  <span className="hidden sm:inline">Find Stores</span>
                </button>
              </div>
            </form>
          </div>
        </div>
<br/><br/><br/>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
      <div className="relative w-full h-[800px] rounded-lg overflow-hidden">
        
        {/* Placeholder / Loading Background */}
        {!showMap && (
          <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
            <button
              onClick={() => setShowMap(true)}
              className="px-6 py-3 bg-black text-white rounded-md shadow-md hover:bg-gray-800 transition"
            >
              Open Store Locator
            </button>
          </div>
        )}

        {/* Iframe */}
        {showMap && (
          <>
            {!loaded && (
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
                <span className="text-gray-500">Loading map…</span>
              </div>
            )}

            <iframe
              title="Pear Store Locator"
              src="https://offers.pearcommerce.com/product-locator/2775645967229700?t=189&offerId=2878416155340150&widgetId=2878416155471132&parentTitle=Store%20Locator&parentUrl=https://yourwebsite.com"
              className="w-full h-full border-0"
              scrolling="no"
              allowTransparency="true"
              onLoad={() => setLoaded(true)}
            />
          </>
        )}
      </div>
    </div>
        {/* Nearby Stores */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Stores Near You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nearbyStores.map((store, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
                <div className="flex items-start gap-3 mb-4">
                  <Store className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{store.name}</h3>
                    <p className="text-gray-600 text-sm">{store.address}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-blue-600" />
                    <span>{store.distance} away</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>{store.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>{store.phone}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleToast(`Getting directions to ${store.name}...`)}
                  className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>

   
        {/* Direct Order CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't Find Us Near You?</h2>
            <p className="text-lg md:text-xl mb-6 text-blue-100">
              Order directly from our website with free shipping on orders over $50!
            </p>
            <button 
              onClick={() => handleToast('Redirecting to shop...')}
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8  transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Shop Online Now
            </button>
          </div>
        </div>
      </div>
<Newletter/>
      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default WhereToBuy;