import AlaskaHawaii from "../maps/AlaskaHawaii";
import Usa from "../maps/Usa";
import React, { useState } from "react";

const locations = [
    {
        id: 0,
        name: "Lower 48",
        links: [1, null, null, null],
        elem: <Usa />
    },
    {
        id: 1,
        name: "Alaska/Hawaii",
        links: [null, 0, null, null],
        elem: <AlaskaHawaii />
    }
]

const DIRECTIONS = {
    LEFT: 0,
    RIGHT: 1,
    UP: 2,
    DOWN: 3
};

function AdventurePage() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(0);
    const [fromDirection, setFromDirection] = useState("left");

    function setNextLoc(index, direction) {
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
                        left</button>
                    : <div />}

                {a.a[DIRECTIONS.RIGHT] != null
                    ? <button className="absolute right-10 top-1/2"
                        onClick={() => setNextLoc(a.a[DIRECTIONS.RIGHT], DIRECTIONS.RIGHT)}>right</button> : <div />}

                {a.a[DIRECTIONS.UP] != null
                    ? <button className="absolute top-10 right-1/2"
                        onClick={() => setNextLoc(a.a[DIRECTIONS.UP], DIRECTIONS.UP)}>
                        up</button>
                    : <div />}

                {a.a[DIRECTIONS.DOWN] != null
                    ? <button className="absolute bottom-10 right-1/2"
                        onClick={() => setNextLoc(a.a[DIRECTIONS.DOWN], DIRECTIONS.DOWN)}>
                        down</button>
                    : <div />}
            </div>
        )
    }

    function getLocationClass(index) {
        console.log(index)
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
        if(index === currentIndex){
            arivingClass = "ariving"
        }
        else if(index === lastIndex){
            arivingClass = "departing"
        }
        else{
            arivingClass = "hiddenLoc"
        }
        return "location " + arivingClass + " " + directionClass;
    }

        return (
            <div className="w-full text-center">
                <div className="text-3xl">{locations[currentIndex].name}</div>
                <div className="carouselContainer">
                    <div className="carousel">
                        {locations.map((loc, index) => (
                            <div className={getLocationClass(index)} >
                                {loc.elem}
                            </div>
                        ))}
                    </div>
                    <PrintLinks a={locations[currentIndex].links} />
                </div>
            </div>

        );

    }

    export default AdventurePage;