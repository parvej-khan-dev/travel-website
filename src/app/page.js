import Homehero from "@/components/Hero/Homehero";

export default function Home() {
  return (
    <main>
      <Homehero />
      <section className="category-section">
        <p className="section-title">CATEGORY</p>
        <h2 className="title text-center">We Offer Best Services</h2>
        <div className="card-section flex">
          <div className="card card-item-1">
            <img alt="tour-guide" src="./Images/tour-guide 1.png" />
            <h3 className="card-heading">Guided Tours</h3>
            <p className="card-description">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
          </div>
          <div className="card card-item-2">
            <img alt="tour-guide" src="./Images/travelling 1.png" />
            <h3 className="card-heading">Best Flights Options</h3>
            <p className="card-description">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
          </div>
          <div className="card card-item-3">
            <img alt="tour-guide" src="./Images/hands 1.png" />
            <h3 className="card-heading">Religious Tours</h3>
            <p className="card-description">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
          </div>
          <div className="card card-item-4">
            <img alt="tour-guide" src="./Images/medical-team 1.png" />
            <h3 className="card-heading">Medical insurance</h3>
            <p className="card-description">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
