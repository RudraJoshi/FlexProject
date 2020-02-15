import React from 'react'
import './Root.css'
import {Route} from 'react-router-dom'

import Col01 from './Col01/Col01'
import Col02 from './Col02/Col02'
import Col03 from './Col03/Col03'
import Col04 from './Col04/Col04'


function Root() {
    return (
        <div className="nav-bar">
            <nav>
                    
            </nav>            
            <Col01 />
            <Col02 />
            <Col03 />
            <Col04 />
        </div>
    )
}

export default Root
