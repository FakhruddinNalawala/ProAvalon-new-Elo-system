// This file helps us load in the roles from the folder
import fs from 'fs';
import path from 'path';

export const getPhases = function (thisRoom) {
  const normalizedPath = path.join(__dirname, './phases');

  const phases = {};
  const obj = {};

  fs.readdirSync(normalizedPath).forEach((file) => {
    // console.log(file);

    // If it is a javascript file, add it
    if (file.includes('.js') === true && !file.includes('.map')) {
      // Trim .js at the end of the file name
      name = file.replace('.js', '');

      phases[name] = require(`./phases/${file}`).default;
    }
  });

  for (var name in phases) {
    if (phases.hasOwnProperty(name)) {
      // Initialise it
      obj[name] = new phases[name](thisRoom);
    }
  }

  return obj;
};
