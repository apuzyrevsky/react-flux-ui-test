import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function VolumeForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="name"
        label="Name"
        onChange={props.onChange}
        name="name"
        value={props.volume.name}
        error={props.errors.name}
      />

      <div className="form-group">
        <label htmlFor="type">Type</label>
        <div className="field">
          <select
            id="type"
            name="type"
            onChange={props.onChange}
            value={props.volume.type || ""}
            className="form-control"
          >
            <option value="" />
            <option value="SSD">SSD</option>
            <option value="HDD">HDD</option>
          </select>
        </div>
        {props.errors.type && (
          <div className="alert alert-danger">{props.errors.type}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="size">Size</label>
        <div className="field">
          <input
            id="size"
            type="number"
            min="1"
            max="100000"
            onChange={props.onChange}
            name="size"
            className="form-control"
            value={props.volume.size}
          />
        </div>
        {props.errors.size && (
          <div className="alert alert-danger">{props.errors.size}</div>
        )}
      </div>

      <TextInput
        id="description"
        label="Description"
        name="description"
        onChange={props.onChange}
        value={props.volume.description}
        error={props.errors.description}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

VolumeForm.propTypes = {
  volume: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default VolumeForm;
