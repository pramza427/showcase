function FavLocations() {

    return (
        <div id="favLocs" className="border border-mint-200 dark:border-mint-800 bg-mint-100 dark:bg-transparent rounded">
            <div className="p-2 border-b border-mint-200 dark:border-mint-800 bg-mint-200 dark:bg-mint-800 text-2xl text-center">
                Favorite Destinations
            </div>
            <div className="p-3 grid grid-cols-2 h-full">
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
    )
}

export default FavLocations;