const INITIAL_STATE = {
  loading: false,
  language: null,
  manifest: null,
  filesExtracted: false,
  translation: {},
  generatingFile: false,
  fileObtained: false
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case 'LOADING':
      return { ...state, loading: true };

    case 'FILE_UNZIPED':
      return {
        ...state,
        loading: false
      };

    case 'SAVE_LANGUAGE':

      return {
        ...state,
        language: action.lang,
      };

    case 'FILE_OBTAINED':
      return {
        ...state,
        manifest: action.manifest,
        loading: false,
        fileObtained: true
      };

    case 'GENERATING_FILE':
      return {
        ...state,
        generatingFile: true
      };

    case 'FILE_GENERATED':
      return {
        ...state,
        generatingFile: false,
        filesExtracted: false,
        fileGenerated: true,
        translation: {}
      };

    case 'SAVE_TRANSLATION':
      return { ...state, translation: { ...state.translation, [action.devKey]: action.text }}

    case 'DELETING_FILE':
      return { ...state, fileGenerated: false }

    case 'RESET':
      return INITIAL_STATE;

    default:
      return state;

  }
}
