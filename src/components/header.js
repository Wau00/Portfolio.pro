/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import profile from '../images/profile2.png'
import profile2 from "../images/coding.png"
import ContactMe from "../components/hireme";
import tech from "../images/coding.png"
import resume from '../images/resume.pdf'

function header() {

    return (
        <div>
            <div class="navbar bg-base-100 mt-8">
                <div class="navbar-start mx-8">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="#Portfolio" className="texth">WORK</a></li>
                            <li><a href="#aboutme" className="texth">ABOUT ME </a></li>
                            <li><a className="texth" for="my-modal-h"><label class="modal-button texth" for="my-modal-h">CONTACT</label></a></li>
                            <li><a href={resume} target="_blank" rel="noreferrer" >RESUME </a></li>
                        </ul>
                    </div>
                    <div class="avatar online">
                        <div class="w-24 rounded-full">
                            <img src={profile2}></img>
                        </div>
                    </div>

                    <a href="/">
                        <div class="btn btn-ghost normal-case text-left">
                            <p>Walter<br /> Underwood <br /> <span className="text-xs font-light ">Full Stack Engineer</span></p>
                        </div>
                    </a>


                </div>
                <div class="navbar-end hidden lg:flex mx-8">
                    <ul class="menu menu-horizontal p-0">
                        <li><a href="#Portfolio" className="texth">WORK</a></li>
                        <li><a href="#aboutme" className="texth">ABOUT ME </a></li>
                        <li><a className="texth" for="my-modal-h"><label class="modal-button texth" for="my-modal-h">CONTACT</label></a></li>
                        <a class="btn" href={resume} target="_blank" rel="noreferrer" ><svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>RESUME </a>
                    </ul>
                </div>
            </div>

            {/* hero starts here  */}
            <div class="hero bg-base-100 mt-8 columns-3">
                <div class="hero-content flex-col lg:flex-row-reverse mx-8 ">
                    <div>
                        <img src={profile} class="max-w-sm rounded-l mx-8" />
                    </div>
                    <div className="text-left m-8">
                        <a>
                            <h2 className="text-3xl font-extralight ">Hello, I'm</h2>
                            <h1 class="text-5xl font-bold py-6 ">Walter Underwood</h1>
                            <p className=" text-2xl font-light">Full Stack Engineer</p>
                        </a>


                        {/* Social Media Icons */}
                        <div class="grid grid-flow-col gap-4 py-6 mx-6 ">
                            <a href="https://github.com/Wau00" target="_blank" rel="noreferrer" ><svg xmlns="http://www.w3.org/2000/svg"
                                width="34" height="34"
                                aria-label="GitHub" role="img"
                                viewBox="0 0 512 512"><rect
                                    width="512" height="512"
                                    rx="15%"
                                    fill="#1B1817" /><path fill="#fff" d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z" />
                            </svg></a>
                            <a href="https://www.instagram.com/underwooh/" target="_blank" rel="noreferrer"><svg width="34" height="34" viewBox="0 0 3364.7 3364.7" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <radialGradient id="0" cx="217.76" cy="3290.99" r="4271.92" gradientUnits="userSpaceOnUse">
                                        <stop offset=".09" stop-color="#fa8f21" /><stop offset=".78" stop-color="#d82d7e" />
                                    </radialGradient><radialGradient id="1" cx="2330.61" cy="3182.95" r="3759.33" gradientUnits="userSpaceOnUse">
                                        <stop offset=".64" stop-color="#8c3aaa" stop-opacity="0" /><stop offset="1" stop-color="#8c3aaa" /></radialGradient></defs>
                                <path d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9" fill="url(#0)" />
                                <path d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9" fill="url(#1)" />
                                <path d="M1269.25,1689.52c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7-416.6-186.59-416.6-416.7m-225.26,0c0,354.5,287.36,641.86,641.86,641.86s641.86-287.36,641.86-641.86-287.36-641.86-641.86-641.86S1044,1335,1044,1689.52m1159.13-667.31a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M1180.85,2707c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27S2059.13,666,2191,672c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M1170.5,447.09c-133.07,6.06-224,27.16-303.41,58.06-82.19,31.91-151.86,74.72-221.43,144.18S533.39,788.47,501.48,870.76c-30.9,79.46-52,170.34-58.06,303.41-6.16,133.28-7.57,175.89-7.57,515.35s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43s139.14,112.18,221.43,144.18c79.56,30.9,170.34,52,303.41,58.06,133.35,6.06,175.89,7.57,515.35,7.57s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2586.8,537.06,2504.71,505.15c-79.56-30.9-170.44-52.1-303.41-58.06C2068,441,2025.41,439.52,1686,439.52s-382.1,1.41-515.45,7.57" fill="#fff" />
                            </svg></a>
                            <a href="https://www.linkedin.com/in/walter-a-underwood-291524234/" target="_blank" rel="noreferrer"><svg width="34" height="34" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z" fill="#069" /><path d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z" fill="#fff" /></g>
                            </svg></a>
                            <a href="https://medium.com/@walonsounderwood" target="_blank" rel="noreferrer"><svg width="34" height="34" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                                <path d="M136,128c0,37.49512-28.71,68-64,68S8,165.49514,8,128,36.71,60,72,60,136,90.5049,136,128ZM240,64a8.00039,8.00039,0,0,0-8,8V184a8,8,0,0,0,16,0V72A8.00039,8.00039,0,0,0,240,64Zm-56,0c-5.68262,0-16.39941,2.76074-24.32373,21.251C154.72607,96.8008,152,111.98342,152,128s2.72607,31.19922,7.67627,42.749C167.60059,189.23928,178.31738,192,184,192s16.39941-2.76074,24.32373-21.251C213.27393,159.19924,216,144.01662,216,128s-2.72607-31.19922-7.67627-42.749C200.39941,66.76076,189.68262,64,184,64Z" />
                            </svg></a>
                        </div>
                        {/*  */}
                        <label class="btn rounded-full btn-sm sm:btn-sm md:btn-md  btn-primary modal-button" for="my-modal-h">Hire Me</label>
                        <a target="_blank" rel="noreferrer" href={resume}><button class="btn  rounded-full btn-sm sm:btn-sm md:btn-md btn-primary mt-8 mx-8 btn btn-outline"><svg class="fill-current w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg> RESUME</button></a>
                    </div>
                </div>
            </div>

            <input type="checkbox" id="my-modal-h" class="modal-toggle" />
            <div class="flex items-center justify-center modal">
                <div class=" card  flex-col lg:flex-row-reverse md:card-side lg:card-side bg-base-100 shadow-xl ">
                    <figure><img className=" w-2 md:w-96 lg:w-96 " src={tech} alt="Album"></img></figure>
                    <div class="card-body">
                        <h1 class="card-title text-xl font-bold">LET'S TALK </h1>
                        <h2 className="text-xs font-bold ">CALL ME OR SEND ME A MESSAGE</h2>
                        <div>
                            <div className="float-left">
                                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px"><path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z" /> </svg>
                            </div>
                            <div className=" mx-1 float-left">
                                (469) 662 2739
                            </div>
                        </div>

                        <div>
                            <div className="float-left">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px"><path d="M26.49,30H5.5A3.35,3.35,0,0,1,3,29a3.35,3.35,0,0,1-1-2.48V5.5A3.35,3.35,0,0,1,3,3,3.35,3.35,0,0,1,5.5,2h21A3.35,3.35,0,0,1,29,3,3.35,3.35,0,0,1,30,5.5v21A3.52,3.52,0,0,1,26.49,30Zm-2.62-6.9a1,1,0,0,0,.57-.19,1.23,1.23,0,0,0,.7-1.1V9.93A.93.93,0,0,0,25,9.4a1.32,1.32,0,0,0-1.13-.74H7.93a.69.69,0,0,0-.3.1A1.26,1.26,0,0,0,6.77,9.9V21.81a1,1,0,0,0,.17.55,1.28,1.28,0,0,0,1.12.74Zm-1.36-2.66H9.41V13L16,18.21,22.51,13ZM16,14.81c-2.89-2.28-4.37-3.46-4.44-3.52H20.4Z" /></svg>
                            </div>
                            <div className=" mx-1 float-left">
                                walowood@gmail.com
                            </div>
                        </div>
                        <ContactMe />
                        <label for="my-modal-h" class=" btn  absolute right-2 top-2 btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>

                    </div>
                </div>
            </div>
            <hr></hr>
        </div >

    )
}

export default header;