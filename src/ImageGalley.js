import React from 'react'
import './ImageGalley.css'

const ImageGalley = ({ fetchData }) => {
    return (
        <div>
            <div className="images-wrapper">
                {fetchData.map((data) => (
                    <div className="image" key={data.id}>
                        <a href={data.pageURL} target="_blank" rel="noreferrer">
                            <img src={data.largeImageURL} alt=""></img>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageGalley