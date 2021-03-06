import React from 'react'
import { Link } from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import propTypes from 'prop-types'

function Room({room}) {

    const {name, price, slug, images} = room

    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="Single Room"/>

                <div className="price-top">
                    <h6>{price}</h6>
                    <p>Per Night</p>
                </div>

                <Link to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link>
            </div>
            <p className="room-info">{ name }</p>
        </article>
    )
}

export default Room

Room.propTypes = {
    room: propTypes.shape({
        name: propTypes.string.isRequired,
        slug: propTypes.string.isRequired,
        images: propTypes.arrayOf(propTypes.string).isRequired,
        price: propTypes.number.isRequired
    })
}
