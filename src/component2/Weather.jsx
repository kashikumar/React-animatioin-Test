import React, { useLayoutEffect, useState } from 'react'

export const Weather = () => {
    <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300&family=Mulish&display=swap');
        font-family: 'Jost', sans-serif;
        `}
    </style>

    const [data, setData] = useState(null);
    const [citySearch, setCitySearch] = useState("pune");

    const inputChange = (e) => {
        const inputdata = e.target.value;
        setCitySearch(inputdata)
        console.log(inputdata);
    }

    const getWeatherApi = async () => {
        // const url = "https://api.openweathermap.org/data/2.5/weather?q={pune}&appid={058ba47ed1694e5e54bf7a03f327fffe}";
        const url = `http://api.weatherstack.com/current?access_key=7b5fcc0b0a5d388267dec1d7f0d68ca9&query=${citySearch}`
        const respApi = await fetch(url);
        const weatherApi = await respApi.json();
        console.log(weatherApi.current);
        setData(weatherApi.current)
    }
    useLayoutEffect(() => {
        getWeatherApi();
    }, [citySearch])

    return (
        <div>
            <div className="col-lg-4 col-md-5 col-sm-6 col-12 mx-auto overflow-hidden">
                <div className="border bg-sky-300 rounded-lg mx-4 py-5 flex flex-col justify-between h-[70vh] shadow shadow-sky-300">
                    <div className="col-8 mx-auto">
                        <form className="d-flex" role="search">
                            <input className="form-control rounded-pill px-3 py-2 me-2" name="searchImg" value={citySearch} onChange={inputChange} type="search" placeholder="Search..." />
                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                        </form>
                    </div>
                    {!data ? 
                    <div className='h-full flex justify-center items-center'>No data found!</div> : 
                    <div className="text-center">
                        <div className="flex justify-center items-center flex-row mb-5">
                            <svg className="w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 64C320 99.35 291.3 128 256 128C220.7 128 192 99.35 192 64C192 28.65 220.7 0 256 0C291.3 0 320 28.65 320 64zM288 160C323.3 160 352 188.7 352 224V272C352 289.7 337.7 304 320 304H318.2L307.2 403.5C305.4 419.7 291.7 432 275.4 432H236.6C220.3 432 206.6 419.7 204.8 403.5L193.8 304H192C174.3 304 160 289.7 160 272V224C160 188.7 188.7 160 224 160H288zM63.27 414.7C60.09 416.3 57.47 417.8 55.33 419.2C51.7 421.6 51.72 426.4 55.34 428.8C64.15 434.6 78.48 440.6 98.33 446.1C137.7 456.1 193.5 464 256 464C318.5 464 374.3 456.1 413.7 446.1C433.5 440.6 447.9 434.6 456.7 428.8C460.3 426.4 460.3 421.6 456.7 419.2C454.5 417.8 451.9 416.3 448.7 414.7C433.4 406.1 409.9 399.8 379.7 394.2C366.6 391.8 358 379.3 360.4 366.3C362.8 353.3 375.3 344.6 388.3 347C420.8 352.9 449.2 361.2 470.3 371.8C480.8 377.1 490.6 383.5 498 391.4C505.6 399.5 512 410.5 512 424C512 445.4 496.5 460.1 482.9 469C468.2 478.6 448.6 486.3 426.4 492.4C381.8 504.7 321.6 512 256 512C190.4 512 130.2 504.7 85.57 492.4C63.44 486.3 43.79 478.6 29.12 469C15.46 460.1 0 445.4 0 424C0 410.5 6.376 399.5 13.96 391.4C21.44 383.5 31.24 377.1 41.72 371.8C62.75 361.2 91.24 352.9 123.7 347C136.7 344.6 149.2 353.3 151.6 366.3C153.1 379.3 145.4 391.8 132.3 394.2C102.1 399.8 78.57 406.1 63.27 414.7H63.27z" /></svg>
                            <h1 className="mx-2">{citySearch}°</h1>
                        </div>
                        <h3>{data?.temperature}°Cel</h3>
                        <p className='text-slate-600'>humidity : {data?.humidity}°Cel | cloud : {data?.cloudcover}%</p>
                        {/* <div className="">
                            <div className="wave -one"></div>
                            <div className="wave -two"></div>
                            <div className="wave -three"></div>
                        </div> */}
                    </div>}
                </div>
            </div>
        </div>
    )
}
