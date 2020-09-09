

  const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

function reducer (state = initialState, action) {
  console.log("reducer.js ran here")
  switch (action.type) {
    case "ADD_FEATURE":
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.concat(action.payload)
        },
        additionalPrice:
          (state.additionalPrice + action.payload.price)

      }
    case "REMOVE_FEATURE":
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter((item) => {
            return (item.id !== action.payload.id)
          })
        },
        //NOTE: this only removes the price once, wheras the filter will remove all the items that match, so the additionalPrice will be wrong whenever removing multiple features...
        additionalPrice:
          (state.additionalPrice - action.payload.price)
      }

    default:
      return state
  }
}
export default reducer;