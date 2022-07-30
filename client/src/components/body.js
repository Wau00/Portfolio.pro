import React from "react";
import social from "../images/social.png"
import tech from "../images/tech.png"
import tracker from "../images/tracker.png"
import memo from "../images/memo.png"
import books from "../images/books.png"
import weather from "../images/weather.png"
import notes from "../images/notes.png"
import shop from "../images/shop.png"
import quiz from "../images/quiz.png"
import Animated from "../images/web.png"
import Coding from "../images/coding.png"
function body() {
    return (
        <>

            <hr></hr>
            <div id="Portfolio" className="">
                <div className="mx-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 columns-3xs md:mx-28 lg:mx-44 2xl:mx-96 justify-center place-items-center">
                    <h1 class="text-5xl font-bold py-6 ">Portfolio</h1>
                </div>
                <div className=" mx-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 columns-3xs md:mx-28 lg:mx-44 2xl:mx-96 justify-center place-items-center">
                    {/* MODALS */}


                    {/* MODALS-1  */}
                    <input type="checkbox" id="my-modal" class=" modal-toggle" />
                    <div class="flex items-center justify-center modal">
                        <div class=" card  md:card-side lg:card-side bg-base-100 shadow-xl ">
                            <figure><img src={social} alt="Album"></img></figure>
                            <div class="card-body">
                                <h1 class="card-title">SOCIAL BURGER</h1>
                                <h2><span className="text-s font-light ">Model-View-Controller || 2022 </span></h2>
                                <p>Social Burger is a site in which users interact with each other by sharing their own customized burger.
                                    On social burger, our main goal is to connect with people around the globe with creativity and innovation.
                                    In this app users are greeted by the home page with posted burgers.
                                    The user is promted to login before they are able to create their own burger or comment on a burger. If the user does not already have an account, they can register.
                                    After that the user my comment on burgers, like them, create their own, and viewe burgers that they have previously made if applicable</p>
                                <br></br>
                                <br></br>
                                <div className="justify-end">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Handlebars</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Bootstrap</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML5</span>
                                </div>
                                <div className="justify-end">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Express.js</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MYSQL</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Javascript</span>
                                </div>
                                <div class="card-actions justify-center">
                                    <a href="https://social-burger.herokuapp.com/" target="_blank" rel="noreferrer">
                                        <div class="tooltip" data-tip="website">
                                            <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Animated}></img> </button>
                                        </div>
                                    </a>
                                    <a href="https://github.com/Wau00/Social-Burger-P02" target="_blank" rel="noreferrer">
                                        <div class="tooltip" data-tip="repository">
                                            <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Coding}></img></button>
                                        </div>
                                    </a>
                                    <div class="tooltip" data-tip="close">
                                        <label for="my-modal" class=" btn  btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" overflow-visible relative -left-6 -top-6 z-3 bg-transparent">
                            <a href="https://social-burger.herokuapp.com/" target="_blank" rel="noreferrer">
                                <div class="tooltip" data-tip="website">
                                    <button className=" hvr-grow btn btn-ghost btn-circle"><img alt="hello" className="" src={Animated}></img> </button>
                                </div>
                            </a>
                            <br></br>
                            <a href="https://github.com/Wau00/Social-Burger-P02" target="_blank" rel="noreferrer">
                                <div class="tooltip" data-tip="repository">
                                    <button className=" hvr-grow btn btn-ghost btn-circle"><img alt="hello" className="" src={Coding}></img></button>
                                </div>
                            </a>
                            <br></br>
                            <div class="tooltip" data-tip="close">
                                <label for="my-modal" class=" btn   btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                            </div>
                        </div>
                    </div>


                    {/* MODALS-2 */}
                    <input type="checkbox" id="my-modal-2" class=" modal-toggle" />
                    <div class="flex items-center justify-center modal">
                        <div class=" card  md:card-side lg:card-side bg-base-100 shadow-xl ">
                            <figure><img src={tech} alt="Album"></img></figure>
                            <div class="card-body">
                                <h1 class="card-title">TECH BLOG</h1>
                                <h2><span className="text-s font-light ">Model-View-Controller || 2022 </span></h2>
                                <p>Similar to a Wordpress site, TECH BLOG is a website  where developers can publish their blog posts and comment on other developers’ posts as well.
                                    This site was build completely from scratch and deploy it to Heroku. The app  follows the MVC paradigm in its architectural structure,
                                    using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication</p>
                                <br></br>
                                <br></br>
                                <div className="justify-end">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Bootstrap</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Handlebars</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML5</span>
                                </div>
                                <div className="justify-end">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Sequelize</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MYSQL</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Express.JS</span>
                                </div>
                                <div class="card-actions justify-center">
                                    <a href="https://techblogwau.herokuapp.com/" target="_blank" rel="noreferrer">
                                        <div class="tooltip" data-tip="website">
                                            <button className=" hvr-grow btn btn-ghost btn-circle"><img alt="hello" className="" src={Animated}></img> </button>
                                        </div>
                                    </a>
                                    <a href="https://github.com/Wau00/TechBlog-MVC-HW-14" target="_blank" rel="noreferrer">
                                        <div class="tooltip" data-tip="repository">
                                            <button className=" hvr-grow btn btn-ghost btn-circle"><img alt="hello" className="" src={Coding}></img></button>
                                        </div>
                                    </a>
                                    <div class="tooltip" data-tip="close">
                                        <label for="my-modal-2" class=" btn  btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" overflow-visible relative -left-6 -top-6 z-3 bg-transparent">

                            <a href="https://techblogwau.herokuapp.com/" target="_blank" rel="noreferrer">
                                <div class="tooltip" data-tip="website">
                                    <button className=" hvr-grow btn btn-ghost btn-circle"><img alt="hello" className="" src={Animated}></img> </button>
                                </div>
                            </a>
                            <br></br>
                            <a href="https://github.com/Wau00/TechBlog-MVC-HW-14" target="_blank" rel="noreferrer">
                                <div class="tooltip" data-tip="repository">
                                    <button className=" hvr-grow btn btn-ghost btn-circle"><img alt="hello" className="" src={Coding}></img></button>
                                </div>
                            </a>
                            <br></br>
                            <div class="tooltip" data-tip="close">
                                <label for="my-modal-2" class=" btn   btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                            </div>
                        </div>
                    </div>


                    {/* MODAL-3 */}
                    <input type="checkbox" id="my-modal-3" class=" modal-toggle" />
                    <div class="flex items-center justify-center modal">
                        <div class=" card  md:card-side lg:card-side bg-base-100 shadow-xl ">
                            <figure><img src={tracker} alt="Album"></img></figure>
                            <div class="card-body">
                                <h1 class="card-title">INVETSMENT TRACKER </h1>
                                <h2><span className="text-s font-light ">Server Side APIs || 2022 </span></h2>
                                <p>This platform was created with the intention of making it easy for any user curious about the current stock market. The search bar function allows the user to add a stock they would like to track.
                                    The watchlist then generates correlating news articles updating the user of current prices,data and other important details.
                                    The easy navigation in this application allows the user to focus solely on the stock(s) they are trying to follow. This allows for easy grasping of the stock market.</p>
                                <br></br>
                                <br></br>
                                <div className="justify-end">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Javascript</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Bulma</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML5</span>
                                </div>
                                <div className="justify-end">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JQuery</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Chart.js</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fetch</span>
                                </div>
                                <div class="card-actions justify-center">
                                    <a href="https://wau00.github.io/laaw-investment-tracker-P01/" target="_blank" rel="noreferrer">
                                        <div class="tooltip" data-tip="website">
                                            <button className=" hvr-grow btn btn-ghost btn-circle"><img alt="hello" className="" src={Animated}></img> </button>
                                        </div>
                                    </a>
                                    <a href="https://github.com/Wau00/laaw-investment-tracker-P01" target="_blank" rel="noreferrer">
                                        <div class="tooltip" data-tip="repository">
                                            <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Coding}></img></button>
                                        </div>
                                    </a>
                                    <div class="tooltip" data-tip="close">
                                        <label for="my-modal-3" class=" btn  btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" overflow-visible relative -left-6 -top-6 z-3 bg-transparent">

                            <a href="https://wau00.github.io/laaw-investment-tracker-P01/" target="_blank" rel="noreferrer">
                                <div class="tooltip" data-tip="website">
                                    <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Animated}></img> </button>
                                </div>
                            </a>
                            <br></br>
                            <a href="https://github.com/Wau00/laaw-investment-tracker-P01" target="_blank" rel="noreferrer">
                                <div class="tooltip" data-tip="repository">
                                    <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Coding}></img></button>
                                </div>
                            </a>
                            <br></br>
                            <div class="tooltip" data-tip="close">
                                <label for="my-modal-3" class=" btn   btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                            </div>
                        </div>
                    </div>


                    {/* MODAL-4 */}
                    <input type="checkbox" id="my-modal-4" class=" modal-toggle" />
                    <div class="flex items-center justify-center modal">
                        <div class=" card  md:card-side lg:card-side bg-base-100 shadow-xl ">
                            <figure><img src={memo} alt="Album"></img></figure>
                            <div class="card-body">
                                <h1 class="card-title">MEMORIZE.ME</h1>
                                <h2><span className="text-s font-light ">React.JS || 2022 </span></h2>
                                <p> This MERN stack single-page application, consist in a variety of memory games that helps you train and test your brain. Each game is designed to help you increase your memory. The users have the ability to save their score
                                    and compare it with other players. This app combine a scalable MongoDB back end, a GraphQL API, and an Express.js and Node.js server with a React front end,
                                    implementing user authentication with JWT to build a user-focused platform.</p>
                                <br></br>
                                <br></br>
                                <div className="justify-end">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                                </div>
                                <div className="justify-end">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                                </div>
                                <div class="card-actions justify-center">
                                    <a href="https://brain-stimuli.herokuapp.com/" target="_blank" rel="noreferrer">
                                        <div class="tooltip" data-tip="website">
                                            <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Animated}></img> </button>
                                        </div>
                                    </a>
                                    <a href="https://github.com/Wau00/memorize-me" target="_blank" rel="noreferrer">
                                        <div class="tooltip" data-tip="repository">
                                            <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Coding}></img></button>
                                        </div>
                                    </a>
                                    <div class="tooltip" data-tip="close">
                                        <label for="my-modal-4" class=" btn  btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" overflow-visible relative -left-6 -top-6 z-3 bg-transparent">

                            <a href="https://brain-stimuli.herokuapp.com/" target="_blank" rel="noreferrer">
                                <div class="tooltip" data-tip="website">
                                    <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Animated}></img> </button>
                                </div>
                            </a>
                            <br></br>
                            <a href="https://github.com/Wau00/memorize-me" target="_blank" rel="noreferrer">
                                <div class="tooltip" data-tip="repository">
                                    <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Coding}></img></button>
                                </div>
                            </a>
                            <br></br>
                            <div class="tooltip" data-tip="close">
                                <label for="my-modal-4" class=" btn   btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                            </div>
                        </div>
                    </div>


                    {/* MODAL-5 */}
                    <input type="checkbox" id="my-modal-5" class=" modal-toggle" />
                    <div class="flex items-center justify-center modal">
                        <div class=" card  md:card-side lg:card-side bg-base-100 shadow-xl ">
                            <figure><img src={books} alt="Album"></img></figure>
                            <div class="card-body">
                                <h1 class="card-title">BOOK SEARCH ENGINE</h1>
                                <h2><span className="text-s font-light ">GraphQL || 2022 </span></h2>
                                <p>This website is a Book Searcher Library using the Google Books API search engine GraphQL API and Apollo Server.
                                    The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API</p>
                                <br></br>
                                <br></br>
                                <div className="justify-end">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                                </div>
                                <div className="justify-end">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                                </div>
                                <div class="card-actions justify-center">
                                    <a href="https://frozen-everglades-20734.herokuapp.com/" target="_blank" rel="noreferrer">
                                        <div class="tooltip" data-tip="website">
                                            <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Animated}></img> </button>
                                        </div>
                                    </a>
                                    <a href="https://github.com/Wau00/Book-Search-Engine-HW-21" target="_blank" rel="noreferrer">
                                        <div class="tooltip" data-tip="repository">
                                            <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello"src={Coding}></img></button>
                                        </div>
                                    </a>
                                    <div class="tooltip" data-tip="close">
                                        <label for="my-modal-5" class=" btn  btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" overflow-visible relative -left-6 -top-6 z-3 bg-transparent">

                            <a href="https://frozen-everglades-20734.herokuapp.com/" target="_blank" rel="noreferrer">
                                <div class="tooltip" data-tip="website">
                                    <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Animated}></img> </button>
                                </div>
                            </a>
                            <br></br>
                            <a href="https://github.com/Wau00/Book-Search-Engine-HW-21" target="_blank" rel="noreferrer">
                                <div class="tooltip" data-tip="repository">
                                    <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Coding}></img></button>
                                </div>
                            </a>
                            <br></br>
                            <div class="tooltip" data-tip="close">
                                <label for="my-modal-5" class=" btn   btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                            </div>
                        </div>
                    </div>


                    {/* MODAL-6 */}
                    <input type="checkbox" id="my-modal-6" class=" modal-toggle" />
                    <div class="flex items-center justify-center modal">
                        <div class=" card  md:card-side lg:card-side bg-base-100 shadow-xl ">
                            <figure><img src={weather} alt="Album"></img></figure>
                            <div class="card-body">
                                <h1 class="card-title">WEATHER APP </h1>
                                <h2><span className="text-s font-light ">SERVER-SIDE APIS || 2022 </span></h2>
                                <p>For this project the challenge was to build a weather dashboard using the OpenWeather API to retrieve weather data for cities.
                                    using localStorage to store any persistent data, and let the user see the weather outlook for multiple cities. The parameters this app shows are:
                                    City name, icons , UV index, and 5-day forecast for future conditions. As well, a search history is created using local storage and when the user clicks on the previous cities is again presented with current and future conditions for
                                    The browser feature dynamically updated HTML and CSS. </p>
                                <br></br>
                                <br></br>
                                <div className="justify-end">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JQuery</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Moment.js</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#AJAx</span>
                                </div>
                                <div className="justify-end">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Bootstrap</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML5</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CSS</span>
                                </div>
                                <div class="card-actions justify-center">
                                    <a href="https://wau00.github.io/Server-Side-APIs-HW-06/?" target="_blank" rel="noreferrer">
                                        <div class="tooltip" data-tip="website">
                                            <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Animated}></img> </button>
                                        </div>
                                    </a>
                                    <a href="https://github.com/Wau00/Server-Side-APIs-HW-06" target="_blank" rel="noreferrer">
                                        <div class="tooltip" data-tip="repository">
                                            <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Coding}></img></button>
                                        </div>
                                    </a>
                                    <div class="tooltip" data-tip="close">
                                        <label for="my-modal-6" class=" btn  btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" overflow-visible relative -left-6 -top-6 z-3 bg-transparent">

                            <a href="https://wau00.github.io/Server-Side-APIs-HW-06/?" target="_blank" rel="noreferrer">
                                <div class="tooltip" data-tip="website">
                                    <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Animated}></img> </button>
                                </div>
                            </a>
                            <br></br>
                            <a href="https://github.com/Wau00/Server-Side-APIs-HW-06" target="_blank" rel="noreferrer">
                                <div class="tooltip" data-tip="repository">
                                    <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Coding}></img></button>
                                </div>
                            </a>
                            <br></br>
                            <div class="tooltip" data-tip="close">
                                <label for="my-modal-6" class=" btn   btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                            </div>
                        </div>
                    </div>


                    {/* MODAL-7 */}
                    <input type="checkbox" id="my-modal-7" class=" modal-toggle" />
                    <div class="flex items-center justify-center modal">
                        <div class=" card  md:card-side lg:card-side bg-base-100 shadow-xl ">
                            <figure><img src={notes} alt="Album"></img></figure>
                            <div class="card-body">
                                <h1 class="card-title">NOTES TAKER</h1>
                                <h2><span className="text-s font-light ">EXPRESS.JS || 2022 </span></h2>
                                <p>On this project, we build a Notes Taker. The app has the ability of create, save, and delete notes on the page just by clicking on the designated buttons.
                                    This application will use an Express.js back end and will save and retrieve note data from a JSON file. the deployed app is hosted using Heroku technology.</p>
                                <br></br>
                                <br></br>
                                <div className="justify-end">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Javascript</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML5</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Bootstrap</span>
                                </div>
                                <div className="justify-end">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Express.js</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Node.js</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
                                </div>
                                <div class="card-actions justify-center">
                                    <a href="https://glacial-peak-13098.herokuapp.com/" target="_blank" rel="noreferrer">
                                        <div class="tooltip" data-tip="website">
                                            <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Animated}></img> </button>
                                        </div>
                                    </a>
                                    <a href="https://github.com/Wau00/Note-Taker-ExpressJs-HW-11" target="_blank" rel="noreferrer">
                                        <div class="tooltip" data-tip="repository">
                                            <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Coding}></img></button>
                                        </div>
                                    </a>
                                    <div class="tooltip" data-tip="close">
                                        <label for="my-modal-7" class=" btn  btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" overflow-visible relative -left-6 -top-6 z-3 bg-transparent">

                            <a href="https://glacial-peak-13098.herokuapp.com/" target="_blank" rel="noreferrer">
                                <div class="tooltip" data-tip="website">
                                    <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Animated}></img> </button>
                                </div>
                            </a>
                            <br></br>
                            <a href="https://github.com/Wau00/Note-Taker-ExpressJs-HW-11" target="_blank" rel="noreferrer">
                                <div class="tooltip" data-tip="repository">
                                    <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Coding}></img></button>
                                </div>
                            </a>
                            <br></br>
                            <div class="tooltip" data-tip="close">
                                <label for="my-modal-7" class=" btn   btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                            </div>
                        </div>
                    </div>


                    {/* MODAL-8 */}
                    <input type="checkbox" id="my-modal-8" class=" modal-toggle" />
                    <div class="flex items-center justify-center modal">
                        <div class=" card  md:card-side lg:card-side bg-base-100 shadow-xl ">
                            <figure><img src={shop} alt="Album"></img></figure>
                            <div class="card-body">
                                <h1 class="card-title">E-COMMERCE BACKEND</h1>
                                <h2><span className="text-s font-light ">MYSQL || 2022 </span></h2>
                                <p>In this project, we build the back end for an e-commerce site and save products, categories and tags on mysql databse.
                                    The routes were build with express.js and have the functionality of create, read, update, and delete product information such as price,  names,and availability.
                                    This application back-end was build with node.js, and multiple npm packages (mysql2, and sequelize) the deployed app was tested using Insomnia Technology.</p>
                                <br></br>
                                <br></br>
                                <div className="justify-end">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Express.js</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Imsomnia</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Javascript</span>
                                </div>
                                <div className="justify-end">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Node.js</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MYSQL</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Sequelize</span>
                                </div>
                                <div class="card-actions justify-center">
                                    <a href="https://user-images.githubusercontent.com/99919050/166874240-46403e79-efd9-4d8d-86af-f24d1a33951a.mp4" target="_blank" rel="noreferrer">
                                        <div class="tooltip" data-tip="website">
                                            <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Animated}></img> </button>
                                        </div>
                                    </a>
                                    <a href="https://github.com/Wau00/ECommerce-BackEnd-ORM-HW-13" target="_blank" rel="noreferrer">
                                        <div class="tooltip" data-tip="repository">
                                            <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Coding}></img></button>
                                        </div>
                                    </a>
                                    <div class="tooltip" data-tip="close">
                                        <label for="my-modal-8" class=" btn  btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" overflow-visible relative -left-6 -top-6 z-3 bg-transparent">

                            <a href="https://user-images.githubusercontent.com/99919050/166874240-46403e79-efd9-4d8d-86af-f24d1a33951a.mp4" target="_blank" rel="noreferrer">
                                <div class="tooltip" data-tip="website">
                                    <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Animated}></img> </button>
                                </div>
                            </a>
                            <br></br>
                            <a href="https://github.com/Wau00/ECommerce-BackEnd-ORM-HW-13" target="_blank" rel="noreferrer">
                                <div class="tooltip" data-tip="repository">
                                    <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Coding}></img></button>
                                </div>
                            </a>
                            <br></br>
                            <div class="tooltip" data-tip="close">
                                <label for="my-modal-8" class=" btn   btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                            </div>
                        </div>
                    </div>


                    {/* MODAL-9 */}
                    <input type="checkbox" id="my-modal-9" class=" modal-toggle" />
                    <div class="flex items-center justify-center modal">
                        <div class=" card  md:card-side lg:card-side bg-base-100 shadow-xl ">
                            <figure><img src={quiz} alt="Album"></img></figure>
                            <div class="card-body">
                                <h1 class="card-title">CODE QUIZ</h1>
                                <h2><span className="text-s font-light ">JavaScript || 2022 </span></h2>
                                <p>APIs are sets of protocols that are integrated into applications or platforms to carry out certain processes.
                                    In this project we tested APIs to build a trivia/quiz in JavaScript.Our program will be able to perform specific functions, taking into account external elements to the main function.
                                    These elements include: buttons, timer, final result, alerts, final result record, and the ability to store information in our local storage.</p>
                                <br></br>
                                <br></br>
                                <div className="justify-end">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Javascript</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML5</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CSS</span>
                                </div>
                                <div className="justify-end">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#LocalStorage</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#WebAPIs</span>
                                </div>
                                <div class="card-actions justify-center">
                                    <a href="https://github.com/Wau00/Web-APIs-Code-Quiz-HW-04" target="_blank" rel="noreferrer">
                                        <div class="tooltip" data-tip="website">
                                            <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Animated}></img> </button>
                                        </div>
                                    </a>
                                    <a href="https://github.com/Wau00/Web-APIs-Code-Quiz-HW-04" target="_blank" rel="noreferrer">
                                        <div class="tooltip" data-tip="repository">
                                            <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Coding}></img></button>
                                        </div>
                                    </a>
                                    <div class="tooltip" data-tip="close">
                                        <label for="my-modal-9" class=" btn  btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" overflow-visible relative -left-6 -top-6 z-3 bg-transparent">

                            <a href="https://github.com/Wau00/Web-APIs-Code-Quiz-HW-04" target="_blank" rel="noreferrer">
                                <div class="tooltip" data-tip="website">
                                    <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Animated}></img> </button>
                                </div>
                            </a>
                            <br></br>
                            <a href="https://github.com/Wau00/Web-APIs-Code-Quiz-HW-04" target="_blank" rel="noreferrer">
                                <div class="tooltip" data-tip="repository">
                                    <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" alt="hello" src={Coding}></img></button>
                                </div>
                            </a>
                            <br></br>
                            <div class="tooltip" data-tip="close">
                                <label for="my-modal-9" class=" btn   btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                            </div>
                        </div>
                    </div>



                    {/* CARDS  */}

                    <label for="my-modal" className="hvr-grow gap-x-0" href="#">
                        <div class=" bg-white w-64 h-64 shadow-md rounded m-3 rounded-xl">
                            <div class="h-4/5 w-full">
                                <img class="w-full h-full object-cover rounded-t" src={social} alt="piña"></img>
                            </div>
                            <div class="w-full h-1/5 p-3 flex justify-between items-center">
                                <span class="text-lg font-semibold uppercase tracking-wide ">Social Burger</span>
                                <p class="text-gray-600 text-sm leading-5 mt-2">2022</p>
                            </div>
                        </div>
                    </label>
                    <label for="my-modal-4" className="hvr-grow gap-x-0" href="#">
                        <div class=" bg-white w-64 h-64 shadow-md rounded m-3 rounded-xl">
                            <div class="h-4/5 w-full">
                                <img class="w-full h-full object-cover rounded-t" src={memo} alt="piña"></img>
                            </div>
                            <div class="w-full h-1/5 p-3 flex justify-between items-center">
                                <span class="text-lg font-semibold uppercase tracking-wide ">memorize.me</span>
                                <p class="text-gray-600 text-sm leading-5 mt-2">2022</p>
                            </div>
                        </div>
                    </label>



                    <label for="my-modal-3" className="hvr-grow gap-x-0" href="#">
                        <div class=" bg-white w-64 h-64 shadow-md rounded m-3 rounded-xl">
                            <div class="h-4/5 w-full">
                                <img class="w-full h-full object-cover rounded-t" src={tracker} alt="piña"></img>
                            </div>
                            <div class="w-full h-1/5 p-3 flex justify-between items-center">
                                <span class="text-lg font-semibold uppercase tracking-wide ">Investment tracker</span>
                                <p class="text-gray-600 text-sm leading-5 mt-2">2022</p>
                            </div>
                        </div>
                    </label>

                    <label for="my-modal-2" className="hvr-grow gap-x-0" href="#">
                        <div class=" bg-white w-64 h-64 shadow-md rounded m-3 rounded-xl">
                            <div class="h-4/5 w-full">
                                <img class="w-full h-full object-cover rounded-t" src={tech} alt="piña"></img>
                            </div>
                            <div class="w-full h-1/5 p-3 flex justify-between items-center">
                                <span class="text-lg font-semibold uppercase tracking-wide ">Tech Blog</span>
                                <p class="text-gray-600 text-sm leading-5 mt-2">2022</p>
                            </div>
                        </div>
                    </label>


                    <label for="my-modal-5" className="hvr-grow gap-x-0" href="#">
                        <div class=" bg-white w-64 h-64 shadow-md rounded m-3 rounded-xl">
                            <div class="h-4/5 w-full">
                                <img class="w-full h-full object-cover rounded-t" src={books} alt="piña"></img>
                            </div>
                            <div class="w-full h-1/5 p-3 flex justify-between items-center">
                                <span class="text-lg font-semibold uppercase tracking-wide ">Book Search Engine</span>
                                <p class="text-gray-600 text-sm leading-5 mt-2">2022</p>
                            </div>
                        </div>
                    </label>
                    <label for="my-modal-6" className="hvr-grow gap-x-0" href="#">
                        <div class=" bg-white w-64 h-64 shadow-md rounded m-3 rounded-xl">
                            <div class="h-4/5 w-full">
                                <img class="w-full h-full object-cover rounded-t" src={weather} alt="piña"></img>
                            </div>
                            <div class="w-full h-1/5 p-3 flex justify-between items-center">
                                <span class="text-lg font-semibold uppercase tracking-wide ">Weather App</span>
                                <p class="text-gray-600 text-sm leading-5 mt-2">2022</p>
                            </div>
                        </div>
                    </label>


                    <label for="my-modal-7" className="hvr-grow gap-x-0" href="#">
                        <div class=" bg-white w-64 h-64 shadow-md rounded m-3 rounded-xl">
                            <div class="h-4/5 w-full">
                                <img class="w-full h-full object-cover rounded-t" src={notes} alt="piña"></img>
                            </div>
                            <div class="w-full h-1/5 p-3 flex justify-between items-center">
                                <span class="text-lg font-semibold uppercase tracking-wide ">Notes Taker</span>
                                <p class="text-gray-600 text-sm leading-5 mt-2">2022</p>
                            </div>
                        </div>
                    </label>



                    <label for="my-modal-8" className="hvr-grow gap-x-0" href="#">
                        <div class=" bg-white w-64 h-64 shadow-md rounded m-3 rounded-xl">
                            <div class="h-4/5 w-full">
                                <img class="w-full h-full object-cover rounded-t" src={shop} alt="piña"></img>
                            </div>
                            <div class="w-full h-1/5 p-3 flex justify-between items-center">
                                <span class="text-lg font-semibold uppercase tracking-wide ">E-Commerce BackEnd</span>
                                <p class="text-gray-600 text-sm leading-5 mt-2">2022</p>
                            </div>
                        </div>
                    </label>


                    <label for="my-modal-9" className="hvr-grow gap-x-0" href="#">
                        <div class=" bg-white w-64 h-64 shadow-md rounded m-3 rounded-xl">
                            <div class="h-4/5 w-full">
                                <img class="w-full h-full object-cover rounded-t" src={quiz} alt="piña"></img>
                            </div>
                            <div class="w-full h-1/5 p-3 flex justify-between items-center">
                                <span class="text-lg font-semibold uppercase tracking-wide ">Code Quiz</span>
                                <p class="text-gray-600 text-sm leading-5 mt-2">2022</p>
                            </div>
                        </div>
                    </label>


                </div>
            </div>
            <hr></hr>
        </>
    )
}

export default body;