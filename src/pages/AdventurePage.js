import { stateInfo } from "../data/state_info";
import AlaskaHawaii from "../maps/AlaskaHawaii";
import Usa from "../maps/Usa";
import React, { useState } from "react";

const locations = [
    {
        id: 0,
        name: "Lower 48",
        links: [1, null, null, null],
        elem: Usa
    },
    {
        id: 1,
        name: "Alaska/Hawaii",
        links: [null, 0, null, null],
        elem: AlaskaHawaii
    }
]

const DIRECTIONS = {
    LEFT: 0,
    RIGHT: 1,
    UP: 2,
    DOWN: 3
};

function AdventurePage() {
    const [currentState, setCurrentState] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(0);
    const [fromDirection, setFromDirection] = useState(0);

    function setNextLoc(index, direction) {
        setCurrentState("");
        setLastIndex(currentIndex);
        setCurrentIndex(index);
        setFromDirection(direction);
    }

    function PrintLinks(a) {
        return (
            <div>
                {a.a[DIRECTIONS.LEFT] != null
                    ? <button className="absolute left-10 top-1/2"
                        onClick={() => setNextLoc(a.a[DIRECTIONS.LEFT], DIRECTIONS.LEFT)}>
                        <i class="fa-solid fa-4x fa-chevron-left"></i>
                    </button>
                    : <div />}

                {a.a[DIRECTIONS.RIGHT] != null
                    ? <button className="absolute right-10 top-1/2"
                        onClick={() => setNextLoc(a.a[DIRECTIONS.RIGHT], DIRECTIONS.RIGHT)}>
                        <i class="fa-solid fa-4x fa-chevron-right"></i>

                    </button> : <div />}

                {a.a[DIRECTIONS.UP] != null
                    ? <button className="absolute top-10 right-1/2"
                        onClick={() => setNextLoc(a.a[DIRECTIONS.UP], DIRECTIONS.UP)}>
                        <i class="fa-solid fa-4x fa-chevron-up"></i>
                    </button>
                    : <div />}

                {a.a[DIRECTIONS.DOWN] != null
                    ? <button className="absolute bottom-10 right-1/2"
                        onClick={() => setNextLoc(a.a[DIRECTIONS.DOWN], DIRECTIONS.DOWN)}>
                        <i class="fa-solid fa-4x fa-chevron-down"></i>
                    </button>
                    : <div />}
            </div>
        )
    }

    function getLocationClass(index) {
        var directionClass = "";
        var arivingClass = "";
        switch (fromDirection) {
            case DIRECTIONS.LEFT:
                directionClass = "left"
                break;
            case DIRECTIONS.RIGHT:
                directionClass = "right"
                break;
            case DIRECTIONS.UP:
                directionClass = "up"
                break;
            case DIRECTIONS.DOWN:
                directionClass = "down"
                break;
            default:
                directionClass = "";
        }
        if (index === currentIndex) {
            arivingClass = "ariving"
        }
        else if (index === lastIndex) {
            arivingClass = "departing"
        }
        else {
            arivingClass = "hiddenLoc"
        }
        return "location " + arivingClass + " " + directionClass;
    }

    function PrintDescription() {
        if(currentState === ""){
            return(<div/>);
        }

        const iconColors = [" text-gray-700 ", " text-red-500 ", " text-yellow-500 ", " text-green-500 "];

        const currentStateInfo = stateInfo[currentState];
        const favoriteSpots = currentStateInfo.favoriteLoc.map((loc, idx) => {
            return (<li key={idx}>{loc}</li>);
        });

        return (
            <div>
                <div className="text-3xl">{currentState}</div>
                <div className="flex justify-center">
                    <i className={"fas fa-4x fa-walking m-3" + iconColors[currentStateInfo.activities[0]]}></i>
                    <i className={"fas fa-4x fa-campground m-3" + iconColors[currentStateInfo.activities[1]]}></i>
                    <i className={"fas fa-4x fa-hiking m-3" + iconColors[currentStateInfo.activities[2]]}></i>
                    <i className={"fas fa-4x fa-biking m-3" + iconColors[currentStateInfo.activities[3]]}></i>
                    <i className={"fas fa-4x fa-snowboarding m-3 mt-4" + iconColors[currentStateInfo.activities[4]]}></i>
                </div>
                <ul>
                    {favoriteSpots}
                </ul>


            </div>
        )
    }
    return (
        <div className="w-full text-center">
            <div className="text-3xl">{locations[currentIndex].name}</div>
            <div className="carouselContainer">
                <div className="carousel">
                    {locations.map((loc, index) => (
                        <div className={getLocationClass(index)} >
                            {loc.elem(setCurrentState)}
                        </div>
                    ))}
                </div>
                <PrintLinks a={locations[currentIndex].links} />
            </div>

            <PrintDescription />
        </div>

    );

}

export default AdventurePage;