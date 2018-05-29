const INITIAL_STATE = {
  loading: false,
  generatingFile: false,
  fileObtained: false,
  searchTerm: '',
  valuesToFilter: [],
  filteredWords: [],
  addImage: true,
  images: [],
  imagePath: null,
  ImageId: 0,
  manifest: [],
  devKeys: [],
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

    case 'WORKSPACE_UPDATE':              //action.payload === {prop: 'name', value: 'jane' }
      return { ...state, [action.props]: action.value } ; // [] key interpolation

    case 'ADD_IMAGE':
      return {
        ...state,
        images: [...state.images, action.img]
      };

    case 'VIEW_IMAGE':
      return {
        ...state,
        imagePath: action.url,
        imageId: action.id,
        addImage: false
      };

    case 'ADD_TO_MANIFEST':
      return {
        ...state, manifest:[ ...state.manifest, action.objToAdd],
      }



    case 'UPLOAD_IMAGE':
      return {
        ...state,
        addImage: true,
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
