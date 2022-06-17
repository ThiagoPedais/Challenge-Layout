import React from 'react'
import './style.scss'

type Props = {
    text: String
}

const Button = ({ text }: Props) => {
    return (
        <div className="btn-container">
            <button className="btn btn-primary btn-icon">
                <h6>{text}</h6>
            </button>
        </div>
    );
}


export default Button;
