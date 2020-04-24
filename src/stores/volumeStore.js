import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _volumes = [];

class VolumeStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getVolumes() {
    return _volumes;
  }

  getVolumeBySlug(slug) {
    return _volumes.find((volume) => volume.slug === slug);
  }
}

const store = new VolumeStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.DELETE_VOLUME:
      _volumes = _volumes.filter(
        (volume) => volume.id !== parseInt(action.id, 10)
      );
      store.emitChange();
      break;
    case actionTypes.CREATE_VOLUME:
      _volumes.push(action.volume);
      store.emitChange();
      break;
    case actionTypes.UPDATE_VOLUME:
      _volumes = _volumes.map((volume) =>
        volume.id === action.volume.id ? action.volume : volume
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_VOLUMES:
      _volumes = action.volumes;
      store.emitChange();
      break;
    default:
    // nothing to do here
  }
});

export default store;
