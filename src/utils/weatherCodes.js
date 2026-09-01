export const weatherCodes = {
  0: {
    description: 'Clear sky',
    icon: '☀️',
    bgColor: 'bg-blue-400',
    textColor: 'text-blue-600'
  },
  1: {
    description: 'Mainly clear',
    icon: '🌤️',
    bgColor: 'bg-blue-300',
    textColor: 'text-blue-500'
  },
  2: {
    description: 'Partly cloudy',
    icon: '⛅',
    bgColor: 'bg-gray-300',
    textColor: 'text-gray-600'
  },
  3: {
    description: 'Overcast',
    icon: '☁️',
    bgColor: 'bg-gray-400',
    textColor: 'text-gray-700'
  },
  45: {
    description: 'Fog',
    icon: '🌫️',
    bgColor: 'bg-gray-400',
    textColor: 'text-gray-700'
  },
  48: {
    description: 'Depositing rime fog',
    icon: '🌫️',
    bgColor: 'bg-gray-400',
    textColor: 'text-gray-700'
  },
  51: {
    description: 'Light drizzle',
    icon: '🌧️',
    bgColor: 'bg-blue-400',
    textColor: 'text-blue-600'
  },
  53: {
    description: 'Moderate drizzle',
    icon: '🌧️',
    bgColor: 'bg-blue-500',
    textColor: 'text-blue-700'
  },
  55: {
    description: 'Dense drizzle',
    icon: '🌧️',
    bgColor: 'bg-blue-600',
    textColor: 'text-blue-800'
  },
  56: {
    description: 'Light freezing drizzle',
    icon: '🥶',
    bgColor: 'bg-cyan-400',
    textColor: 'text-cyan-600'
  },
  57: {
    description: 'Dense freezing drizzle',
    icon: '🥶',
    bgColor: 'bg-cyan-500',
    textColor: 'text-cyan-700'
  },
  61: {
    description: 'Slight rain',
    icon: '🌧️',
    bgColor: 'bg-blue-500',
    textColor: 'text-blue-700'
  },
  63: {
    description: 'Moderate rain',
    icon: '🌧️',
    bgColor: 'bg-blue-600',
    textColor: 'text-blue-800'
  },
  65: {
    description: 'Heavy rain',
    icon: '⛈️',
    bgColor: 'bg-blue-700',
    textColor: 'text-blue-900'
  },
  66: {
    description: 'Light freezing rain',
    icon: '🥶',
    bgColor: 'bg-cyan-500',
    textColor: 'text-cyan-700'
  },
  67: {
    description: 'Heavy freezing rain',
    icon: '🥶',
    bgColor: 'bg-cyan-600',
    textColor: 'text-cyan-800'
  },
  71: {
    description: 'Slight snow',
    icon: '🌨️',
    bgColor: 'bg-indigo-300',
    textColor: 'text-indigo-600'
  },
  73: {
    description: 'Moderate snow',
    icon: '🌨️',
    bgColor: 'bg-indigo-400',
    textColor: 'text-indigo-700'
  },
  75: {
    description: 'Heavy snow',
    icon: '🌨️',
    bgColor: 'bg-indigo-500',
    textColor: 'text-indigo-700'
  },
  77: {
    description: 'Snow grains',
    icon: '🌨️',
    bgColor: 'bg-indigo-400',
    textColor: 'text-indigo-700'
  },
  80: {
    description: 'Slight rain showers',
    icon: '🌦️',
    bgColor: 'bg-blue-400',
    textColor: 'text-blue-600'
  },
  81: {
    description: 'Moderate rain showers',
    icon: '🌧️',
    bgColor: 'bg-blue-600',
    textColor: 'text-blue-800'
  },
  82: {
    description: 'Violent rain showers',
    icon: '⛈️',
    bgColor: 'bg-blue-700',
    textColor: 'text-blue-900'
  },
  85: {
    description: 'Slight snow showers',
    icon: '🌨️',
    bgColor: 'bg-indigo-300',
    textColor: 'text-indigo-600'
  },
  86: {
    description: 'Heavy snow showers',
    icon: '🌨️',
    bgColor: 'bg-indigo-500',
    textColor: 'text-indigo-700'
  },
  95: {
    description: 'Thunderstorm',
    icon: '⛈️',
    bgColor: 'bg-purple-600',
    textColor: 'text-purple-900'
  },
  96: {
    description: 'Thunderstorm with slight hail',
    icon: '⛈️',
    bgColor: 'bg-purple-700',
    textColor: 'text-purple-900'
  },
  99: {
    description: 'Thunderstorm with heavy hail',
    icon: '⛈️',
    bgColor: 'bg-purple-800',
    textColor: 'text-purple-900'
  }
};

// Helper function to get weather info by code
export const getWeatherInfo = (code) => {
  return weatherCodes[code] || {
    description: 'Unknown',
    icon: '❓',
    bgColor: 'bg-gray-300',
    textColor: 'text-gray-600'
  };
};