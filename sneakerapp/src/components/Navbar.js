import React from "react"

export default function Navbar(props) {
    return (
        <>
            <nav>
                <div className="nav--firstline">
                    <div className="nav--title">.sneakers</div>
                    <div className="input-group mb-3 nav--search-bar">
                        <input type="text" className="form-control nav--search-input" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <span className="input-group-append">
                            <button className="btn btn-outline-secondary nav--search-icon" type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </span>
                    </div>
                    <div className="nav--cart">
                        <i className="fa-duotone fa-shopping-cart fa nav--cart-icon"></i>
                        <i className="fa-duotone fa-heart fa nav--wishlist"></i>
                    </div>
                </div>
                <div className='nav--secondline'>
                    <a className="nav--categories" onClick={()=>props.changeTab('AIRFORCE')}>AIR FORCE</a>
                    <a className="nav--categories" onClick={()=>props.changeTab('JORDAN')}>JORDAN</a>
                    <a className="nav--categories" onClick={()=>props.changeTab('BLAZER')}>BLAZER</a>
                    <a className="nav--categories" onClick={()=>props.changeTab('CRATER')}>CRATER</a>
                    <a className="nav--categories" onClick={()=>props.changeTab('HIPPIE')}>HIPPIE</a>
                </div>
            </nav>
        </>
    )
}