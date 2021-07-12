const {findShortestPathLength} = require('../src/pathfinding/maze')

describe('pathfinding - happy path', function() {
    const fourByFour = [
        [2, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 2]
      ]
    it('should solve a 4x4 maze', () => {
        expect(findShortestPathLength(fourByFour, [0,0], [3,3])).toEqual(6);
    })

    const sixBySix = [
        [0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0]
      ];
      it("should solve a 6x6 maze", () => {
        expect(findShortestPathLength(sixBySix, [1, 1], [2, 5])).toEqual(7);
      });
      const eightByEight = [
        [0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 0],
        [0, 2, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 2]
      ];
      it("should solve a 8x8 maze", () => {
        expect(findShortestPathLength(eightByEight, [1, 7], [7, 7])).toEqual(16);
      });
    
      const fifteenByFifteen = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
        [0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0,],
        [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0,],
        [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0,],
        [0, 0, 1, 0, 1, 0, 1, 1, 2, 1, 0, 1, 0, 1, 0,],
        [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0,],
        [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0,],
        [0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0,],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
      ]
      it("should solve a 15x15 maze", () => {
        expect(findShortestPathLength(fifteenByFifteen, [1, 1], [8, 8])).toEqual(78);
      });
});

describe('pathfinding - edge cases', function() {
    const byEachOther = [
        [0, 0, 0, 0, 0],
        [0, 2, 2, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
      ];
      it("should solve the maze if they're next to each other", () => {
        expect(findShortestPathLength(byEachOther, [1, 1], [2, 1])).toEqual(1);
      });
})