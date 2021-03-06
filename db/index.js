'use strict';
const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURL);

Mongoose.connection.on('error', error => {
    // logger.log('error', 'Mongoose connection error: ' + error);
});

// Create a Schema that defines the structure for storing user data
const imageContainerSchema = new Mongoose.Schema({

    imageId: String,
    imageName: String,
    imageTags: [String],
    imageURL: String,
    imageAuthor: String,
    imageAuthor_id: String,
    imageVoteCount: Number,
    imagePublishDate: String,
    imageComments: String

});

const siteUserSchema = new Mongoose.Schema({
    userName: String,
    fullName: String,
    email: String,
    password: String,
    profileID : String,
    profilePicURL: String,
    votes: [String],
    comments: [{comment: String, image: String}],//array of an object
    uploaded: [String],
    dateOfSignup: Date,
    lastLogin: Date
});

const BlogPostSchema = new Mongoose.Schema({
    blogTitle:String,
    blogHTML:String,
    blogAuthor_id:String,
    blogAuthor_fullName:String,
    blogCreationDate:Date,
    blogLastUpdatedDate:Date,
    blogLikes:Number,
    blogComments:[],
});


// Turn the schema into a usable model
let imageContainerModel = Mongoose.model('imageContainer', imageContainerSchema);
let siteUserModel = Mongoose.model('siteUser', siteUserSchema);
let blogPostModel = Mongoose.model('blogPost', BlogPostSchema);



module.exports = {
    Mongoose,
    imageContainerModel,
    siteUserModel,
    blogPostModel
};

