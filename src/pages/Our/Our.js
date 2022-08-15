import AboutGeneral from "../../components/AboutGeneral/AboutGeneral";
import CoffeeFilter from "../../components/CoffeeFilter/CoffeeFilter";
import CoffeeItems from "../../components/CoffeeItems/CoffeeItems";
import SectionIntro from "../../components/SectionIntro/SectionIntro";

const Our = ({data, onUpdateSearch, onFilterTab}) => {
    return (
        <>
            <SectionIntro />
            <AboutGeneral />
            <CoffeeFilter onUpdateSearch={onUpdateSearch} onFilterTab={onFilterTab}/>
            <CoffeeItems data={data}/>
        </>
    )
}

export default Our;