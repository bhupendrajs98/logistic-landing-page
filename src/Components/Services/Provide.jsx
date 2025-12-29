import React from "react";
import Logi2 from "../../../public/logi2.webp";
import Logi4 from "../../../public/logi4.avif";
import Logi6 from "../../../public/logi6.avif";
import Logi7 from "../../../public/logi7.jpg";
import Logi8 from "../../../public/logo8.avif";
import Logi9 from "../../../public/logi9.avif";
import Logi10 from "../../../public/logi10.avif";

function Provide() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">

      <h1 className="text-4xl font-bold text-center mb-12">Our Logistics Services</h1>

      {/* 1. Courier & Parcel Delivery */}
      <div className="flex items-center justify-between gap-10">
        <div className="w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Courier & Parcel Delivery</h2>
          <p className="text-gray-700">
            Fast and secure courier solutions for all parcel types.  
            We ensure safe handling, timely delivery, and complete customer satisfaction.  
            Trusted by businesses and individuals for daily shipment needs.
          </p>
        </div>
        <div className="w-1/2 flex justify-end">
          <img src={Logi2} className="w-full max-w-md rounded-xl shadow-lg" />
        </div>
      </div>

      {/* 2. Door-to-Door Pickup & Delivery */}
      <div className="flex items-center justify-between gap-10">
        <div className="w-1/2 flex">
          <img src={Logi4} className="w-full max-w-md rounded-xl shadow-lg" />
        </div>
        <div className="w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Door-to-Door Pickup & Delivery</h2>
          <p className="text-gray-700">
            Enjoy seamless doorstep pickup and delivery without any hassle.  
            We collect directly from your location and deliver safely to the final destination.  
            A convenient service made to save your time and effort.
          </p>
        </div>
      </div>

      {/* 3. E-commerce Logistics */}
      <div className="flex items-center justify-between gap-10">
        <div className="w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">E-commerce Logistics</h2>
          <p className="text-gray-700">
            Complete logistics support for online sellers and businesses.  
            From packaging to nationwide delivery, we handle everything professionally.  
            Perfect for fast-moving e-commerce needs with real-time tracking.
          </p>
        </div>
        <div className="w-1/2 flex justify-end">
          <img src={Logi6} className="w-full max-w-md rounded-xl shadow-lg" />
        </div>
      </div>

      {/* 4. Local Same-Day Delivery */}
      <div className="flex items-center justify-between gap-10">
        <div className="w-1/2 flex">
          <img src={Logi7} className="w-full max-w-md rounded-xl shadow-lg" />
        </div>
        <div className="w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Local Same-Day Delivery</h2>
          <p className="text-gray-700">
            Need urgent delivery? We offer fast same-day service within your city.  
            Ideal for time-sensitive parcels, documents, and express shipments.  
            Reliable, quick, and always on schedule.
          </p>
        </div>
      </div>

      {/* 5. Tracking Services */}
      <div className="flex items-center justify-between gap-10">
        <div className="w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Tracking Services</h2>
          <p className="text-gray-700">
            Stay updated with real-time tracking for every shipment.  
            Get complete visibility from pickup to final delivery.  
            Transparent updates ensure peace of mind and trust.
          </p>
        </div>
        <div className="w-1/2 flex justify-end">
          <img src={Logi9} className="w-full max-w-md rounded-xl shadow-lg" />
        </div>
      </div>

      {/* 6. COD Services */}
      <div className="flex items-center justify-between gap-10">
        <div className="w-1/2 flex">
          <img src={Logi8} className="w-full max-w-md rounded-xl shadow-lg" />
        </div>
        <div className="w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">COD (Cash on Delivery)</h2>
          <p className="text-gray-700">
            Offer customers a secure pay-on-delivery option for added convenience.  
            Perfect for small businesses and online sellers who prefer cash handling.  
            Easy settlement and trusted by both buyers and merchants.
          </p>
        </div>
      </div>

      {/* 7. Local Express Delivery */}
      <div className="flex items-center justify-between gap-10">
        <div className="w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Local Express Delivery</h2>
          <p className="text-gray-700">
            Our express delivery service ensures ultra-fast movement of packages.  
            Designed for businesses requiring immediate shipment handling.  
            Speed, accuracy, and reliability—every single time.
          </p>
        </div>
        <div className="w-1/2 flex justify-end">
          <img src={Logi10} className="w-full max-w-md rounded-xl shadow-lg" />
        </div>
      </div>

    </div>
  );
}

export default Provide;
