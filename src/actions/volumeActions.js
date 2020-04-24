import dispatcher from "../appDispatcher";
import * as volumeApi from "../api/volumeApi";
import actionTypes from "./actionTypes";

export function saveVolume(volume) {
  return volumeApi.saveVolume(volume).then((savedVolume) => {
    // Hey dispatcher, go tell all the stores that a volume was just created.
    dispatcher.dispatch({
      // if (actionType === volume.id){
      //   actionTypes.UPDATE_VOLUME
      // } else {
      //   actionTypes.CREATE_VOLUME
      // }
      actionType: volume.id
        ? actionTypes.UPDATE_VOLUME
        : actionTypes.CREATE_VOLUME,
      volume: savedVolume,
    });
  });
}

export function loadVolumes() {
  return volumeApi.getVolumes().then((volumes) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_VOLUMES,
      volumes: volumes,
    });
  });
}

export function deleteVolume(id) {
  return volumeApi.deleteVolume(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_VOLUME,
      id: id,
    });
  });
}
