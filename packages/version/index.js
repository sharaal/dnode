const fs = require('fs');
const path = require('path');

let version;
module.exports = () => {
  if (!version) {
    version = require(path.join(process.cwd(), 'package.json')).version;
    try {
      version += '-' + fs.readFileSync(path.join(process.cwd(), 'REVISION'), 'utf-8').trim();
    } catch (e) {
      if (e.code !== 'ENOENT') {
        throw e;
      }
    }
  }
  return version;
};

module.exports.controller = () => [
  'get',
  [
    '/version',
    async (req, res) => {
      res.send(module.exports());
    },
  ],
];
