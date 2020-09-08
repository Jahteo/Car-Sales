
const ADD_FEATURE = "ADD_FEATURE";
const REMOVE_FEATURE = "REMOVE_FEATURE";


function addFeature(feature) {
  return {
    type: ADD_FEATURE,
    payload: feature
  }
}
export { addFeature }

function removeFeature(feature) {
  return {
    type: REMOVE_FEATURE,
    payload: feature
  }
}
export { removeFeature }