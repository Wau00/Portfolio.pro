import React from "react";
import profile from '../images/me2.png'
import resume from '../images/resume.pdf'

function aboutme() {
    return (
        <>
            <hr></hr>
            <div class="hero min-h-max bg-base-100 mt-8 columns-3">
                <div class="hero-content flex-col lg:flex-row mx-8 ">
                    <div>
                        <img src={profile} alt="hello" class="max-w-6xl rounded-l mx-8" />
                    </div>
                    <div className="text-left">
                        <h2 className="text-3xl font-bold ">ABOUT ME</h2>
                        <h1 class="text-7xl font-bold titlel ">WHO AM I </h1>

                        {/* Social Media Icons */}
                        <div class="grid grid-flow-col gap-4 py-6 mx-6 ">
                            <div>
                                <p>I am an outgoing, dedicated and enthusiastic entry-level Full-Stack developer, eager to contribute to the team's success through hard work, attention to detail and excellent organizational skills.
                                    I believe that people should work on developing their professional skills and learn new things all the time. I have a clear understanding of Front-End and Back-End. Motivated to learn, grow and succeed in the technology industry.
                                </p>
                            </div>
                        </div>

                        <label class="btn rounded-full btn-sm sm:btn-sm md:btn-md  btn-primary modal-button" for="my-modal-h">Hire Me</label>
                        <a target="_blank" rel="noreferrer" href={resume}><button class="btn  rounded-full btn-sm sm:btn-sm md:btn-md btn-primary mt-8 mx-8 btn btn-outline"><svg class="fill-current w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg> RESUME</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default aboutme