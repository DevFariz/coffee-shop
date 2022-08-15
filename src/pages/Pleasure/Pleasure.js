import AboutGeneral from "../../components/AboutGeneral/AboutGeneral";
import CoffeeItems from "../../components/CoffeeItems/CoffeeItems";
import SectionIntro from "../../components/SectionIntro/SectionIntro";

import Goods from "../../images/goods.jpg"

const Pleasure = ({data}) => {
  return (
    <>
      <SectionIntro title="For your pleasure" />
      <AboutGeneral
        image={Goods}
        text1="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible."
        text2="Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went
is song that held help face."
        title="About our goods"
      />
      <CoffeeItems data={data}/>
    </>
  );
};

export default Pleasure;
