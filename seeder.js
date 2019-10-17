var Ratings = require('./seed.js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ratings',{ useNewUrlParser: true, useUnifiedTopology: true });

var seeds = [
    new Ratings({
        placeId: 1,
        hostId: 1,
        hostName: "Jimmy Meh",
        hostIcon: 'https://s3.amazonaws.com/uifaces/faces/twitter/maz/128.jpg',
        totalRatingAverages: 5,
        totalReviews: 3,
        ratingAverages: {
            Communication: 5,
            Cleanliness: 5,
            Value: 5,
            Checkin: 5,
            Accuracy: 5,
            Location: 5
        },
        reviews: [{
            userId: 1,
            userName: "Kevin Smith",
            userIcon: "https://s3.amazonaws.com/uifaces/faces/twitter/peterlandt/128.jpg",
            messageText: "I Love the Cats!",
            responded: false,
            responseText: "",
            responseTime: "",
            postDate: "December 2018",
            totalRating: 5,
            ratings: {
                Communication: 5,
                Cleanliness: 5,
                Value: 5,
                Checkin: 5,
                Accuracy: 5,
                Location: 5
            }
        },
        {
            userId: 2,
            userName: "Gabe Stehr",
            userIcon: "https://s3.amazonaws.com/uifaces/faces/twitter/bcrad/128.jpg",
            messageText: "Such House! Much Wows! Will bnb again",
            responded: false,
            responseText: "",
            responseTime: "",
            postDate: "January 2019",
            totalRating: 5,
            ratings: {
                Communication: 5,
                Cleanliness: 5,
                Value: 5,
                Checkin: 5,
                Accuracy: 5,
                Location: 5
            }
        },
        {
            userId: 3,
            userName: "Daniel Collier",
            userIcon: "https://s3.amazonaws.com/uifaces/faces/twitter/wiljanslofstra/128.jpg",
            messageText: "Amazing House!",
            responded: false,
            responseText: "",
            responseTime: "",
            postDate: "January 2019",
            totalRating: 5,
            ratings: {
                Communication: 5,
                Cleanliness: 5,
                Value: 5,
                Checkin: 5,
                Accuracy: 5,
                Location: 5
            }
        },
        ],
    })
];

var done=0;
for (var i = 0; i < seeds.length; i++) {
    seeds[i].save(function(err, result) {
        done++;
    if(done === seeds.length){
        exit();
    }
    });
}
function exit(){
    mongoose.disconnect();
}
