import React, { useLayoutEffect, useState } from 'react'

export const Covid = () => {

    const [data, setData] = useState()

    const getCovidData = async () => {
        try {
            const covidData = await fetch("https://data.covid19india.org/data.json")
            const actualData = await covidData.json();
            console.log(actualData);
            setData(actualData.statewise[0]);
        } catch (error) {
            console.log(error);
        }
    }

    useLayoutEffect(() => {
        getCovidData();
    }, [])

    return (
        <div className="col-10 mx-auto">
            <section>
                <h3 className="flex justify-center items-center"><span className="text-[8px] mr-2 animate-ping">🔴</span> LIVE</h3>
                <h4 className="text-center">COVID-19 CORONAVIRUS TRACKER</h4>

                <div className="my-4">
                    <div className="row">
                        <div className="col-sm-11 col-12 mx-auto">
                            <div className="row gy-4">
                                <div className="col-md-4 col-sm-10 col-11 mx-auto">
                                    <div className="min-h-[25vh] p-2 h-full text-center bg-slate-300 text-slate-700">
                                        <h2><span className="text-lg mx-1">Total</span>Country</h2>
                                        <div>
                                            <h1>INDIA</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-10 col-11 mx-auto">
                                    <div className="min-h-[25vh] p-2 h-full text-center bg-sky-300 text-sky-700">
                                        <h2><span className="text-lg mx-1">Total</span>Confirmed</h2>
                                        <div>
                                            <h1>{data?.confirmed}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-10 col-11 mx-auto">
                                    <div className="min-h-[25vh] p-2 h-full text-center bg-green-300 text-green-700">
                                        <h2><span className="text-lg mx-1">Total</span>Active</h2>
                                        <div>
                                            <h1>{data?.active}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-10 col-11 mx-auto">
                                    <div className="min-h-[25vh] p-2 h-full text-center bg-amber-300 text-amber-700">
                                        <h2><span className="text-lg mx-1">Total</span>Recovered</h2>
                                        <div>
                                            <h1>{data?.recovered}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-10 col-11 mx-auto">
                                    <div className="min-h-[25vh] p-2 h-full text-center bg-purple-300 text-purple-700">
                                        <h2><span className="text-lg mx-1">Total</span>Deaths</h2>
                                        <div>
                                            <h1>{data?.deaths}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-10 col-11 mx-auto">
                                    <div className="min-h-[25vh] p-2 h-full text-center bg-red-300 text-red-700">
                                        <h2><span className="text-lg mx-1">Total</span>Update</h2>
                                        <div>
                                            <h1>{data?.lastupdatedtime}</h1>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
