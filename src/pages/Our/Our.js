import AboutGeneral from "../../components/AboutGeneral/AboutGeneral";
import CoffeeFilter from "../../components/CoffeeFilter/CoffeeFilter";
import CoffeeItems from "../../components/CoffeeItems/CoffeeItems";
import SectionIntro from "../../components/SectionIntro/SectionIntro";

import AboutBeans from "../../images/about-beans.jpg";

const Our = ({ data, onUpdateSearch, onFilterTab, filter }) => {
  return (
    <>
      <SectionIntro title="Our Coffee" />
      <AboutGeneral
        image={AboutBeans}
        text1="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible."
        text2="Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went
is song that held help face."
        title="About our beans"
      />
      <CoffeeFilter
        onUpdateSearch={onUpdateSearch}
        filter={filter}
        onFilterTab={onFilterTab}
      />
      <CoffeeItems data={data} />
    </>
  );
};

export default Our;
