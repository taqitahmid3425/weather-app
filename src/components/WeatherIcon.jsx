import * as Icons from 'lucide-react'

const WeatherIcon = ({ iconName, size = 84, className = '' }) => {
  const Icon = Icons[iconName];
  return Icon ? <Icon size={size} className={className} /> : null;
}

export default WeatherIcon