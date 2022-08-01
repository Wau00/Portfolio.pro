import React from "react";

function skills() {
    return (
        <>
            <input type="checkbox" id="my-modal-skills" class="modal-toggle" />
            <div class="modal ">
                <div class="modal-box">





                    <div className="">
                        <div>
                            <h3 class="font-bold text-lg">Front-End</h3>
                            HTML  <progress class="progress w-10/12 md:w-96 lg:w-96" value="0" max="100"></progress>
                            <br />
                            CSS <progress class="progress w-10/12 md:w-96 lg:w-96" value="10" max="100"></progress>
                            <br />
                            REACT <progress class="progress w-10/12 md:w-96 lg:w-96" value="40" max="100"></progress>
                            <br />
                            JavaScript<progress class="progress w-10/12 md:w-96 lg:w-96" value="70" max="100"></progress>
                            <br />
                            Responsive Design <progress class="progress w-10/12 md:w-96 lg:w-96" value="100" max="100"></progress>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg">Back-End</h3>
                            APIs<progress class="progress w-10/12 md:w-96 lg:w-96" value="0" max="100"></progress>
                            <br />
                            Node.JS<progress class="progress w-10/12 md:w-96 lg:w-96" value="10" max="100"></progress>
                            <br />
                            Express.JS<progress class="progress w-10/12 md:w-96 lg:w-96" value="40" max="100"></progress>
                            <br />
                            MySQL, Sequelize<progress class="progress w-10/12 md:w-96 lg:w-96" value="70" max="100"></progress>
                            <br />
                            MongoDB, Mongoose<progress class="progress w-10/12 md:w-96 lg:w-96" value="100" max="100"></progress>
                        </div>


                        <div class="modal-action">
                            <label for="my-modal-skills" class="btn">Yay!</label>
                        </div>
                    </div>











                </div>
            </div>
        </>
    )
}

export default skills