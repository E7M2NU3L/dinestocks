import React from "react";
import PlaceholderImage from '../../assets/food-dash.png'
import Cta from "../../components/home/cta";

// FeatureCard component for rendering each feature
const FeatureCard = ({ title, description, imageUrl, videoUrl }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-lg shadow-md mb-6">
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <img src={imageUrl} alt={title} className="w-full h-auto rounded-md" />
      </div>
      <div className="md:ml-6 flex-1">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:underline"
        >
          Watch Tutorial
        </a>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Empower Your Restaurant or Vendor Business with Our All-in-One Solution
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Our platform simplifies your operations with powerful features for inventory management, automated invoicing, vendor communication, delivery tracking, and more. Streamline workflows, reduce costs, and make data-driven decisions to enhance efficiency and profitability.
          </p>
          <ul className="list-disc pl-5 mb-8 text-gray-700">
            <li className="mb-3">Real-time Inventory Tracking</li>
            <li className="mb-3">Automated Invoicing & Billing</li>
            <li className="mb-3">Seamless Vendor Communication</li>
            <li className="mb-3">Comprehensive Analytics Dashboard</li>
            <li className="mb-3">Effortless Menu Planning and Order Management</li>
          </ul>
          <a
            href="#features"
            className="inline-block bg-green-500 text-slate-900 text-lg font-semibold px-6 py-3 rounded-lg hover:bg-green-400 transition duration-300"
          >
            Explore Features
          </a>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-1/2">
          <img
            src={PlaceholderImage}
            alt="Product Overview"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};


// RestaurantFeatures component
const RestaurantFeatures = () => {
  const restaurantFeatures = [
    {
      title: "Inventory Management",
      description:
        "Effortlessly track and manage your restaurant's inventory in real-time. Set up automatic reorder points and generate purchase orders with a single click.",
      imageUrl: PlaceholderImage,
      videoUrl: "https://example.com/inventory-management-tutorial.mp4",
    },
    {
      title: "Vendor Communication",
      description:
        "Streamline communication with your vendors through our integrated messaging system. Send inquiries, discuss orders, and resolve issues all in one place.",
      imageUrl: PlaceholderImage,
      videoUrl: "https://example.com/vendor-communication-tutorial.mp4",
    },
    {
      title: "Automated Invoicing",
      description:
        "Say goodbye to manual invoice processing. Our system automatically generates and sends invoices based on received deliveries, saving you time and reducing errors.",
      imageUrl: PlaceholderImage,
      videoUrl: "https://example.com/automated-invoicing-tutorial.mp4",
    },
    {
      title: "Delivery Tracking",
      description:
        "Keep tabs on all incoming deliveries with our real-time tracking feature. Get notifications when deliveries are on the way and when they arrive at your restaurant.",
      imageUrl: PlaceholderImage,
      videoUrl: "https://example.com/delivery-tracking-tutorial.mp4",
    },
    {
      title: "Menu Planning",
      description:
        "Plan your menus efficiently by linking them directly to your inventory. Automatically update stock levels as menu items are sold.",
      imageUrl: PlaceholderImage,
      videoUrl: "https://example.com/menu-planning-tutorial.mp4",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Gain valuable insights into your restaurant's performance with our comprehensive analytics dashboard. Track sales, inventory turnover, and vendor performance all in one place.",
      imageUrl: PlaceholderImage,
      videoUrl: "https://example.com/analytics-dashboard-tutorial.mp4",
    },
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6">Restaurant Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {restaurantFeatures.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

// VendorFeatures component
const VendorFeatures = () => {
  const vendorFeatures = [
    {
      title: "Order Management",
      description:
        "Efficiently manage incoming orders from multiple restaurants. View order details, process them quickly, and update status in real-time.",
      imageUrl: PlaceholderImage,
      videoUrl: "https://example.com/order-management-tutorial.mp4",
    },
    {
      title: "Inventory Updates",
      description:
        "Keep your product catalog up-to-date with ease. Update prices, add new items, or mark items as out of stock, all of which are instantly reflected for your restaurant clients.",
      imageUrl: PlaceholderImage,
      videoUrl: "https://example.com/inventory-updates-tutorial.mp4",
    },
    {
      title: "Delivery Scheduling",
      description:
        "Optimize your delivery routes and schedules. Assign drivers, set estimated delivery times, and provide real-time updates to your restaurant clients.",
      imageUrl: PlaceholderImage,
      videoUrl: "https://example.com/delivery-scheduling-tutorial.mp4",
    },
    {
      title: "Automated Billing",
      description:
        "Simplify your billing process with our automated system. Generate accurate invoices based on fulfilled orders and track payment status effortlessly.",
      imageUrl: PlaceholderImage,
      videoUrl: "https://example.com/automated-billing-tutorial.mp4",
    },
    {
      title: "Performance Analytics",
      description:
        "Track your performance metrics including order fulfillment rates, on-time deliveries, and customer satisfaction scores. Use these insights to improve your services.",
      imageUrl: PlaceholderImage,
      videoUrl: "https://example.com/performance-analytics-tutorial.mp4",
    },
    {
      title: "Client Communication",
      description:
        "Stay in touch with your restaurant clients through our integrated messaging system. Respond to inquiries, send updates, and build stronger relationships.",
      imageUrl: PlaceholderImage,
      videoUrl: "https://example.com/client-communication-tutorial.mp4",
    },
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6">Vendor Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vendorFeatures.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

// Main App Component
const Features = () => {
  return (
    <div>
      <HeroSection />
      <RestaurantFeatures />
      <VendorFeatures />
      <Cta />
    </div>
  );
};

export default Features;
