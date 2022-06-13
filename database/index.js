const mongoose = require('mongoose');
const options = { useNewUrlParser: true };

mongoose.connect('mongodb://localhost/breweries', options);

// const db = mongoose.connection;

const brewerySchema = mongoose.Schema({
  id: {
    unique: true,
    type: String,
  },
  name: String,
  type: String,
  address: {
    street: String,
    address_2: String,
    address_3: String,
    city: String,
    state: String,
    zip: String,
  },
  url: String,
  location: {
    lat: Number,
    lng: Number,
  },
  phone: String,
});

const Brewery = mongoose.model('Brewery', brewerySchema);

const save = (data) => {
  const brewery = new Brewery({
    id: data.id,
    name: data.name,
    type: data.brewery_type,
    address: {
      street: data.street,
      address_2: data.address_2,
      address_3: data.address_3,
      city: data.city,
      state: data.state,
      zip: data.postal_code,
    },
    url: data.website_url,
    location: {
      lat: data.latitude,
      lng: data.longitude,
    },
    phone: data.phone,
  });
  brewery.save((err) => {
    if (err) {
      console.log('error saving brewery');
    }
  });
};

const get = (callback) => {
  Brewery.find({})
    .sort({ id: 1 })
    .exec((err, data) => {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        console.log(data);
        callback(null, data);
      }
    });
};

module.exports = {
  save,
  get,
};
