import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

const post = async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    // eslint-disable-next-line no-use-before-define
    console.log(req.body);
    await saveFile(files.file);
    return res.status(201).send('');
  });
};

const saveFile = async (file) => {
  console.log(file);
  const data = fs.readFileSync(file.filepath);
  fs.writeFileSync(`./public/${file.name}`, data);
  await fs.unlinkSync(file.path);
};

export default (req, res) => {
  req.method === 'POST'
    ? post(req, res)
    : req.method === 'PUT'
    ? console.log('PUT')
    : req.method === 'DELETE'
    ? console.log('DELETE')
    : req.method === 'GET'
    ? console.log('GET')
    : res.status(404).send('');
};
