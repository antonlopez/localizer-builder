const INITIAL_STATE = {

  zippingFile: false,
  zipGenerated: false

}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case 'LOADING_ZIP':
      return { ...state, zippingFile: true };

    case 'FILE_ZIPED':
      return {
        ...state,
        zippingFile: false,
        zipGenerated: true
      };



    default:
      return state;

  }
}
