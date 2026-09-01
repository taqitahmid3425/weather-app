import React from 'react'

const CurrentWeather = () => {
    return (
        <div className='current-weather'>
            <div className='weather-header flex justify-between py-3.5'>
                <h3>Current Weather</h3>
                <span><button>° C</button> / <button>° F</button></span>
            </div>
            <div className='weather-body flex flex-col items-center gap-4 border-2 border-(--border-subtle) rounded-xl p-3.5 bg-(--bg-card)'>
                <div className='temp-body flex items-center gap-3.5 p-3.5 rounded-xl'>
                    <img src="#" alt="#" />
                    <div className='flex flex-col gap-3'>
                        <div className='text-4xl'>25 C</div>
                        <div className='text-2xl text-(--text-secondary)'>Partly Coludy</div>
                    </div>
                </div>
                <div className='temp-tail flex items-center justify-evenly gap-3.5 w-full'>
                    <div className='tail-1 flex items-center gap-3.5 p-3.5 rounded-xl'>
                        <img src="#" alt="#" />
                        <div className='flex flex-col gap-3'>
                            <div className='text-3xl'>Humidity</div>
                            <div className='text-xl'>56%</div>
                        </div>
                    </div>
                    <div className='tail-2 flex items-center gap-3.5 p-3.5 rounded-xl'>
                        <img src="#" alt="#" />
                        <div className='flex flex-col gap-3'>
                            <div className='text-3xl'>Wind Speed</div>
                            <div className='text-xl'>12 km/h</div>
                        </div>
                    </div>
                    <div className='tail-3 flex items-center gap-3.5 p-3.5 rounded-xl'>
                        <img src="#" alt="#" />
                        <div className='flex flex-col gap-3'>
                            <div className='text-3xl'>Pressure</div>
                            <div className='text-xl'>1014 hPa</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather
