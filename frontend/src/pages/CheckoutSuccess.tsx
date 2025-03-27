import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
  // Generate a random order number
  const orderNumber = Math.floor(100000 + Math.random() * 900000);
  
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6 text-green-500">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-16 w-16 mx-auto" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Order Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>
        
        <div className="bg-gray-50 p-4 rounded mb-6">
          <p className="text-sm text-gray-600 mb-1">Order Number</p>
          <p className="font-semibold">{orderNumber}</p>
        </div>
        
        <p className="text-sm text-gray-600 mb-6">
          A confirmation email has been sent to your email address.
        </p>
        
        <div className="flex flex-col space-y-3">
          <Link 
            to="/" 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Return to Home
          </Link>
          <Link 
            to="/products" 
            className="text-blue-500 hover:underline"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
