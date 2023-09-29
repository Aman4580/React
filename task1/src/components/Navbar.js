import React from 'react';

import"./navbar.css"


const Navbar =() =>{
    return(
        <>
            <nav classNmae="main-nav">
            {/* first logo part*/}
            <div className="logo">
                <h2>
                    <span>C</span>all
                    <span> U</span>s
                    <p>1300 779 438</p>
                </h2>
            </div>
            {/*2nd menu part */}
            <div classNanme="menu-link-1">
                <ul>
                    <li>
                    <a href="# ">WHY SWIFT TRANSPORT</a>
                    </li>
                    <li>
                    <a href="# ">FLEET</a>
                    </li>
                    <li>
                    <a href="# ">COMPANY POLICIES</a>
                    </li>
                    <li>
                    <a href="# ">ABOUT US</a>
                    </li>
                    <li>
                    <a href="# "> CONTACT US</a>
                    </li>
                </ul>
            </div>
            <div classNanme="menu-link-2">
                <ul>
                    <li>
                    <a href="# ">Swift Intermodal</a>
                    </li>
                    <li>
                    <a href="# ">Container Transport Solutions</a>
                    </li>
                    <li>
                    <a href="# ">Complete Warehousing Solutions</a>
                    </li>
                    
                </ul>
            </div>
        </nav>
        {/* introduction section */}
        <section className="section1">
            <p>Cheaper delivery costs through
innovative vehicle design</p>
        </section>
        <section className="section2">
            <p>OUR 1 TONNE VEHICLES CAN HANDLE WHAT OTHERS CAN’T. YOU'LL BE PLEASANTLY SUPRISED</p>
        </section>
    
        <section className="section3">
            <p>Taxi and Courier truck</p>
        </section>
        </>
    );
};
export default Navbar
