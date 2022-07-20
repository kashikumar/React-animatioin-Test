import React from 'react'

const blogcards = [
    {
        imgUrl: '/images/card-img.jpg',
        title: 'Title',
        cardbtn: 'Go somewhere',
    },
    {
        imgUrl: '/images/card-img.jpg',
        title: 'Title',
        cardbtn: 'Go somewhere',
    },
    {
        imgUrl: '/images/card-img.jpg',
        title: 'Title',
        cardbtn: 'Go somewhere',
    },
    {
        imgUrl: '/images/card-img.jpg',
        title: 'Title',
        cardbtn: 'Go somewhere',
    },
    {
        imgUrl: '/images/card-img.jpg',
        title: 'Title',
        cardbtn: 'Go somewhere',
    },
    {
        imgUrl: '/images/card-img.jpg',
        title: 'Title',
        cardbtn: 'Go somewhere',
    },
]

export const Blogs = () => {
    return (
        <div className="container-fluid my-3">
            <div className="row">
                <div className="col-sm-11 col-12 mx-auto">
                    <div className="row gy-4">
                        {blogcards.map((items) =>
                            <div className="col-md-4 col-sm-10 col-11 mx-auto">
                                <div className="card">
                                    <img class="card-img-top" src={items.imgUrl} alt="Card cap" />
                                    <div className="card-body">
                                        <div className="card-title">{items.title}</div>
                                        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                        <a href="/contact" className="btn btn-primary">{items.cardbtn}</a>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
