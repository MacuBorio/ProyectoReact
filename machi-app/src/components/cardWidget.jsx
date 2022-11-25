import React from "react";

const CardWidget = () => {
    return (
        <div>
            <button type="button" className="btn btn-light position-relative">
                <img src="cart3.svg" alt="" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    3
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
        </div>
    )
}

export default CardWidget;