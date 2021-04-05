import React from 'react'
import "./MenuBtn.css"


function MenuBtn(props) {
    return (
        <div className={`menu-btn-container ${props.hidden}`}>
          <button onClick={props.showMenu} className="menu">Menu</button>
        </div>
    )
}

export default MenuBtn
