import React from 'react'
import myimg from "../../img/my.jpg"

const Header = () => {
  return (
    <div className='main-box'>
        <div id="c1">
            <h3>Bus Details</h3>
        </div>
        <div id="c2">
                <div>
                    <div>
                        <h2>Prashant</h2>
                    </div>
                    <div>
                        <h4>Admin</h4>
                    </div>
                </div>
                {/* image icon */}
                <div>
                    <img src={myimg} alt="myimg" />
                </div>
        </div>
    </div>
  )
}

export default Header