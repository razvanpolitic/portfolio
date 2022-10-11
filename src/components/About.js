import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
                <main id="main">
                    <section id="about" class="about">
                        <div class="container">

                            <div class="section-title">
                                <h2>About</h2>
                                <p>Going on the reasoning "ask not what the country can do for you — ask what you can do for the country", I am a person with a strong desire to succeed, affirmation and responsibility.
                                    During the projects I have been involved in so far, I have had the opportunity to successfully capitalize my organizational and communication skills, as well as teamwork, creativity and digital skills.</p>

                            </div>

                        </div>
                    </section>

                    <section id="skills" class="skills section-bg">
                    <div class="container">

                        <div class="section-title">
                            <h2>Skills</h2>
                        </div>

                        <div class="row skills-content">

                            <div class="col-lg-6">

                                <div class="progress">
                                    <span class="skill">Adobe Photoshop <i class="val">100%</i></span>
                                    <div class="progress-bar-wrap">
                                        <div class="progress-bar-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div class="progress">
                                    <span class="skill">Adobe InDesign <i class="val">90%</i></span>
                                    <div class="progress-bar-wrap">
                                        <div class="progress-bar-90" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div class="progress">
                                    <span class="skill">Adobe XD <i class="val">75%</i></span>
                                    <div class="progress-bar-wrap">
                                        <div class="progress-bar-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-6">

                                <div class="progress">
                                    <span class="skill">HTML <i class="val">90%</i></span>
                                    <div class="progress-bar-wrap">
                                        <div class="progress-bar-90" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div class="progress">
                                    <span class="skill">CSS <i class="val">75%</i></span>
                                    <div class="progress-bar-wrap">
                                        <div class="progress-bar-75" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div class="progress">
                                    <span class="skill">JavaScript <i class="val">60%</i></span>
                                    <div class="progress-bar-wrap">
                                        <div class="progress-bar-60" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <center>
                        <span class="skill">Graphic Design</span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <span class="skill">UX/UI Design</span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <span class="skill">Digital publishing</span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <span class="skill">Photography</span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <span class="skill">Video recording</span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <span class="skill">Audio production</span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <span class="skill">SEO</span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <span class="skill">Email marketing</span>
                        </center>
                        <br></br>
                        <hr></hr>
                    </div>
                </section>
                </main>
        )
    }
}

export default About
