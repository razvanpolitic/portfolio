import React, { Component } from 'react'

export class Hero extends Component {
    render() {
        return (
            <div>
                <section id="hero" class="d-flex flex-column justify-content-end">
                    <div class="container">
                        <h1>Razvan Politic</h1>
                        <p>MULTIMEDIA DESIGN STUDENT </p>
                        <div class="social-links">
                            <a href="https://www.linkedin.com/in/razvanpolitic/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                            <a href="https://www.facebook.com/razvan.politic03" class="facebook"><i class="bx bxl-facebook"></i></a>
                            <a href="https://www.instagram.com/razvanpolitic/" class="instagram"><i class="bx bxl-instagram"></i></a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Hero
