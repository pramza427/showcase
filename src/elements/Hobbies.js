function Hobbies() {

    return (
        <div id="hobbies" className="border border-mint-200 dark:border-mint-800 bg-mint-100 dark:bg-transparent rounded">
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
    )
}

export default Hobbies;