import "../App.css";

export default function OneLineCSS() {
    return (
        <div>
            <div className='verticalCss'>
                <h1>HELLO VERTICAL COSMOS !</h1>
            </div>

            <div className="flip-imgage my-5">
                <h1>You are now in U.S</h1>
                <img src="https://images.unsplash.com/photo-1550517636-ad7bac40dc28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" alt="unsplash-img" />
            </div>

            {/* for smooth scrolling */}
            <div className="">
                <div id="scr-1" className="scroll-1">
                    <div className="flip-imgage my-5">
                        <h1>You are now in U.S</h1>
                        <img src="https://images.unsplash.com/photo-1550517636-ad7bac40dc28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" alt="unsplash-img" />
                    </div>
                    <a href="#scr-2">go down</a>
                </div>
                <div id="scr-2" className="scroll-2">
                    <div className="flip-imgage my-5">
                        <h1>You are now in U.S</h1>
                        <img src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="unsplash-img" />
                    </div>
                    <a href="#scr-1">go up</a>
                </div>
            </div>
            {/* for smooth scrolling */}


            {/* for scrolling snap scroll start */}

            <div className="snap-container d-flex justify-content-center my-5">

                <div className="snap-scroll-parent">
                    <div className="snap-child">
                        <img src="https://images.unsplash.com/photo-1673557143243-39f2995a3bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="unsplash img" />
                    </div>
                    <div className="snap-child">
                        <img src="" alt="unsplash img" />
                    </div>
                    <div className="snap-child">
                        <img src="https://images.unsplash.com/photo-1673423050335-43b991cf57e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80" alt="unsplash img" />
                    </div>
                    <div className="snap-child">
                        <img src="https://images.unsplash.com/photo-1671725779260-8d17bc0e3f8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="unsplash img" />
                    </div>
                    <div className="snap-child">
                        <img src="https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="unsplash img" />
                    </div>
                    <div className="snap-child">
                        <img src="https://images.unsplash.com/photo-1673271044466-b23ea152130f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="unsplash img" />
                    </div>
                </div>
            </div>

            {/* for scrolling snap scroll end */}



            {/* this is for truncate start */}

            <div className="d-flex justify-center">
                <div className="p-3 bg-lime-300" style={{ width: "400px" }}>
                    <div><h1>HELLO Truncate</h1></div>
                    <div className="truncate-class">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It
                            has survived not only five centuries, but also the
                            leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum
                        </p>
                    </div>
                </div>
            </div>

            {/* this is for truncate end */}

            {/* for text color gradient start */}
            <div className="flex justify-center my-24">
                <div>
                    <p>before taking a gradient class</p>

                    <h1 className="text-9xl tracking-wide font-bold before-gradient">
                        APPLE
                    </h1>
                </div>
            </div>


            <div className="flex justify-center my-24">
                <div>
                    <p>after taking a gradient class</p>
                    <h1 className="text-9xl tracking-wide font-bold after-gradient">
                        APPLE
                    </h1>
                </div>
            </div>
            {/* for text color gradient end */}


            {/* this is set the actual image we don't need to define the width and height for image  */}

            <div className="objectFitclass">
                <img src="https://images.unsplash.com/photo-1673494735754-196c4d8ededd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" ></img>
            </div>

            {/* this is set the actual image we don't need to define the width and height for image  */}


            {/* poiner event  */}
            <h1 className="text-9xl tracking-wide pointer_event">
                POINTER EVENT
            </h1>
        </div>
    )
}
