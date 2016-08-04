const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher.js');
const TrackConstants = require('../constants/track_constants');

const TrackStore = new Store(AppDispatcher);

let _tracks = {};

TrackStore.all = () => {
  let tracksArr = [];

  for (var i in _tracks) {
    if (_tracks.hasOwnProperty(i)) {
      tracksArr.push(_tracks[i]);
    }
  }

  return tracksArr;
};

const resetAllTracks = (tracks) => {
  _tracks = {};

  tracks.forEach(function (track) {
    _tracks[track.id] = track;
  });
};

TrackStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case TrackConstants.TRACKS_RECEIVED:
      resetAllTracks(payload.tracks);
      TrackStore.__emitChange();
      break;
  }
};

module.exports = TrackStore;
