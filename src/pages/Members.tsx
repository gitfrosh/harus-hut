import React from "react";

function Members() {
  const members = [
    {
      id: 1,
      address: "123",
      house: "Gryffindor",
      spell: "Lumos!",
      haru: 200,
    },
  ];

  return (
    <section>
      <h2 id="Tables">Proud PatronusDAO members</h2>

      <table>
        <caption>
          <em>We solemny swear that we are up to no good.</em>
        </caption>
        <thead>
          <tr>
            <th>#No.</th>
            <th>Address</th>
            <th>House</th>
            <th>Favourite Spell</th>
            <th>$HARU</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member: any) => {
            return (
              <tr>
                <th>{member.id}</th>
                <td>{member.address}</td>
                <td>{member.house}</td>
                <td>{member.spell}</td>
                <td>{member.haru}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
export default Members;
