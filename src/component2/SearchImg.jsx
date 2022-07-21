import React, { useState } from 'react'

export const SearchImg = () => {
    const [SearchImg, setSearchImg] = useState()

    const ChangeImg = (e) => {
        const data = e.target.value;
        setSearchImg(data)
    }
    // useLayoutEffect(() => {
    //     ChangeImg();
    // }, [])

    const imgUrl = `https://source.unsplash.com/random/1920x1080/?${SearchImg}`;
    return (
        <div>
            <div className="col-lg-4 col-md-5 col-sm-6 col-10 mx-auto h-full flex flex-col items-center">
                <div className="col-10 my-5 mx-auto">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" name="searchImg" value={SearchImg} onChange={ChangeImg} type="search" placeholder="Search" />
                        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                </div>
                <div className="col-12">
                    <img src={imgUrl} alt={imgUrl} />
                </div>
            </div>
        </div>
    )
}
