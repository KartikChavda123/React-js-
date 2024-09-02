import React from 'react'

function Navbar() {
    return (
        <div className='a1'>
            <div className='a2'>
                <img src="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2021/01/Amaya-logo.png" alt="" />
            </div>
            <div className='a3'>
                <nav>
                    <a href="">HOME</a>
                    <a href="">PAGES</a>
                    <a href="">ARTICALE</a>
                    <a href="">WHOLESALE</a>
                    <a href="">SHOP</a>
                    <a href="">LOACTION</a>
                </nav>
            </div>
            <div className='a4'>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-bars"></i>
            </div>
        </div>
    )
}

export default Navbar