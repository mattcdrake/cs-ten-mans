class GameManager {
  constructor() {
    this.matchid = 1000;
    this.activeMatches = [];
  }

  get matchid() {
    return this._matchid;
  }

  set matchid(matchid) {
    this._matchid = matchid;
  }

  get activeMatches() {
    return this._activeMatches;
  }

  set activeMatches(activeMatches) {
    this._activeMatches = activeMatches;
  }

  addCurrentMatches(activeMatches) {
    this._activeMatches = activeMatches;
  }
}

module.exports = GameManager;
