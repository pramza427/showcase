import { useState } from "react";

function PictureCarousel({ imgObj }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextPic = () => {
        (currentIndex === imgObj.length - 1)
            ? setCurrentIndex(0)
            : setCurrentIndex(currentIndex + 1);
    }

    const prevPic = () => {
        (currentIndex === 0)
            ? setCurrentIndex(imgObj.length - 1)
            : setCurrentIndex(currentIndex - 1);
    }

    return (
        <div className="relative container mx-auto mb-10 w-full h-[850px] overflow-hidden 2xl:w-1/2 text-center">
            <div className="h-full flex justify-center items-center">
                {imgObj.map((img, idx) => (
                    <div key={idx} className={(idx === currentIndex) ? "w-full h-full block" : "w-full hidden"}>
                        <img alt={"Favorite " + idx} src={img.url} className="object-cover w-full h-full" />
                        <div className="absolute flex justify-center w-full bottom-10 font-bold">
                            <div className="bg-mint-500  p-2 rounded-full">
                                {img.location}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute flex justify-center items-center left-0 top-0 h-full w-32 hover:bg-gradient-to-r hover:from-gray-100 from-transparent ease-in-out delay-150"
                onClick={prevPic}>
                <i className="fa-solid fa-4x fa-chevron-left"></i>
            </div>

            <div className="absolute flex justify-center items-center right-0 top-0 h-full w-32 hover:bg-gradient-to-l from-gray-100 dark:from-mint-950 bg-none transition-all duration-1000"
                onClick={nextPic}>
                <i className="fa-solid fa-4x fa-chevron-right"></i>
            </div>

            <div className="absolute bottom-2 w-full flex justify-center">
                {imgObj.map((e, idx) => {
                    return (
                        <div className={idx === currentIndex
                            ? "m-2 w-5 h-5 bg-mint-700 border-4 border-mint-100 rounded-full"
                            : "m-2 w-5 h-5 bg-mint-200 rounded-full"} />
                    )

                })}
            </div>
        </div>
    )
}

export default PictureCarousel;