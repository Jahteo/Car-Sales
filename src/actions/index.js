
const ADD_FEATURE = "ADD_FEATURE";

function addFeature(feature) {
  return {
    type: ADD_FEATURE,
    payload: feature
  }
}
export { addFeature }