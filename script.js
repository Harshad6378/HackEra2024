document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting to a server for now
  
    // Get the values from the form inputs
    const destination = document.getElementById("destination").value;
    const budget = document.getElementById("budget").value;
  
    // Check if both values are provided
    if (destination && budget) {
      // Update the text content in the Weather and Events sections
      document.getElementById("location").textContent = destination;
      document.getElementById("event-location").textContent = destination;
  
      // Simple message showing what budget was entered (this can be expanded)
      alert(`You are planning a trip to ${destination} with a budget of $${budget}.`);
  
      // You can add more functionality here, like fetching weather, events, and hotels using APIs
      updateWeather(destination); // Placeholder function for weather
      updateEvents(destination);  // Placeholder function for events
      updateHotels(destination);  // Placeholder function for hotels
    } else {
      // Alert the user if they haven't provided the required details
      alert("Please enter both a budget and a destination.");
    }
  });
  
  // Placeholder function to demonstrate where future dynamic updates will go
  function updateWeather(destination) {
    // You can use a real weather API like OpenWeatherMap to get the actual weather data.
    console.log(`Fetching weather for ${destination}`);
    // Example: Updating the temperature and weather condition
    document.getElementById("temperature").textContent = "28°C"; // Example temperature
    document.getElementById("weather-condition").textContent = "Sunny"; // Example weather condition
  }
  
  function updateEvents(destination) {
    // You can integrate an event API here to fetch the real-time events in the destination.
    console.log(`Fetching events for ${destination}`);
    // Example: updating event list
    const events = document.getElementById("event-list");
    events.innerHTML = ""; // Clear the existing list
  
    // Example events data (You would get real data from an API)
    const eventList = [
      "Food Festival - September 20",
      "Art Show - September 25",
      "Music Concert - October 1"
    ];
  
    // Dynamically populate the event list
    eventList.forEach(event => {
      const li = document.createElement("li");
      li.textContent = event;
      events.appendChild(li);
    });
  }
  
  function updateHotels(destination) {
    // Use an actual API to get hotel listings for the destination.
    console.log(`Fetching hotels for ${destination}`);
    // Example: updating hotel list
    const hotels = document.getElementById("hotel-list");
    hotels.innerHTML = ""; // Clear the existing list
  
    // Example hotel data (You would get real data from an API)
    const hotelList = [
      "Luxury Inn - $200 per night",
      "Cozy Stay - $150 per night",
      "Budget Hotel - $100 per night"
    ];
  
    // Dynamically populate the hotel list
    hotelList.forEach(hotel => {
      const li = document.createElement("li");
      li.textContent = hotel;
      hotels.appendChild(li);
    });
  }
  