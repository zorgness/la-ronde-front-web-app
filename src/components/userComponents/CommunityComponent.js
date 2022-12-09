import React from "react";
import Table from "react-bootstrap/Table";

const CommunityComponent = ({ communityData }) => {
  return (
    <div>
      <div className="community-info">
        <h3>Community</h3>
      </div>

      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>username</th>
            <th>instrument</th>
          </tr>
        </thead>
        <tbody>
          {communityData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.instrument}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default CommunityComponent;
