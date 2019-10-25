var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ratingSchema = new Schema({
    placeId: Number,
    hostId: Number,
    hostName: String,
    hostIcon: String,
    totalRatingAverages: Number,
    totalReviews: Number,
    ratingAverages: {
        Communication: Number,
        Cleanliness: Number,
        Value: Number,
        Checkin: Number,
        Accuracy: Number,
        Location: Number
    },
    reviews: [{
        userId: Number,
        userName: String,
        userIcon: String,
        messageText: String,
        responded: Boolean,
        responseText: String,
        responseTime: String,
        postDate: String,
        totalRating: Number,
        ratings: {
            Communication: Number,
            Cleanliness: Number,
            Value: Number,
            Checkin: Number,
            Accuracy: Number,
            Location: Number
        }
    }],
  });

  module.exports = mongoose.model('ratings', ratingSchema);