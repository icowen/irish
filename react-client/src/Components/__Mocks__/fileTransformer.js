const path = require('path');

module.exports = {
    process(src, filename, config, options) {
        return JSON.stringify(path.basename(filename));
    }
};