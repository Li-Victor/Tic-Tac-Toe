describe('choose function ', function () {
    beforeEach(function () {
        computer = undefined;
        user = undefined;
    });

    afterEach(function () {
        computer = undefined;
        user = undefined;
    });

    it('user choose X', function () {
        choose('X');
        expect(user).toBe('X');
        expect(computer).toBe('O');
    });

    it('user choose O', function () {
        choose('O');
        expect(user).toBe('O');
        expect(computer).toBe('X');
    });
});

describe('row set function', function () {
    it('[ , , ]', function () {
        expect(rowSet([ , , ])).toBe(false);
    });

    it('[ "X" , , ]', function () {
        expect(rowSet([ "X" , , ])).toBe(false);
    });

    it('[ , "X" , ]', function () {
        expect(rowSet([ , "X" , ])).toBe(false);
    });

    it('[ , , "X" ]', function () {
        expect(rowSet([ , , "X" ])).toBe(false);
    });

    it('[ "X" , "X" , ]', function () {
        expect(rowSet([ "X" , "X" , ])).toBe(false);
    });

    it('[ "X" , , "X" ]', function () {
        expect(rowSet([ "X" , , "X" ])).toBe(false);
    });

    it('[ , "X" , "X"]', function () {
        expect(rowSet([ , "X" , "X" ])).toBe(false);
    });

    it('["X" , "X" , "X"] should be true', function () {
        expect(rowSet(["X" , "X" , "X" ])).toBe(true);
    });
});

describe('all Set function', function () {
    afterEach(function () {
        game = {
            row1: [],
            row2: [],
            row3: []
        };

        spotsLeft = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    });

    it('game is not finished', function () {
        game = {
            row1: [ , "X", "X"],
            row2: ["X", "X", "X"],
            row3: ["X", "X", "X"]
        };

        spotsLeft = [0];

        expect(allSet()).toBe(false);
    });

    it('game is finished', function () {
        game = {
            row1: ["X", "X", "X"],
            row2: ["X", "X", "X"],
            row3: ["X", "X", "X"]
        };

        spotsLeft = [];

        expect(allSet()).toBe(true);
    });
});

describe('reset function', function () {
    afterEach(function () {
        game = {
            row1: [],
            row2: [],
            row3: []
        };

        spotsLeft = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    });

    it('game is not finished', function () {
        game = {
            row1: [ , "X", "X"],
            row2: ["X", "X", "X"],
            row3: ["X", "X", "X"]
        };

        spotsLeft = [0];

        reset();
        expect(game.row1).toEqual([ , "X", "X"]);
        expect(game.row2).toEqual(["X", "X", "X"]);
        expect(game.row3).toEqual(["X", "X", "X"]);
        expect(spotsLeft).toEqual([0]);

    });

    it('game is finished', function () {
        game = {
            row1: ["X", "X", "X"],
            row2: ["X", "X", "X"],
            row3: ["X", "X", "X"]
        };

        spotsLeft = [];

        reset();
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);

    });

});

describe('chooseLocation functions', function () {

    beforeEach(function () {
        game = {
            row1: [],
            row2: [],
            row3: []
        };

        spotsLeft = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    });

    afterEach(function () {
        game = {
            row1: [],
            row2: [],
            row3: []
        };

        spotsLeft = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    });

    it('chooseLocationRow1', function () {
        //first position
        chooseLocationRow1(0, 'X');
        expect(game.row1).toEqual(['X']);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);

        //second position
        chooseLocationRow1(1, 'X');
        expect(game.row1).toEqual(['X', 'X']);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual([]);
        console.log(spotsLeft);
        expect(spotsLeft).toEqual([2, 3, 4, 5, 6, 7, 8]);

        //third position
        chooseLocationRow1(2, 'X');
        expect(game.row1).toEqual(['X', 'X', 'X']);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([3, 4, 5, 6, 7, 8]);

        //first to third position again would not do anything
        chooseLocationRow1(0, 'X');
        expect(game.row1).toEqual(['X', 'X', 'X']);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([3, 4, 5, 6, 7, 8]);

        chooseLocationRow1(1, 'X');
        expect(game.row1).toEqual(['X', 'X', 'X']);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([3, 4, 5, 6, 7, 8]);

        chooseLocationRow1(2, 'X');
        expect(game.row1).toEqual(['X', 'X', 'X']);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([3, 4, 5, 6, 7, 8]);
    });

    it('chooseLocationRow2', function () {
        //first position
        chooseLocationRow2(0, 'X');
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual(['X']);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([0, 1, 2, 4, 5, 6, 7, 8]);

        //second position
        chooseLocationRow2(1, 'X');
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual(['X', 'X']);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([0, 1, 2, 5, 6, 7, 8]);

        //third position
        chooseLocationRow2(2, 'X');
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual(['X', 'X', 'X']);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([0, 1, 2, 6, 7, 8]);

        //first to third position again would not do anything
        chooseLocationRow2(0, 'X');
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual(['X', 'X', 'X']);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([0, 1, 2, 6, 7, 8]);

        chooseLocationRow2(1, 'X');
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual(['X', 'X', 'X']);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([0, 1, 2, 6, 7, 8]);

        chooseLocationRow2(2, 'X');
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual(['X', 'X', 'X']);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([0, 1, 2, 6, 7, 8]);

    });

    it('chooseLocationRow3', function () {
        //first position
        chooseLocationRow3(0, 'X');
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual(['X']);
        expect(spotsLeft).toEqual([0, 1, 2, 3, 4, 5, 7, 8]);

        //second position
        chooseLocationRow3(1, 'X');
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual(['X', 'X']);
        expect(spotsLeft).toEqual([0, 1, 2, 3, 4, 5, 8]);

        //third position
        chooseLocationRow3(2, 'X');
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual(['X', 'X', 'X']);
        expect(spotsLeft).toEqual([0, 1, 2, 3, 4, 5]);

        //first to third position again would not do anything
        chooseLocationRow3(0, 'X');
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual(['X', 'X', 'X']);
        expect(spotsLeft).toEqual([0, 1, 2, 3, 4, 5]);

        chooseLocationRow3(1, 'X');
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual(['X', 'X', 'X']);
        expect(spotsLeft).toEqual([0, 1, 2, 3, 4, 5]);

        chooseLocationRow3(2, 'X');
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual(['X', 'X', 'X']);
        expect(spotsLeft).toEqual([0, 1, 2, 3, 4, 5]);
    });
});
