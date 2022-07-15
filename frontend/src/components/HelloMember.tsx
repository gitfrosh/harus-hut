import React from "react";

function HelloMember() {
  var d = new Date();
  var time = d.getHours();

  return (
    <section>
      <div className="terminal-card">
        <header>{time < 12 ? "Good morning!" : "Good afternoon!"}</header>
        <div style={{ textAlign: "center" }}>
          <p> What do you want to do today?</p>
          <a href="/haru">
            <button className="btn btn-default btn-ghost">Mint $HARU</button>
          </a>
          <br />
          <br />

          <button className="btn btn-default btn-ghost">View Proposals</button>
          <br />
          <br />
          <button className="btn btn-default btn-ghost">Create Proposal</button>
          <br />
          <br />
        </div>
      </div>
    </section>
  );
}
export default HelloMember;
