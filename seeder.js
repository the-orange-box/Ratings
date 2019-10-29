var Ratings = require('./seed.js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ratings',{ useNewUrlParser: true, useUnifiedTopology: true });
var faker = require('faker');

var checkResponse = (bool) => {
  if (bool) {
    return faker.lorem.paragraph()
  }
}

var generateReviews = () => {
  var reviewArray =[]
  for (var i = 0; i < faker.random.number({min:80, max:120}); i++){
    let currentDate = faker.date.month();
    let response = faker.random.boolean();
    reviewArray.push({
      userId: i,
      userName: faker.name.findName(),
      userIcon: faker.image.avatar(),
      messageText: faker.lorem.paragraph(),
      responded: response,
      responseText: checkResponse(response),
      postDate: currentDate,
      responseTime: currentDate,
      ratings: {
          Communication: faker.random.number({min:1, max:5, precision: 0.1}),
          Cleanliness: faker.random.number({min:1, max:5, precision: 0.1}),
          Value: faker.random.number({min:1, max:5, precision: 0.1}),
          Checkin: faker.random.number({min:1, max:5, precision: 0.1}),
          Accuracy: faker.random.number({min:1, max:5, precision: 0.1}),
          Location: faker.random.number({min:1, max:5, precision: 0.1})
      }
    })
  }
  return reviewArray;
};

var generatePlaces = () => {
  var places = [];

  for(var j = 0; j < 101; j++) {
    places.push(new Ratings({
    placeId: j,
    hostId: j,
    hostName: faker.name.findName(),
    hostIcon: faker.image.avatar(),
    ratingAverages: {
      Communication: faker.random.number({min:1, max:5, precision: 0.1}),
      Cleanliness: faker.random.number({min:1, max:5, precision: 0.1}),
      Value: faker.random.number({min:1, max:5, precision: 0.1}),
      Checkin: faker.random.number({min:1, max:5, precision: 0.1}),
      Accuracy: faker.random.number({min:1, max:5, precision: 0.1}),
      Location: faker.random.number({min:1, max:5, precision: 0.1})
    },
    reviews: generateReviews()
    })
    )
  }
  return places;
}


var seeds = []
seeds.push(generatePlaces())

console.log(seeds)
//Fancy non promise seeding
var done=0;
for (var i = 0; i < seeds[0].length; i++) {
    seeds[0][i].save(function(err, result) {
        done++;
    if(done === seeds[0].length){
        exit();
    }
    });
}
function exit(){
    mongoose.disconnect();
}
