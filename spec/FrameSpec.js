describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  })

  it("Starts with 10 pins", function() {
    expect(frame.standingPins).toEqual(10)
  })


})
