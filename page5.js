<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Travel Planner - Transport Options</title>
  <link rel="stylesheet" href="page5.css">
</head>
<body>

  <header>
    <h1>Travel Planner</h1>
    <nav>
      <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="#">Destinations</a></li>
        <li><a href="#">Itinerary</a></li>
        <li><a href="page4.html">Budget</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Transport Menu Section -->
  <section id="transport-menu">
    <h2>Select Your Mode of Transport</h2>
    
    <form action="#" method="post">
      <label for="transport">Choose a Mode of Transport:</label>
      <select id="transport" name="transport" required>
        <option value="">Select Transport</option>
        <option value="flight">Flight</option>
        <option value="train">Train</option>
        <option value="bus">Bus</option>
        <option value="car">Car Rental</option>
      </select>

      <button type="submit">Show Options</button>
    </form>

    <!-- Transport Price Details with Images and Ratings in Grid Layout -->
    <div id="price-details">
      <h3>Available Transport Options</h3>
      <div id="grid-container">
        <!-- Transport options will be dynamically inserted here -->
      </div>
    </div>
  </section>

  <footer>
    <p>Travel Planner © 2024</p>
  </footer>

  <!-- JavaScript Link -->
  <script src="page5.js"></script>
</body>
</html>
