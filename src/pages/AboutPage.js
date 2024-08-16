function AboutPage() {

    return (
        <div>
            <div className="p-5 flex flex-col bg-mint-100 dark:bg-mint-900">
                <div className="m-4 mt-0">
                    <div className="text-6xl roboto-regular text-mint-900 dark:text-white">Piotr Ramza</div>
                    <div className="text-3xl text-mint-800 dark:text-gray-300">Software Engineer</div>
                    <div className="text-2xl text-mint-600 dark:text-gray-500">Photographer and Maker</div>
                </div>
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="inline-block">
                        <div className="flex items-center justify-center rounded-full bg-mint-700 min-w-[320px] h-[320px] md:min-w-[420px] md:h-[420px] xl:min-w-[520px] xl:h-[520px]">
                            <img alt="Me" className="rounded-full min-w-[300px] h-[300px] md:min-w-[400px] md:h-[400px] xl:min-w-[500px] xl:h-[500px]" src="imgs/me.jpg" />
                        </div>
                        <div className="mt-3 flex justify-evenly text-mint-800 dark:text-mint-100">
                            <a href="https://www.linkedin.com/in/piotrramza/">
                                <i class="fa-brands fa-3x fa-linkedin hover:text-mint-600"></i>
                            </a>
                            <a href="https://github.com/pramza427">
                                <i class="fa-brands fa-3x fa-github  hover:text-mint-600"></i>
                            </a>
                            <a href="https://www.instagram.com/p_ramza/">
                                <i class="fa-brands fa-3x fa-instagram  hover:text-mint-600"></i>
                            </a>
                        </div>
                    </div>

                    <div className="p-5 flex flex-col items-center text-2xl">
                        <div className="pb-10">
                            I’m a software developer with two years professional experience and a passion for making, whether that be physical or virtual. I enjoy tackling problems with creative solutions through exploration of new technologies. I have worked on a multitude of projects ranging in scale from individual to working on a team with dozens of people. I love sitting down, coding, and making something new.
                        </div>
                        <div id="favorites" className="w-full m-3 rounded">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10">
                                <div className="">
                                    <i className="fas fa-lg md:fa-3x fa-palette m-3 text-mint-600" />
                                    <div className="font-bold text-mint-900 dark:text-mint-100">Favorite Color</div>
                                    <div className="">Purple</div>
                                </div>

                                <div className="">
                                    <i className="fas fa-lg md:fa-2x fa-burger m-3 text-mint-600" />
                                    <div className="font-bold text-mint-900 dark:text-mint-100">Favorite Food</div>
                                    <div className="">Pierogi</div>
                                </div>
                                <div className="">
                                    <i className="fas fa-lg md:fa-2x fa-ticket m-3 text-mint-600" />
                                    <div className="font-bold text-mint-900 dark:text-mint-100">Favorite Movie</div>
                                    <div className="">Into the Spiderverse</div>
                                </div>

                                <div className="">
                                    <i className="fas fa-lg md:fa-2x fa-earth-americas m-3 text-mint-600" />
                                    <div className="font-bold text-mint-900 dark:text-mint-100">Favorite Trip</div>
                                    <div className="">Black Canyon, Colorado</div>
                                </div>
                                <div className="">
                                    <i className="fas fa-lg md:fa-2x fa-trophy m-3 text-mint-600" />
                                    <div className="font-bold text-mint-900 dark:text-mint-100">Favorite Sport</div>
                                    <div className="">Snowboarding</div>
                                </div>

                                <div className="">
                                    <i className="fas fa-lg md:fa-2x fa-book m-3 text-mint-600" />
                                    <div className="font-bold text-mint-900 dark:text-mint-100">Favorite Book</div>
                                    <div className="">Murderbot diaries</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>








            </div>


            <div className="grid md:grid-cols-2">
                <div id="hobbies" className="m-3 border border-mint-200 dark:border-mint-800 bg-mint-100 dark:bg-transparent rounded">
                    <div className="p-2 border-b border-mint-200 dark:border-mint-800 bg-mint-200 dark:bg-mint-800 text-2xl text-center">
                        Hobbies
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-2">

                        <div className="m-2 text-center">
                            <i className="fas fa-2x md:fa-4x fa-walking m-3" />
                            <div className="">Hiking</div>
                        </div>

                        <div className="m-2 text-center">
                            <i className="fas fa-2x md:fa-4x fa-hiking m-3" />
                            <div className="">Backpacking</div>
                        </div>

                        <div className="m-2 text-center">
                            <i className="fas fa-2x md:fa-4x fa-campground m-3" />
                            <div className="">Camping</div>
                        </div>

                        <div className="m-2 text-center">
                            <i className="fas fa-2x md:fa-4x fa-hill-rockslide m-3" />
                            <div className="">Climbing</div>
                        </div>

                        <div className="m-2 text-center">
                            <i className="fas fa-2x md:fa-4x fa-biking m-3" />
                            <div className="">Biking</div>
                        </div>

                        <div className="m-2 text-center">
                            <i className="fas fa-2x md:fa-4x fa-fish m-3" />
                            <div className="">Fishing</div>
                        </div>

                        <div className="m-2 text-center">
                            <i className="fas fa-2x md:fa-4x fa-person-snowboarding m-3" />
                            <div className="">Snowboarding</div>
                        </div>

                        <div className="m-2 text-center">
                            <i className="fas fa-2x md:fa-4x fa-pen-ruler m-3" />
                            <div className="">Sewing</div>
                        </div>

                        <div className="m-2 text-center">
                            <i className="fas fa-2x md:fa-4x fa-hammer m-3" />
                            <div className="">Woodworking</div>
                        </div>

                        <div className="m-2 text-center">
                            <i className="fas fa-2x md:fa-4x fa-cake m-3" />
                            <div className="">Baking</div>
                        </div>

                        <div className="m-2 text-center">
                            <i className="fas fa-2x md:fa-4x fa-code m-3" />
                            <div className="">Coding</div>
                        </div>
                    </div>

                </div>

                <div id="favLocs" className="m-3 border border-mint-200 dark:border-mint-800 bg-mint-100 dark:bg-transparent rounded">
                    <div className="p-2 border-b border-mint-200 dark:border-mint-800 bg-mint-200 dark:bg-mint-800 text-2xl text-center">
                        Favorite Destinations
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-2 h-full">
                        <div className="text-center">
                            <i className="fas fa-2x md:fa-4x fa-walking m-3" />
                            <div>Black Canyon, CO</div>
                            <div>Great Sand Dunes National Park, CO</div>
                            <div>Mammoth Cave, KY</div>
                            <div>Redwood National Park, CA</div>
                            <div>Yosemite National Park, CA</div>
                            <div>Petrified Foreset National Park, AZ</div>
                        </div>

                        <div className="text-center">
                            <i className="fas fa-2x md:fa-4x fa-person-snowboarding m-3" />
                            <div>Aspen Snowmass, CO</div>
                            <div>Breckenridge, CO</div>
                            <div>Copper Mountain, CO</div>
                            <div>Tamarack Resort, ID</div>
                            <div>Vail, CO</div>
                            <div>Wolf Creek, CO</div>
                        </div>

                        <div className="text-center">
                            <i className="fas fa-2x md:fa-4x fa-hiking m-3" />
                            <div>Eagle Rock Loop, AR</div>
                            <div>Four Pass Loop, CO</div>
                            <div>Wind River Range, WY</div>
                        </div>                        

                        <div className="text-center">
                            <i className="fas fa-2x md:fa-4x fa-hill-rockslide m-3" />
                            <div>Red River Gorge, KY</div>
                            <div>Shelf Road, CO</div>
                            <div>Ten Sleep Canyon, WY</div>
                            <div></div>
                        </div>
                    </div>
                </div>

            </div>

            <div id="strengths" className="">

            </div>

            <div id="favPhotos">
                <div id="ImageCarosel">
                    <div className="absolute">left</div>
                    <div className="absolute">right</div>

                </div>
            </div>

        </div>
    );
}

export default AboutPage;