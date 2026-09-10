import { Sun, Cloud } from 'lucide-react';

const LoadingSpinner = ({ message = 'Fetching weather data...' }) => {
    return (
        <div className="flex flex-col items-center justify-center p-8 min-h-70">
            <div className="relative flex items-center justify-center w-24 h-24">
                {/* Outer glowing background ring */}
                <div className="absolute inset-0 rounded-full bg-linear-to-tr from-cyan-500 via-blue-500 to-purple-500 blur-md opacity-40 animate-pulse" />

                {/* Spinning gradient border */}
                <div className="absolute inset-0 rounded-full bg-linear-to-tr from-cyan-400 via-blue-500 to-purple-600 animate-spin border-2 border-transparent mask-[linear-gradient(white,transparent)]" />

                {/* Glassmorphic inner card container */}
                <div className="relative flex items-center justify-center w-20 h-20 bg-slate-900/80 backdrop-blur-md rounded-full border border-slate-700/50 shadow-xl">
                    {/* Weather Icon Animation Stack */}
                    <div className="relative flex items-center justify-center">
                        {/* Pulsing Sun */}
                        <Sun className="w-8 h-8 text-amber-400 animate-bounce absolute -top-1 -right-1 opacity-90" />

                        {/* Floating Cloud */}
                        <Cloud className="w-10 h-10 text-cyan-300 animate-pulse relative z-10 drop-shadow-[0_4px_6px_rgba(6,182,212,0.3)]" />
                    </div>
                </div>
            </div>

            {/* Loading Text */}
            <p className="mt-5 text-sm font-medium tracking-wide text-slate-300 animate-pulse">
                {message}
            </p>
        </div>
    );
};

export default LoadingSpinner;
