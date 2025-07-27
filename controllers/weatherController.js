const axios = require('axios');

const getWeather = async (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ message: 'City is required' });
  }

  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);

    const data = response.data;

    res.json({
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind: data.wind.speed
    });
  } catch (error) {
    res.status(500).json({ message: 'Weather data fetch failed', error: error.message });
  }
};

module.exports = { getWeather };
