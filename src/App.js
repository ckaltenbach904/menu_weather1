import { useState, useEffect } from "react";
import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Coffee,
  Utensils,
  CalendarClock,
  Info,
  CreditCard,
  Wifi,
  ShoppingBag,
} from "lucide-react";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedMenuItem, setSelectedMenuItem] = useState("entree");

  // Menu categories for the restaurant navigation
  const menuItems = [
    { id: "home", icon: <Coffee size={24} />, label: "Home" },
    { id: "mainDish", icon: <Utensils size={24} />, label: "Main Dishes" },
    { id: "entree", icon: <ShoppingBag size={24} />, label: "Entrées" },
    { id: "dessert", icon: <Coffee size={24} />, label: "Desserts" },
    { id: "hours", icon: <CalendarClock size={24} />, label: "Hours" },
    { id: "info", icon: <Info size={24} />, label: "Info" },
    { id: "payment", icon: <CreditCard size={24} />, label: "Payment" },
  ];

  // Mock weather data
  const weatherData = {
    current: {
      location: "Gross-Gerau",
      temperature: 18,
      condition: "sunny",
      humidity: "65%",
      wind: "10 km/h",
    },
    forecast: [
      { day: "Today", high: 20, low: 15, condition: "sunny" },
      { day: "Tomorrow", high: 18, low: 14, condition: "cloudy" },
      { day: "Wed", high: 16, low: 12, condition: "rainy" },
      { day: "Thu", high: 19, low: 14, condition: "sunny" },
      { day: "Fri", high: 21, low: 16, condition: "sunny" },
    ],
  };

  // Restaurant food menu data
  const foodMenu = {
    mainDishes: [
      {
        id: 1,
        name: "Currywurst mit Pommes",
        price: "€7.50",
        description: "Classic Berlin currywurst with fries",
        popular: true,
      },
      {
        id: 2,
        name: "Döner Kebab",
        price: "€6.00",
        description: "Traditional döner in fresh bread with vegetables",
        popular: true,
      },
      {
        id: 3,
        name: "Schnitzel mit Kartoffelsalat",
        price: "€8.50",
        description: "Breaded pork cutlet with potato salad",
      },
      {
        id: 4,
        name: "Bratwurst im Brötchen",
        price: "€4.50",
        description: "Grilled sausage in a roll with mustard",
      },
      {
        id: 5,
        name: "Käsekrainer",
        price: "€5.00",
        description: "Cheese-filled sausage with sauerkraut",
      },
      {
        id: 6,
        name: "Falafel Teller",
        price: "€7.00",
        description: "Falafel plate with hummus and salad",
        vegetarian: true,
      },
      {
        id: 7,
        name: "Halloumi Box",
        price: "€8.00",
        description: "Grilled halloumi with vegetables and fries",
        vegetarian: true,
      },
      {
        id: 8,
        name: "Hähnchen Box",
        price: "€7.50",
        description: "Grilled chicken pieces with vegetables and rice",
      },
      {
        id: 9,
        name: "Beef Burger",
        price: "€6.50",
        description: "Classic beef burger with lettuce and tomato",
      },
      {
        id: 10,
        name: "Veggie Burger",
        price: "€6.00",
        description: "Plant-based patty with fresh toppings",
        vegetarian: true,
      },
      {
        id: 11,
        name: "Schawarma Teller",
        price: "€8.50",
        description: "Sliced meat with rice and vegetables",
      },
      {
        id: 12,
        name: "Gyros Pita",
        price: "€5.50",
        description: "Greek style gyros in pita bread",
      },
      {
        id: 13,
        name: "Pulled Pork Sandwich",
        price: "€6.50",
        description: "Slow-cooked pork with BBQ sauce",
      },
      {
        id: 14,
        name: "Chicken Wings (6 Stk)",
        price: "€6.00",
        description: "Crispy wings with spicy sauce",
      },
      {
        id: 15,
        name: "Leberkäse Semmel",
        price: "€4.00",
        description: "Traditional meat loaf in a roll",
      },
    ],
    entrees: [
      {
        id: 16,
        name: "Pommes Frites",
        price: "€3.00",
        description: "Crispy french fries with ketchup",
        vegetarian: true,
      },
      {
        id: 17,
        name: "Kartoffelsalat",
        price: "€3.50",
        description: "Homemade potato salad",
        vegetarian: true,
      },
      {
        id: 18,
        name: "Krautsalat",
        price: "€3.00",
        description: "Fresh cabbage salad",
        vegetarian: true,
      },
      {
        id: 19,
        name: "Gurkensalat",
        price: "€3.00",
        description: "Cucumber salad with dill",
        vegetarian: true,
      },
      {
        id: 20,
        name: "Griechischer Salat",
        price: "€4.50",
        description: "Greek salad with feta cheese",
        vegetarian: true,
      },
      {
        id: 21,
        name: "Tzatziki",
        price: "€2.50",
        description: "Yogurt dip with cucumber and garlic",
        vegetarian: true,
      },
      {
        id: 22,
        name: "Hummus",
        price: "€3.00",
        description: "Chickpea dip with olive oil",
        vegetarian: true,
      },
      {
        id: 23,
        name: "Feta im Ofen",
        price: "€4.00",
        description: "Baked feta with herbs and tomato",
        vegetarian: true,
      },
      {
        id: 24,
        name: "Zwiebelringe",
        price: "€3.50",
        description: "Breaded onion rings",
        vegetarian: true,
      },
      {
        id: 25,
        name: "Mozzarella Sticks",
        price: "€4.00",
        description: "Breaded and fried mozzarella",
        vegetarian: true,
      },
      {
        id: 26,
        name: "Brot mit Knoblauchbutter",
        price: "€2.50",
        description: "Bread with garlic butter",
        vegetarian: true,
      },
      {
        id: 27,
        name: "Oliven Mix",
        price: "€3.00",
        description: "Mixed marinated olives",
        vegetarian: true,
      },
      {
        id: 28,
        name: "Gebackener Käse",
        price: "€4.50",
        description: "Fried cheese with cranberry sauce",
        vegetarian: true,
      },
      {
        id: 29,
        name: "Halloumi Fries",
        price: "€4.50",
        description: "Fried halloumi cheese sticks",
        vegetarian: true,
      },
      {
        id: 30,
        name: "Knoblauch Champignons",
        price: "€4.00",
        description: "Garlic mushrooms",
        vegetarian: true,
      },
    ],
    desserts: [
      {
        id: 31,
        name: "Berliner",
        price: "€2.00",
        description: "Traditional German doughnut",
        vegetarian: true,
      },
      {
        id: 32,
        name: "Apfelstrudel",
        price: "€3.50",
        description: "Apple strudel with vanilla sauce",
        vegetarian: true,
      },
      {
        id: 33,
        name: "Baklava",
        price: "€2.50",
        description: "Sweet pastry with nuts and honey",
        vegetarian: true,
      },
      {
        id: 34,
        name: "Schokoladenkuchen",
        price: "€3.00",
        description: "Rich chocolate cake",
        vegetarian: true,
      },
      {
        id: 35,
        name: "Käsekuchen",
        price: "€3.00",
        description: "Creamy cheesecake",
        vegetarian: true,
      },
      {
        id: 36,
        name: "Eis (Kugel)",
        price: "€1.50",
        description: "Ice cream scoop, various flavors",
        vegetarian: true,
      },
      {
        id: 37,
        name: "Tiramisu",
        price: "€3.50",
        description: "Coffee-flavored Italian dessert",
        vegetarian: true,
      },
      {
        id: 38,
        name: "Pfannkuchen mit Nutella",
        price: "€3.00",
        description: "Pancake with chocolate spread",
        vegetarian: true,
      },
      {
        id: 39,
        name: "Obstsalat",
        price: "€3.50",
        description: "Fresh fruit salad",
        vegetarian: true,
      },
      {
        id: 40,
        name: "Milchreis",
        price: "€3.00",
        description: "Rice pudding with cinnamon",
        vegetarian: true,
      },
      {
        id: 41,
        name: "Crêpe",
        price: "€3.00",
        description: "Thin pancake with sugar or jam",
        vegetarian: true,
      },
      {
        id: 42,
        name: "Brownie",
        price: "€2.50",
        description: "Chocolate brownie square",
        vegetarian: true,
      },
      {
        id: 43,
        name: "Muffin",
        price: "€2.00",
        description: "Assorted flavors",
        vegetarian: true,
      },
      {
        id: 44,
        name: "Waffel mit Sahne",
        price: "€3.50",
        description: "Waffle with whipped cream",
        vegetarian: true,
      },
      {
        id: 45,
        name: "Schokopudding",
        price: "€2.50",
        description: "Chocolate pudding",
        vegetarian: true,
      },
    ],
  };

  // Business hours
  const businessHours = [
    { day: "Monday", hours: "11:00 - 22:00" },
    { day: "Tuesday", hours: "11:00 - 22:00" },
    { day: "Wednesday", hours: "11:00 - 22:00" },
    { day: "Thursday", hours: "11:00 - 22:00" },
    { day: "Friday", hours: "11:00 - 23:00" },
    { day: "Saturday", hours: "12:00 - 23:00" },
    { day: "Sunday", hours: "12:00 - 22:00" },
  ];

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      setCurrentDate(now);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time as HH:MM:SS
  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  // Format date as Day, Month DD, YYYY
  const formatDate = (date) => {
    return date.toLocaleDateString([], {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Weather icon component
  const WeatherIcon = ({ condition, size = 24 }) => {
    switch (condition) {
      case "sunny":
        return <Sun size={size} className="text-yellow-300" />;
      case "cloudy":
        return <Cloud size={size} className="text-gray-300" />;
      case "rainy":
        return <CloudRain size={size} className="text-blue-300" />;
      case "snowy":
        return <CloudSnow size={size} className="text-blue-100" />;
      case "stormy":
        return <CloudLightning size={size} className="text-purple-300" />;
      default:
        return <Sun size={size} className="text-yellow-300" />;
    }
  };

  return (
    <div className="app-container">
      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-left">
          <span className="connection-status">
            <Wifi size={16} /> Connected
          </span>
          <span className="restaurant-name">Berlin Imbiss Express</span>
        </div>
        <div className="status-right">Menu Display · v1.0</div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Weather Panel (Left) */}
        <div className="weather-panel">
          <h2>Weather Today</h2>

          {/* Current Weather */}
          <div className="current-weather">
            <div className="temperature">
              <WeatherIcon
                condition={weatherData.current.condition}
                size={48}
              />
              <div className="temp-info">
                <div className="temp-value">
                  {weatherData.current.temperature}°C
                </div>
                <div className="location">{weatherData.current.location}</div>
              </div>
            </div>

            <div className="weather-details">
              <div>Humidity: {weatherData.current.humidity}</div>
              <div>Wind: {weatherData.current.wind}</div>
            </div>
          </div>

          {/* Forecast */}
          <h3>This Week</h3>
          <div className="forecast-list">
            {weatherData.forecast.map((day, idx) => (
              <div key={idx} className="forecast-item">
                <span className="day">{day.day}</span>
                <div className="forecast-icon">
                  <WeatherIcon condition={day.condition} size={20} />
                </div>
                <div className="temps">
                  <span className="high">{day.high}°</span>
                  <span className="low">{day.low}°</span>
                </div>
              </div>
            ))}
          </div>

          {/* Today's Special */}
          <div className="todays-special">
            <h3>Today's Special</h3>
            <div className="special-name">Currywurst mit Pommes</div>
            <div className="special-price">€6.50</div>
            <div className="regular-price">Regular price: €7.50</div>
          </div>
        </div>

        {/* Center Content */}
        <div className="content-panel">
          {/* Menu Navigation */}
          <div className="menu-nav">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`menu-tab ${
                  selectedMenuItem === item.id ? "active" : ""
                }`}
                onClick={() => setSelectedMenuItem(item.id)}
              >
                <span className="tab-icon">{item.icon}</span>
                <span className="tab-label">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="content-area">
            {selectedMenuItem === "home" && (
              <div className="home-content">
                <h1>Berlin Imbiss Express</h1>
                <p className="subtitle">Fast food. Great taste.</p>
                <div className="divider"></div>
                <p className="welcome">Welcome to our menu display</p>
                <p className="instruction">
                  Please use the menu above to browse our food offerings
                </p>
                <div className="stats">
                  <div className="stat">
                    <div className="stat-number">45</div>
                    <div className="stat-label">Items</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">7</div>
                    <div className="stat-label">Days</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">11-23</div>
                    <div className="stat-label">Hours</div>
                  </div>
                </div>
              </div>
            )}

            {selectedMenuItem === "mainDish" && (
              <div>
                <h2>Main Dishes</h2>
                <div className="menu-items">
                  {foodMenu.mainDishes.map((dish) => (
                    <div key={dish.id} className="menu-item">
                      <div className="item-details">
                        <div className="item-name-row">
                          <span className="item-name">{dish.name}</span>
                          {dish.popular && (
                            <span className="popular-badge">Popular</span>
                          )}
                          {dish.vegetarian && (
                            <span className="veg-badge">Veg</span>
                          )}
                        </div>
                        <div className="item-description">
                          {dish.description}
                        </div>
                      </div>
                      <div className="item-price">{dish.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedMenuItem === "entree" && (
              <div>
                <h2>Entrées & Sides</h2>
                <div className="menu-items">
                  {foodMenu.entrees.map((dish) => (
                    <div key={dish.id} className="menu-item">
                      <div className="item-details">
                        <div className="item-name-row">
                          <span className="item-name">{dish.name}</span>
                          {dish.vegetarian && (
                            <span className="veg-badge">Veg</span>
                          )}
                        </div>
                        <div className="item-description">
                          {dish.description}
                        </div>
                      </div>
                      <div className="item-price">{dish.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedMenuItem === "dessert" && (
              <div>
                <h2>Desserts</h2>
                <div className="menu-items">
                  {foodMenu.desserts.map((dish) => (
                    <div key={dish.id} className="menu-item">
                      <div className="item-details">
                        <div className="item-name-row">
                          <span className="item-name">{dish.name}</span>
                          {dish.vegetarian && (
                            <span className="veg-badge">Veg</span>
                          )}
                        </div>
                        <div className="item-description">
                          {dish.description}
                        </div>
                      </div>
                      <div className="item-price">{dish.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedMenuItem === "hours" && (
              <div className="hours-content">
                <h2>Opening Hours</h2>
                <div className="hours-container">
                  {businessHours.map((day, idx) => (
                    <div key={idx} className="hours-row">
                      <span className="day-name">{day.day}</span>
                      <span className="day-hours">{day.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="hours-note">
                  <p>Kitchen closes 30 minutes before closing time</p>
                </div>
              </div>
            )}

            {selectedMenuItem === "info" && (
              <div className="info-content">
                <h2>About Berlin Imbiss Express</h2>
                <div className="info-description">
                  <p>Serving delicious fast food in Berlin since 2018</p>
                  <p>
                    All our dishes are freshly prepared using quality
                    ingredients
                  </p>
                </div>
                <div className="info-cards">
                  <div className="info-card">
                    <h3>Location</h3>
                    <p>Musterstraße 123</p>
                    <p>10115 Berlin</p>
                  </div>
                  <div className="info-card">
                    <h3>Contact</h3>
                    <p>030 12345678</p>
                    <p>info@berlinimbiss.de</p>
                  </div>
                </div>
                <div className="catering-info">
                  <h3>Catering Available</h3>
                  <p>For orders of 15+ people</p>
                  <p>Please contact us 24 hours in advance</p>
                </div>
              </div>
            )}

            {selectedMenuItem === "payment" && (
              <div className="payment-content">
                <h2>Payment Methods</h2>
                <div className="payment-methods">
                  <div className="payment-card">
                    <h3>We Accept</h3>
                    <ul>
                      <li>Cash (Euro)</li>
                      <li>Debit Cards</li>
                      <li>Credit Cards</li>
                      <li>Mobile Payment</li>
                      <li>Gift Cards</li>
                    </ul>
                  </div>
                  <div className="payment-card">
                    <h3>Order Methods</h3>
                    <ul>
                      <li>At Counter</li>
                      <li>Phone Order</li>
                      <li>Online</li>
                      <li>Delivery Apps</li>
                    </ul>
                  </div>
                </div>
                <div className="minimum-order">
                  <h3>Minimum Order</h3>
                  <p>€10 for delivery orders</p>
                  <p>No minimum for pickup orders</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Time Panel (Right) */}
        <div className="time-panel">
          {/* Current Time */}
          <div className="time-display">
            <div className="current-time">{formatTime(currentTime)}</div>
            <div className="current-date">{formatDate(currentDate)}</div>
          </div>

          {/* Open Status */}
          <div className="open-status">
            <div className="status">OPEN NOW</div>
            <div className="until">Until 22:00 Today</div>
          </div>

          {/* Fun Food Fact */}
          <div className="food-fact">
            <div className="fact-heading">Fun Food Fact</div>
            <div className="fact-title">Did you know?</div>
            <div className="fact-text">
              The Currywurst was invented in Berlin in 1949 by Herta Heuwer, who
              traded spirits with British soldiers for ketchup and curry powder!
            </div>
          </div>

          {/* Wait Time */}
          <div className="wait-time">
            <div className="wait-heading">Average Wait Time</div>
            <div className="wait-value">~10 min</div>

            <div className="bamboo-image">
              <img
                src="https://images.unsplash.com/photo-1504736038806-94bd1115084e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Bamboo"
                className="bamboo-img"
              />
              <div className="bamboo-caption">Relax while you wait</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
