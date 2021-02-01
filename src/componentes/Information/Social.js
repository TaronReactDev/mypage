import React from 'react'
import FbIcon from "../png/facebook-logo.png"
import GitHube from "../png/github-logo.jpg"
import LInkedIn from "../png/linkedin.jpg"

export default function social() {
    return (
        <div className="social">
           <a  href="https://www.facebook.com/profile.php?id=100009434096713" target="_blank"><img src = {FbIcon}  alt = "FbIcon" className="Icon"/></a>
           <a  href="https://github.com/TaronReactDev" target="_blank"><img src = {GitHube} alt = "GitHube" className="Icon"/></a>
           <a  href="https://www.linkedin.com/in/taron-sargsyan-3226a2200/" target="_blank"><img src = {LInkedIn} alt = "LInkedIn" className="Icon"/></a>
           
        </div>
    )
}
