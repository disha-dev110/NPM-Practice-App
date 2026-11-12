const dayjs = require('dayjs');

// Custom function to format date
function getFormattedDate() {
    return dayjs().format('MMMM D, YYYY - h:mm A');
}

module.exports = { getFormattedDate };