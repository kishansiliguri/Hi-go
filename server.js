const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const dataFile = path.join(__dirname, 'data.json');

// Multer setup for JPEG uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, 'img_' + Date.now() + '.jpg');
  }
});
const upload = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
            cb(null, true);
        } else {
            cb(new Error('Only JPEG images are allowed'));
        }
    }
});

app.get('/api/data', (req, res) => {
  if (fs.existsSync(dataFile)) {
    res.json(JSON.parse(fs.readFileSync(dataFile, 'utf8')));
  } else {
    res.json({});
  }
});

app.post('/api/save', (req, res) => {
  fs.writeFileSync(dataFile, JSON.stringify(req.body, null, 2));
  res.json({ success: true });
});

app.post('/api/upload', upload.single('image'), (req, res) => {
  if (req.file) {
    res.json({ url: '/uploads/' + req.file.filename });
  } else {
    res.status(400).json({ error: 'Upload failed or invalid format (only JPEG allowed)' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
