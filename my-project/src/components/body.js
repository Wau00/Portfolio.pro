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
            <div className="">
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
                                <h2><span className="text-s font-light ">JavaScript || 2022 </span></h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
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
                                    <div class="tooltip" data-tip="website">
                                        <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Animated}></img> </button>
                                    </div>
                                    <div class="tooltip" data-tip="repository">
                                        <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Coding}></img></button>
                                    </div>
                                    <div class="tooltip" data-tip="close">
                                        <label for="my-modal" class=" btn  btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" overflow-visible relative -left-6 -top-6 z-3 bg-transparent">

                            <div class="tooltip" data-tip="website">
                                <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Animated}></img> </button>
                            </div>
                            <br></br>
                            <div class="tooltip" data-tip="repository">
                                <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Coding}></img></button>
                            </div>
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
                                <h1 class="card-title">SOCIAL BURGER</h1>
                                <h2><span className="text-s font-light ">JavaScript || 2022 </span></h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
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
                                    <div class="tooltip" data-tip="website">
                                        <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Animated}></img> </button>
                                    </div>
                                    <div class="tooltip" data-tip="repository">
                                        <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Coding}></img></button>
                                    </div>
                                    <div class="tooltip" data-tip="close">
                                        <label for="my-modal-2" class=" btn  btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" overflow-visible relative -left-6 -top-6 z-3 bg-transparent">

                            <div class="tooltip" data-tip="website">
                                <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Animated}></img> </button>
                            </div>
                            <br></br>
                            <div class="tooltip" data-tip="repository">
                                <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Coding}></img></button>
                            </div>
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
                                <h1 class="card-title">SOCIAL BURGER</h1>
                                <h2><span className="text-s font-light ">JavaScript || 2022 </span></h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
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
                                    <div class="tooltip" data-tip="website">
                                        <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Animated}></img> </button>
                                    </div>
                                    <div class="tooltip" data-tip="repository">
                                        <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Coding}></img></button>
                                    </div>
                                    <div class="tooltip" data-tip="close">
                                        <label for="my-modal-3" class=" btn  btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" overflow-visible relative -left-6 -top-6 z-3 bg-transparent">

                            <div class="tooltip" data-tip="website">
                                <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Animated}></img> </button>
                            </div>
                            <br></br>
                            <div class="tooltip" data-tip="repository">
                                <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Coding}></img></button>
                            </div>
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
                                <h1 class="card-title">SOCIAL BURGER</h1>
                                <h2><span className="text-s font-light ">JavaScript || 2022 </span></h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
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
                                    <div class="tooltip" data-tip="website">
                                        <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Animated}></img> </button>
                                    </div>
                                    <div class="tooltip" data-tip="repository">
                                        <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Coding}></img></button>
                                    </div>
                                    <div class="tooltip" data-tip="close">
                                        <label for="my-modal-4" class=" btn  btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" overflow-visible relative -left-6 -top-6 z-3 bg-transparent">

                            <div class="tooltip" data-tip="website">
                                <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Animated}></img> </button>
                            </div>
                            <br></br>
                            <div class="tooltip" data-tip="repository">
                                <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Coding}></img></button>
                            </div>
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
                                <h1 class="card-title">SOCIAL BURGER</h1>
                                <h2><span className="text-s font-light ">JavaScript || 2022 </span></h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
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
                                    <div class="tooltip" data-tip="website">
                                        <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Animated}></img> </button>
                                    </div>
                                    <div class="tooltip" data-tip="repository">
                                        <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Coding}></img></button>
                                    </div>
                                    <div class="tooltip" data-tip="close">
                                        <label for="my-modal-5" class=" btn  btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" overflow-visible relative -left-6 -top-6 z-3 bg-transparent">

                            <div class="tooltip" data-tip="website">
                                <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Animated}></img> </button>
                            </div>
                            <br></br>
                            <div class="tooltip" data-tip="repository">
                                <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Coding}></img></button>
                            </div>
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
                                <h1 class="card-title">SOCIAL BURGER</h1>
                                <h2><span className="text-s font-light ">JavaScript || 2022 </span></h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
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
                                    <div class="tooltip" data-tip="website">
                                        <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Animated}></img> </button>
                                    </div>
                                    <div class="tooltip" data-tip="repository">
                                        <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Coding}></img></button>
                                    </div>
                                    <div class="tooltip" data-tip="close">
                                        <label for="my-modal-6" class=" btn  btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" overflow-visible relative -left-6 -top-6 z-3 bg-transparent">

                            <div class="tooltip" data-tip="website">
                                <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Animated}></img> </button>
                            </div>
                            <br></br>
                            <div class="tooltip" data-tip="repository">
                                <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Coding}></img></button>
                            </div>
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
                                <h1 class="card-title">SOCIAL BURGER</h1>
                                <h2><span className="text-s font-light ">JavaScript || 2022 </span></h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
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
                                    <div class="tooltip" data-tip="website">
                                        <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Animated}></img> </button>
                                    </div>
                                    <div class="tooltip" data-tip="repository">
                                        <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Coding}></img></button>
                                    </div>
                                    <div class="tooltip" data-tip="close">
                                        <label for="my-modal-7" class=" btn  btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" overflow-visible relative -left-6 -top-6 z-3 bg-transparent">

                            <div class="tooltip" data-tip="website">
                                <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Animated}></img> </button>
                            </div>
                            <br></br>
                            <div class="tooltip" data-tip="repository">
                                <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Coding}></img></button>
                            </div>
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
                                <h1 class="card-title">SOCIAL BURGER</h1>
                                <h2><span className="text-s font-light ">JavaScript || 2022 </span></h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
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
                                    <div class="tooltip" data-tip="website">
                                        <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Animated}></img> </button>
                                    </div>
                                    <div class="tooltip" data-tip="repository">
                                        <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Coding}></img></button>
                                    </div>
                                    <div class="tooltip" data-tip="close">
                                        <label for="my-modal-8" class=" btn  btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" overflow-visible relative -left-6 -top-6 z-3 bg-transparent">

                            <div class="tooltip" data-tip="website">
                                <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Animated}></img> </button>
                            </div>
                            <br></br>
                            <div class="tooltip" data-tip="repository">
                                <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Coding}></img></button>
                            </div>
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
                                <h1 class="card-title">SOCIAL BURGER</h1>
                                <h2><span className="text-s font-light ">JavaScript || 2022 </span></h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
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
                                    <div class="tooltip" data-tip="website">
                                        <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Animated}></img> </button>
                                    </div>
                                    <div class="tooltip" data-tip="repository">
                                        <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Coding}></img></button>
                                    </div>
                                    <div class="tooltip" data-tip="close">
                                        <label for="my-modal-9" class=" btn  btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" overflow-visible relative -left-6 -top-6 z-3 bg-transparent">

                            <div class="tooltip" data-tip="website">
                                <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Animated}></img> </button>
                            </div>
                            <br></br>
                            <div class="tooltip" data-tip="repository">
                                <button className=" hvr-grow btn btn-ghost btn-circle"><img className="" src={Coding}></img></button>
                            </div>
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