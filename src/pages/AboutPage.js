function AboutPage() {

    return (
        <div>
            <div className="p-5 flex flex-col bg-seagreen-100 dark:bg-seagreen-900">
                <div className="m-4 mt-0">
                    <div className="text-6xl font-roboto">Piotr Ramza</div>
                    <div className="text-3xl text-gray-400">Software Engineer</div>
                    <div className="text-2xl text-gray-600">Photographer and Maker</div>
                </div>
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="inline-block">
                        <div className="flex items-center justify-center rounded-full bg-seagreen-700 min-w-[320px] h-[320px] md:min-w-[420px] md:h-[420px] xl:min-w-[520px] xl:h-[520px]">
                            <img alt="Me" className="rounded-full min-w-[300px] h-[300px] md:min-w-[400px] md:h-[400px] xl:min-w-[500px] xl:h-[500px]" src="imgs/me.jpg" />
                        </div>
                        <div className="mt-3 flex justify-evenly">
                            <a href="https://www.linkedin.com/in/piotrramza/">
                                <i class="fa-brands fa-3x fa-linkedin"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/piotrramza/">
                                <i class="fa-brands fa-3x fa-github"></i>
                            </a>
                            <a href="https://www.instagram.com/p_ramza/">
                                <i class="fa-brands fa-3x fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <div className="p-5 flex flex-col items-center text-2xl">
                        <div>
                            I’m a software developer with two years professional experience and a passion for making, whether that be physical or virtual. I enjoy tackling problems with creative solutions through exploration of new technologies. I have worked on a multitude of projects ranging in scale from individual to working on a team with dozens of people. I love sitting down, coding, and making something new.
                        </div>
                        <div id="favorites" className="w-full m-3 rounded">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10">
                                <div className="">
                                    <i className="fas fa-lg md:fa-3x fa-palette m-3" />
                                    <div className="font-bold">Favorite Color</div>
                                    <div className="">Purple</div>
                                </div>

                                <div className="">
                                    <i className="fas fa-lg md:fa-2x fa-burger m-3" />
                                    <div className="font-bold">Favorite Food</div>
                                    <div className="">Pierogi</div>
                                </div>
                                <div className="">
                                    <i className="fas fa-lg md:fa-2x fa-ticket m-3" />
                                    <div className="font-bold">Favorite Movie</div>
                                    <div className="">Into the Spiderverse</div>
                                </div>

                                <div className="">
                                    <i className="fas fa-lg md:fa-2x fa-earth-americas m-3" />
                                    <div className="font-bold">Favorite Trip</div>
                                    <div className="">Black Canyon, Colorado</div>
                                </div>
                                <div className="">
                                    <i className="fas fa-lg md:fa-2x fa-trophy m-3" />
                                    <div className="font-bold">Favorite Sport</div>
                                    <div className="">Snowboarding</div>
                                </div>

                                <div className="">
                                    <i className="fas fa-lg md:fa-2x fa-book m-3" />
                                    <div className="font-bold">Favorite Book</div>
                                    <div className="">Murderbot diaries</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div id="favlocs" className="">

                </div>





            </div>



            <div id="hobbies" className="m-3 border border-seagreen-200 dark:border-seagreen-800 rounded">
                <div className="p-2 border-b border-seagreen-200 dark:border-seagreen-800 bg-seagreen-200 dark:bg-seagreen-800 text-2xl text-center">
                    Hobbies
                </div>
                <div className="grid grid-cols-3 bg-seagreen-100 dark:bg-transparent">
                    <div className="text-center">
                        <i className="fas fa-2x md:fa-4x fa-walking m-3" />
                        <div className="">Hiking</div>
                    </div>

                    <div className="text-center">
                        <i className="fas fa-2x md:fa-4x fa-hiking m-3" />
                        <div className="">Backpacking</div>
                    </div>
                    <div className="text-center">
                        <i className="fas fa-2x md:fa-4x fa-campground m-3" />
                        <div className="">Climbing</div>
                    </div>

                    <div className="text-center">
                        <i className="fas fa-2x md:fa-4x fa-biking m-3" />
                        <div className="">Biking</div>
                    </div>
                    <div className="text-center">
                        <i className="fas fa-2x md:fa-4x fa-walking m-3" />
                        <div className="">Fishing</div>
                    </div>

                    <div className="text-center">
                        <i className="fas fa-2x md:fa-4x fa-walking m-3" />
                        <div className="">Sewing</div>
                    </div>
                </div>
            </div>

            <div id="strengths" className="">

            </div>

        </div>
    );
}

export default AboutPage;