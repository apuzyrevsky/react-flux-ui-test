import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function VolumeList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Name</th>
          <th>Volume Type</th>
          <th>Size</th>

          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {props.volumes.map((volume) => {
          return (
            <tr key={volume.id}>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    props.deleteVolume(volume.id);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={"/volume/" + volume.slug}>{volume.name}</Link>
              </td>
              <td>{volume.type}</td>
              <td>{volume.size} GB</td>
              <td>{volume.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

VolumeList.propTypes = {
  deleteVolume: PropTypes.func.isRequired,
  volumes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default VolumeList;
