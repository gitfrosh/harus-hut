import React from "react";

function Members({ members }: any) {
  return (
    <section>
      <h2 id="Tables">Proud Haru's Hut members</h2>

      <table>
        <caption>
          <em>Get cozy.</em>
        </caption>
        <thead>
          <tr>
            <th>#No.</th>
            <th>Address</th>
            <th>$HARU</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member: any) => {
            return (
              <tr>
                <th>##</th>
                <td>{member}</td>
                <td>unknown</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
export default Members;
