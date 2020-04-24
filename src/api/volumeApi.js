import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/volumes/";

export function getVolumes() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getVolumeBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((volumes) => {
        if (volumes.length !== 1) throw new Error("Volume not found: " + slug);
        return volumes[0]; // should only find one volume for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveVolume(volume) {
  return fetch(baseUrl + (volume.id || ""), {
    method: volume.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...volume,
      // Parse userId to a number (in case it was sent as a string).
      userId: parseInt(volume.userId, 10),
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteVolume(volumeId) {
  return fetch(baseUrl + volumeId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
