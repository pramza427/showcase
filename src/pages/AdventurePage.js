import AlaskaHawaii from "../maps/AlaskaHawaii";
import Usa from "../maps/Usa";

function AdventurePage() {

    return (
        <div className='flex w-full h-[600px] items-center'>
            <AlaskaHawaii />
            <Usa />
        </div>
    );
}

export default AdventurePage;