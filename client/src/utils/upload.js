import axios from 'axios'

//const proxyURL = 'https://robwu.nl/cors-anywhere.html/';
const uploadURL = 'https://uguu.se/api.php?d=upload-tool';

async function upload(attachment) {
  let formData = new FormData();
  formData.append('file', attachment);

  return await axios.post( uploadURL, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      crossdomain: true
    })
    .then(response => {
      return {
        name: attachment.name,
        type: attachment.type,
        size: attachment.size,
        url: response.data
      }
    })
    .catch(error => {
      return error;
    });
}

export { upload };
