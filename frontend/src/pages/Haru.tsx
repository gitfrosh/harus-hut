import React from "react";

function Proposals() {
  // const proposals = [
  //   {
  //     id: 1,
  //     text: "Let's rule the world.",
  //   },
  // ];

  return (
    <section>
      <h2 id="Proposals">Gimme $HARU</h2>
      <div style={{ textAlign: "center" }}>
        <p>
          <em>Time is Galleons, little brother. </em>
        </p>
      </div>
      <form action="#">
        <fieldset>
          <legend>Yesss.</legend>
          <div className="form-group">
            <label htmlFor="text">Amount</label>
            <input
              id="text"
              name="text"
              type="number"
              required
              placeholder="20"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-default btn-block">Mint!</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
export default Proposals;
