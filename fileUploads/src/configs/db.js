const { connect } = require("mongoose");

module.exports = () => {
  return connect("mongodb://127.0.0.1:27017/fileUploads");
};
