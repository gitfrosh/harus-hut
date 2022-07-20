import React from "react";

function Proposals() {
  const proposals = [
    {
      id: 1,
      text: "Let's rule the world.",
    },
  ];

  return (
    <section>
      <hr />
      <h2 id="Tables">DAO Proposals</h2>
      <div style={{ textAlign: "center" }}>
        <p>
          <em>
            What to do with our treasury? Write a proposal or vote on existing
            proposals.
          </em>
        </p>

        <button className="btn btn-primary btn-block">
          Create new proposal
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>#No.</th>
            <th>Text</th>
            <th>Vote</th>
          </tr>
        </thead>
        <tbody>
          {proposals.map((proposal: any) => {
            return (
              <tr>
                <th>{proposal.id}</th>
                <td>{proposal.text}</td>
                <td>
                  <div className="btn-group">
                    <button className="btn btn-default btn-ghost">Up</button>
                    <button className="btn btn-default btn-ghost">Down</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
export default Proposals;
