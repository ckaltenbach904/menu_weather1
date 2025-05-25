// Temporary weather service that only uses fallback data
class WeatherService {
  // Always return fallback data for now
  async getWeatherData() {
    console.log("Using fallback weather data (no API key configured)");
    return this.getFallbackWeatherData();
  }

  // Your original mock data
  getFallbackWeatherData() {
    return {
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
  }
}

export default new WeatherService();
