function Game() {

  Game.prototype.frames = {1:[1,2], 2:[1,2], 3:[1,2], 4:[1,2], 5:[1,2],
    6:[1,2], 7:[1,2], 8:[1,2], 9:[1,2], 10:[1,2]};

  Game.prototype.currentFrame = 1;

  Game.prototype.returnCurrentFrame = function() {
    return this.currentFrame;
  }



}