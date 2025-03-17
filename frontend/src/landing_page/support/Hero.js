import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5">
        <div className="col-6 p-5 ">
          <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="Eg. how do I activate F&O" />
          <a href="" className="mx-3">Track account opening</a>
          <a href="" className="mx-4">Track segment activation</a>
          <a href="" className="mx-4">Intraday margins</a>
          <div className="links">
              <a href="" className="mx-3 mt-4">Kite user manual</a>
            </div>
        </div>
        <div className="col-6 p-5 ">
          <h3>Featured</h3>
          <ol>
            <li className=" fs-5"><a href="">BSE StAR mutual fund platform downtime</a></li>

            <li className="mt-3 fs-5"><a href="">Surveillance measure on scrips - March 2025</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
