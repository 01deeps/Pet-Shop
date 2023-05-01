import React from 'react';
import './style.css'
function About() {
    return(
        <div className='about'>
            <center>
                <h1>TN-52 PET SHOP</h1>
                <p>SVT Complex, Salem main road,<br/>Sankari- 637 303, Tamilnadu<br/>
                <i class="bi bi-telephone-fill"></i> Mobile no : 9500689580</p>
                <iframe width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Centuary%2019%20THIRUNAGAR%20COLONY%204TH%20STREET,%20Tamil%20Nadu%20638003&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </center>
        </div>
    )
}
export default About;