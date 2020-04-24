import React, { useState, useEffect } from "react";
import volumeStore from "../stores/volumeStore";

import VolumeList from "./VolumeList";
import { Link } from "react-router-dom";
import { loadVolumes, deleteVolume } from "../actions/volumeActions";

function VolumesPage() {
  const [volumes, setVolumes] = useState(volumeStore.getVolumes());

  useEffect(() => {
    volumeStore.addChangeListener(onChange);
    if (volumes.length === 0) loadVolumes();
    return () => volumeStore.removeChangeListener(onChange); // cleanup on unmount
  }, [volumes.length]);

  function onChange() {
    setVolumes(volumeStore.getVolumes());
  }

  return (
    <>
      <h2>Volumes</h2>
      <Link className="btn btn-primary" to="/volume">
        Add Volume
      </Link>
      <VolumeList volumes={volumes} deleteVolume={deleteVolume} />
    </>
  );
}

export default VolumesPage;
