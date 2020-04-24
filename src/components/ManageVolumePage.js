import React, { useState, useEffect } from "react";
import VolumeForm from "./VolumeForm";
import volumeStore from "../stores/volumeStore";
import { toast } from "react-toastify";
import * as volumeActions from "../actions/volumeActions";

const ManageVolumePage = (props) => {
  const [errors, setErrors] = useState({});
  const [volumes, setVolumes] = useState(volumeStore.getVolumes());
  const [volume, setVolume] = useState({
    id: null,
    slug: "",
    name: "",
    userId: null,
    size: null,
    description: "",
    status: "",
    type: "",
  });

  useEffect(() => {
    volumeStore.addChangeListener(onChange);
    const slug = props.match.params.slug; // from the path `/volumes/:slug`
    if (volumes.length === 0) {
      volumeActions.loadVolumes();
    } else if (slug) {
      setVolume(volumeStore.getVolumeBySlug(slug));
    }
    return () => volumeStore.removeChangeListener(onChange);
  }, [volumes.length, props.match.params.slug]);

  function onChange() {
    setVolumes(volumeStore.getVolumes());
  }

  function handleChange({ target }) {
    setVolume({
      ...volume,
      [target.name]: target.value,
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!volume.name) _errors.name = "Name is required";
    if (!volume.type) _errors.type = "Type is required";
    if (!volume.size) _errors.size = "Size is required";

    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    volumeActions.saveVolume(volume).then(() => {
      props.history.push("/volumes");
      toast.success("Volume saved.");
    });
  }

  return (
    <>
      <h2>Manage Volume</h2>
      <VolumeForm
        errors={errors}
        volume={volume}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageVolumePage;
