var Dispatcher = require('../dispatcher/dispatcher.js'),
    ApiUtil = require('../util/api_util.js');

var TagActions = {
  fetchTags: function () {
    ApiUtil.fetchAllTags();
  },

  updateTaggings: function (taggings) {
    ApiUtil.fetchAllTaggings(taggings);
  }

  // fetchProfileTags: function (profileTags) {
  //   ApiUtil.fetchAllProfileTags(profileTags);
  // }
};
