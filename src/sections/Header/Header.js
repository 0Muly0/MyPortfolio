import React from "react"

import '../../styles.css';

import Navbar from "../../components/Navbar";

export default function Header() {
    return(
        <div className="flex-col">
            <div className="h-1/5 md:mx-16 lg:mx-24 xl:mx-56 flex justify-center"> {/* Top Section */}
                <Navbar />
            </div>
            <div className="md:mx-16 lg:mx-24 xl:mx-56 py-28 px-20 flex-col"> {/* Bottom Section */}
                <h1 className="text-9xl">
                   Lucia <br/>
                   Famoso
                </h1>
                <p className="text-4xl italic py-3">
                    IT Engineering student and front end developer
                </p>
            </div>
        </div>
    )
}