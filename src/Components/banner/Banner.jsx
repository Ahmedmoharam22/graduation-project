import './banner.css'
function Banner() {
  return (
    <section className="hero-banner">
      <div className="hero--content">
        <div className="content">
          <h2>مرحبا بك</h2>
          <p>
          تمتع بصحه جيدة من الطبيعة
          </p>
        </div>
        <div className="input-field">
          <input type="search" placeholder="بحث" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
