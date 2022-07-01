import "./CoffeeFilter.css";

const CoffeeFilter = () => {
  return (
    <section className="coffee-filter">
      <div className="container">
        <div className="coffee-filter-container">
          <div className="coffee-filter-left">
            <label htmlFor="coffee-filter-search">Lookiing for</label>
            <input type="text" id="coffee-filter-search" placeholder="start typing here..."/>
          </div>
          <div className="coffee-filter-right">
            <span>Or filter</span>
            <button>All</button>
            <button>Brazil</button>
            <button>Kenya</button>
            <button>Columbia</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeFilter;
