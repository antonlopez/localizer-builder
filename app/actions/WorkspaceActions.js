
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
      // error handling
      const uploadedKeys = JSON.parse(data);  // json object form extracted data
      dispatch({ type: 'FILE_OBTAINED', uploadedKeys });
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
debugger;
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
