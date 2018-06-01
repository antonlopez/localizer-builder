import JSZip from 'jszip';
import StreamZip from 'node-stream-zip';
import path from 'path';
import electron from 'electron';
const fs = electron.remote.require('fs');
const rimraf = require('rimraf');
const os = require('os');
const AdmZip = require('adm-zip');


export const generateFile = (manifest, projectName) => {

  return dispatch =>{
    dispatch({type: 'LOADING_ZIP'});
    const zip = new AdmZip();
    const language ='test';
    const date = Date.now();


    let pathToSave = `${os.homedir()}${path.sep}${projectName}_${date}.zip`;


    if (os.platform() === "win32"){
      pathToSave = `${os.homedir()}${path.sep}Desktop${path.sep}${projectName}_${date}.zip`;
    }


         const images = [];
         const newFile = [];
        Object.keys(manifest).map(lng =>{
            const imgFile = manifest[lng].full_path;
            newFile.push(manifest[lng]);

            if (imgFile !== undefined) {
                images.push(imgFile);
          }

         })
         const test= images;

         images.map(img => zip.addLocalFile(img));
         const json = JSON.stringify(newFile);

         zip.addFile("manifest.json", new Buffer(json), "comment");

         zip.writeZip(/*target file name*/pathToSave);
         dispatch({type: 'FILE_ZIPED', fileLocation: pathToSave});


}

  }
