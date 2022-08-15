import './SectionIntro.css';

const SectionIntro = ({title}) => {
    return (
        <section className="section-intro">
            <h1 className="section-intro__title">{title}</h1>
        </section>
    )
}

export default SectionIntro;