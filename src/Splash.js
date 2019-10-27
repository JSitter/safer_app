import React from 'react';

function Splash(){
    return (
        <section>
            <section className="hero-block">
                <h2>Be Safer with Safer App</h2>
                <p>
                We made a cross-platform app that addresses climate change on a global scale through citizen science and a driving force behind volunteer disaster relief. Using innovative tools, we build flash communities for crisis response and encourage long term climate change solutions.
                </p>
            </section>

            <section className="hero-block parallax">
            <h2>Check out our maps!</h2>
            <p>
            Our maps incorporate multiple APIs and updates in real time, pulling data from NASA and from an API that tracks air quality. We encourage you participate and spread awareness of climate change by contributing your own data to the air quality layer of the map. We built a device for you to record air quality in your very own location. Once you sign up, you will have the capability to connect your device to the map, as well as participate in disaster relief and other environmental initiatives.
            </p>
            </section>
        </section>
    )
}

export default Splash;
