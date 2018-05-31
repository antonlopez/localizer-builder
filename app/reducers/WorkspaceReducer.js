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
  manifest: {},
  uploadedKeys: {},
  devKeys: [],
  imgName: null,
  wordsSelected: null,
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
        addImage: false,
        wordsSelected: action.wordsSelected,
      };

    case 'ADD_TO_MANIFEST':
      return {
        ...state,
        imgName: action.fileName,
        wordsSelected: action.words,
        valuesToFilter: state.valuesToFilter.filter(item => item !== action.deleteWord),
        filteredWords: state.filteredWords.filter(item => item !== action.deleteWord),
        devKeys: state.devKeys.filter(item => item !== action.deleteKey),
        manifest: {
          ...state.manifest,
          [action.fileName]: action.objToAdd
        }
      };

    case 'UPDATE_MANIFEST':
      return {
        ...state,
        manifest: action.manifest,
        wordsSelected: action.words,
        valuesToFilter: state.valuesToFilter.filter(item => item !== action.deleteWord),
        filteredWords: state.filteredWords.filter(item => item !== action.deleteWord),
        devKeys: state.devKeys.filter(item => item !== action.deleteKey),
      }



    case 'UPLOAD_IMAGE':
      return {
        ...state,
        addImage: true,
      };

    case 'FILE_OBTAINED':
      return {
        ...state,
        uploadedKeys: action.uploadedKeys,
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
