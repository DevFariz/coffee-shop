import "./Best.css";
import BestImg01 from "../../images/best-01.jpg";
import BestImg02 from "../../images/best-02.jpg";
import BestImg03 from "../../images/best-03.jpg";

const Best = () => {    
    return (
        <section className="best">
            <div className="container">
                <h2 className="section-title best__title">Our best</h2>
                <div className="best-items">
                    <div className="best-item">
                        <img src={BestImg01} alt="Solimo Coffee Beans 2 kg" className="best-item__img" />
                        <h4 className="best-item__title">Solimo Coffee Beans 2 kg</h4>
                        <p className="best-item__price">10.73$</p>
                    </div>
                    <div className="best-item">
                        <img src={BestImg01} alt="Presto Coffee Beans 1 kg" className="best-item__img" />
                        <h4 className="best-item__title">Presto Coffee Beans 1 kg</h4>
                        <p className="best-item__price">15.99$</p>
                    </div>
                    <div className="best-item">
                        <img src={BestImg01} alt="AROMISTICO Coffee 1 kg" className="best-item__img" />
                        <h4 className="best-item__title">AROMISTICO Coffee 1 kg</h4>
                        <p className="best-item__price">6.99$</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Best;