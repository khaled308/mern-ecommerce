exports.uploadFiles = async (uploaded) => {
  const result = {};

  if (uploaded && typeof uploaded === "object") {
    if (uploaded.path) {
      result.singleFile = uploaded.path;
    }

    if (Array.isArray(uploaded)) {
      const images = [];
      uploaded.forEach((file) => {
        images.push(file.path);
      });
      result.multipleFiles = images;
    } else {
      for (let prop in uploaded) {
        if (Object.prototype.hasOwnProperty.call(uploaded, prop)) {
          const images = [];
          uploaded[prop].forEach((file) => {
            images.push(file.path);
          });
          result[prop] = images;
        }
      }
    }
  }

  return result;
};
