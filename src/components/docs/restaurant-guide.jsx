export default function RestaurantGuide() {
    return (
      <section id="restaurant-guide" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Restaurant Guide</h2>
  
        <h3 className="text-xl font-semibold mb-2">Creating a Restaurant Account</h3>
        <p>Set up your restaurant profile:</p>
        <ol className="list-decimal list-inside mb-4">
          <li>After signing up, click on "Complete Restaurant Profile" in your dashboard.</li>
          <li>Enter your restaurant details, including name, location, and cuisine type.</li>
          <li>Upload your restaurant logo and any relevant images.</li>
          <li>Click "Save and Continue" to finalize your restaurant profile.</li>
        </ol>
        <img src="https://example.com/restaurant-account-creation.jpg" alt="Restaurant Account Creation" className="w-full mb-4" />
        
        {/* Additional restaurant-specific content goes here */}
      </section>
    );
  }
  