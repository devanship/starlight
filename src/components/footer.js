import React from "react"

import '../assets/styles/main.scss'

const Footer = () => {
    return (
        <div className="uk-flex-bottom uk-sticky-fixed" uk-sticky="bottom:0">
            <ul class="uk-iconnav">
                <li className="uk-flex uk-flex-center uk-flex-middle uk-margin-small-right"><a href="https://m.facebook.com/starlightbrooklyn/" uk-icon="facebook"></a></li>
                <li className="uk-flex uk-flex-center uk-flex-middle uk-margin-small-right"><a href="https://www.instagram.com/starlightnyc/?hl=en" uk-icon="instagram"></a></li>
                <li className="uk-flex uk-flex-center uk-flex-middle uk-margin-small-right"><a href="" uk-icon="spotify"></a></li>
            </ul>
        </div>
    )
}


export default Footer