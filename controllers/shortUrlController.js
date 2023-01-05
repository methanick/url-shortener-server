const ShortUrls = require('../models/shortUrl')
const shortId = require('shortid')


// Short URL Generator
exports.create = async (req, res) => {
  let { fullUrl } = req.body;
  if (!/^https?:\/\//i.test(fullUrl)) {
    fullUrl = 'http://' + fullUrl;
}
  const base = process.env.BASE;

  const urlId = shortId.generate();
  
    try {
      let url = await ShortUrls.findOne({ fullUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = `${base}/${urlId}`;

        url = new ShortUrls({
          fullUrl,
          urlId,
          shortUrl,
        });

        await url.save();
        res.json(url);
      }
    } catch (err) {
      res.status(500).json('Server Error');
    }
  
};

// Get Short Url and Redirect
exports.get = async (req, res) => {
    try {
      const url = await ShortUrls.findOne({ urlId: req.params.urlId });
      if (url) {
        return res.redirect(url.fullUrl);
      } else res.status(404).json('Not found');
    } catch (err) {
      res.status(500).json('Server Error');
    }
  };


// Get 10 Short Url
exports.getAll = async (req, res) => {
    try {
      const urls = await ShortUrls.find().limit(10).sort({createAt:-1})
        return res.json(urls)
    } catch (err) {
      res.status(500).json('Server Error');
    }
  };