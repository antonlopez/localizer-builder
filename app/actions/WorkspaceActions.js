
import JSZip from 'jszip';
import StreamZip from 'node-stream-zip';
import path from 'path';
import electron from 'electron';
const fs = electron.remote.require('fs');
const rimraf = require('rimraf');
const os = require('os');
const ipcRenderer  = electron.ipcRenderer;


export const getFile = (filePath, redirect) => {
  // read a zip file
return dispatch => {
    dispatch({ type: 'LOADING' });
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.log(error);
      }

        const split = filePath.lastIndexOf(path.sep);
        const fileName = filePath.slice(split + 1, filePath.length-5);// get thefile name

      const uploadedKeys = JSON.parse(data);  // json object form extracted data
      dispatch({ type: 'FILE_OBTAINED', uploadedKeys, fileName });
      redirect.push('/workspace');
    });
  }

}

export const workspaceUpdate = (props, value) => {

    return {
    type: 'WORKSPACE_UPDATE',
    props,
    value
    };


};

export const addImage = (img) => {
  return {
    type: 'ADD_IMAGE',
    img
  }
};

export const addToManifest = (word, key, url, manifest, NewValuesToFilter) => {
  const split = url.lastIndexOf(path.sep);
  const fileName = url.slice(split + 1, url.length);
  const objExist = manifest[fileName];
  const words = [];

  if (objExist !== undefined) {
    manifest[fileName].devKeys.push(key);
    manifest[fileName].text.push(word);
    manifest[fileName].text.map(tx => words.push(tx));

    return {
      type: 'UPDATE_MANIFEST',
      deleteWord: word,
      deleteKey: key,
      manifest,
      words,
      NewValuesToFilter
    };
  }
else {
    words.push(word);
    let objToAdd ={}
    objToAdd = {
     "text":[word],
     "devKeys":[key],
     "img_url":fileName,
     "full_path":url
    };

  return {
    type:'ADD_TO_MANIFEST',
      deleteWord: word,
      deleteKey: key,
    objToAdd,
    fileName,
    words,
    NewValuesToFilter
  }

}

};


export const addedWord = (word) => {
  return {
    type
   }

};


export const viewImage = (id, url, manifest) => {
  const wordsSelected = [];
  const split = url.lastIndexOf(path.sep);
  const fileName = url.slice(split + 1, url.length);
  if (manifest[fileName] !== undefined) {
    manifest[fileName].text.map(tx => wordsSelected.push(tx));
  }
  return {
    type: 'VIEW_IMAGE',
    id,
    url,
    wordsSelected
  }
}


export const saveLanguage = (lang) => {

return {
    type: 'SAVE_LANGUAGE',
    lang
  };
}

export const saveTranslation = (devKey, text) => {
  return {
    type: 'SAVE_TRANSLATION',
    devKey,
    text
  }
};



export const deletePrevious = () => {
  return dispatch => {
    dispatch({ type: 'DELETING_FILE' });
    const pathToDelete = `${os.homedir()}${path.sep}Desktop${path.sep}extracted`; //used only on windows
    rimraf(pathToDelete, function () { console.log('done'); });

  }

}


export const removeFromManifest = (word, manifest, valuesToFilter, imagePath, devKeys, filteredWords) => {
  const split = imagePath.lastIndexOf(path.sep);
  const fileName = imagePath.slice(split + 1, imagePath.length);    //get the fileName which is the key value on each object    picture_1: { text:[], devkeys:[], img_url:''}
  const index = manifest[fileName].text.indexOf(word);        //get the index of the word int the text array
  const devKey = manifest[fileName].devKeys[index];               // get the devKey

  manifest[fileName].text.splice(index, 1);
  manifest[fileName].devKeys.splice(index, 1);

  valuesToFilter.unshift(word);
  devKeys.unshift(devKey);


  return {
    type: 'REMOVED_FROM_SELECTED',
    manifest,
    valuesToFilter,
    devKeys,
    word
  };

}

export const reset = () => {
  return {
    type: 'RESET',
  };
}
