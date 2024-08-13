import { experience } from "../data/experience";

function ExperiencePage() {

    const experiencesBlocks = experience.map((e,i) => {

        const bulletpoints = e.bulletpoints.map((b, j) => {
            return (
                <li key={j}>{b}</li>
            )
        })
        return (
            <div key={i} className="text-base rounded border border-gray-500 mt-10 p-5">
                <div className="flex">
                    <div className="text-lg">{e.position}</div>
                    <div className="flex-grow"></div>
                    <div className="text-sm">{e.date}</div>
                </div>
                <div className="flex border-b border-gray-700 mb-4 pb-2 text-gray-300">
                    <div className="text-md ">{e.company}</div>
                    <div className="flex-grow"/>
                    <div className="text-sm">{e.location}</div>
                </div>
                

                <div>{e.summary}</div>
                <ul className="pl-5 list-disc text-gray-200">{bulletpoints}</ul>
            </div>
        )
    })

    return (
        <div className="p-2">
            {experiencesBlocks}
        </div>
        
    );
}

export default ExperiencePage;