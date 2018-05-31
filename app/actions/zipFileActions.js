import JSZip from 'jszip';
import StreamZip from 'node-stream-zip';
import path from 'path';
import electron from 'electron';
const fs = electron.remote.require('fs');
const rimraf = require('rimraf');
const os = require('os');
const AdmZip = require('adm-zip');


export const generateFile = (manifest) => {

  return dispatch =>{
    dispatch({type: 'LOADING_ZIP'});
    const zip = new AdmZip();
    const language ='test';


    let pathToSave = `${os.homedir()}${path.sep}test.zip`;
    const date = Date.now();

    if (os.platform() === "win32"){
      pathToSave = `${os.homedir()}${path.sep}Desktop${path.sep}test.zip`;
    }

         const te = `C:${path.sep}Users${path.sep}lopezj${path.sep}Desktop${path.sep}TE${path.sep}7.PNG`;

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
         dispatch({type: 'FILE_ZIPED'});


}

  }
