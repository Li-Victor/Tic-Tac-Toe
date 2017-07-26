describe('choose function ', function () {
    beforeEach(function () {
        computer = undefined;
        user = undefined;
        userTurn = undefined;
    });

    afterEach(function () {
        computer = undefined;
        user = undefined;
        userTurn = undefined;
    });

    it('user choose X', function () {
        choose('X');
        expect(user).toBe('X');
        expect(computer).toBe('O');
        expect(userTurn).toBe(false);
    });

    it('user choose O', function () {
        choose('O');
        expect(user).toBe('O');
        expect(computer).toBe('X');
        expect(userTurn).toBe(true);
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

describe('user choose function', function () {
    beforeEach(function () {
        game = {
            row1: [],
            row2: [],
            row3: []
        };

        spotsLeft = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        user = 'X';
    });

    afterEach(function () {
        game = {
            row1: [],
            row2: [],
            row3: []
        };

        spotsLeft = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        user = undefined;
    });

    it('Position 0 - 2', function () {
        //0 would return true and updates game
        expect(userChoose(0)).toBe(true);
        expect(game.row1).toEqual(['X']);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);

        //1 would return true and udpates game
        expect(userChoose(1)).toBe(true);
        expect(game.row1).toEqual(['X', 'X']);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([2, 3, 4, 5, 6, 7, 8]);

        //2 would return true and updates game
        expect(userChoose(2)).toBe(true);
        expect(game.row1).toEqual(['X', 'X', 'X']);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([3, 4, 5, 6, 7, 8]);

        //0-2 position again would return false and not do anything
        expect(userChoose(0)).toBe(false);
        expect(game.row1).toEqual(['X', 'X', 'X']);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([3, 4, 5, 6, 7, 8]);

        expect(userChoose(1)).toBe(false);
        expect(game.row1).toEqual(['X', 'X', 'X']);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([3, 4, 5, 6, 7, 8]);

        expect(userChoose(2)).toBe(false);
        expect(game.row1).toEqual(['X', 'X', 'X']);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([3, 4, 5, 6, 7, 8]);
    });

    it('Position 3 - 5', function () {
        //3 would return true and updates game
        expect(userChoose(3)).toBe(true);
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual(['X']);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([0, 1, 2, 4, 5, 6, 7, 8]);

        //4 would return true and updates game
        expect(userChoose(4)).toBe(true);
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual(['X', 'X']);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([0, 1, 2, 5, 6, 7, 8]);

        //5 would return true and updates game
        expect(userChoose(5)).toBe(true);
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual(['X', 'X', 'X']);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([0, 1, 2, 6, 7, 8]);

        //3-5 position again would return false and not do anything
        expect(userChoose(3)).toBe(false);
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual(['X', 'X', 'X']);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([0, 1, 2, 6, 7, 8]);

        expect(userChoose(4)).toBe(false);
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual(['X', 'X', 'X']);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([0, 1, 2, 6, 7, 8]);

        expect(userChoose(5)).toBe(false);
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual(['X', 'X', 'X']);
        expect(game.row3).toEqual([]);
        expect(spotsLeft).toEqual([0, 1, 2, 6, 7, 8]);

    });

    it('Position 6 - 8', function () {
        //6 would return true and updates game
        expect(userChoose(6)).toBe(true);
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual(['X']);
        expect(spotsLeft).toEqual([0, 1, 2, 3, 4, 5, 7, 8]);

        //7 would return true and updates game
        expect(userChoose(7)).toBe(true);
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual(['X', 'X']);
        expect(spotsLeft).toEqual([0, 1, 2, 3, 4, 5, 8]);

        //8 would return true and updates game
        expect(userChoose(8)).toBe(true);
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual(['X', 'X', 'X']);
        expect(spotsLeft).toEqual([0, 1, 2, 3, 4, 5]);

        //6-8 position again would return false and not do anything
        expect(userChoose(6)).toBe(false);
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual(['X', 'X', 'X']);
        expect(spotsLeft).toEqual([0, 1, 2, 3, 4, 5]);

        expect(userChoose(7)).toBe(false);
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual(['X', 'X', 'X']);
        expect(spotsLeft).toEqual([0, 1, 2, 3, 4, 5]);

        expect(userChoose(8)).toBe(false);
        expect(game.row1).toEqual([]);
        expect(game.row2).toEqual([]);
        expect(game.row3).toEqual(['X', 'X', 'X']);
        expect(spotsLeft).toEqual([0, 1, 2, 3, 4, 5]);
    });

});

describe('win function', function () {
    beforeEach(function () {
        game = {
            row1: [],
            row2: [],
            row3: []
        };
    });

    afterEach(function () {
        game = {
            row1: [],
            row2: [],
            row3: []
        };
    });

    describe('row', function () {
        describe('row win', function () {
            it('first row', function () {
                game = {
                    row1: ['X', 'X', 'X'],
                    row2: [],
                    row3: []
                };

                expect(win()).toBe(true);
            });

            it('second row', function () {
                game = {
                    row1: [],
                    row2: ['X', 'X', 'X'],
                    row3: []
                };

                expect(win()).toBe(true);
            });

            it('third row', function () {
                game = {
                    row1: [],
                    row2: [],
                    row3: ['X', 'X', 'X'],
                };

                expect(win()).toBe(true);
            });
        });

        describe('row one off', function () {
            it('first row', function () {
                game = {
                    row1: ['O', 'X', 'X'],
                    row2: [],
                    row3: []
                };

                expect(win()).toBe(false);

            });

            it('second row', function () {
                game = {
                    row1: [],
                    row2: ['X', 'O', 'X'],
                    row3: []
                };

                expect(win()).toBe(false);
            });

            it('third row', function () {
                game = {
                    row1: [],
                    row2: [],
                    row3: ['X', 'X', 'O'],
                };

                expect(win()).toBe(false);
            });
        });
    });

    describe('column', function () {
        describe('column win', function () {
            it('first column', function () {
                game = {
                    row1: ['X'],
                    row2: ['X'],
                    row3: ['X']
                };

                expect(win()).toBe(true);
            });

            it('second column', function () {
                game = {
                    row1: [, 'X'],
                    row2: [, 'X'],
                    row3: [, 'X']
                };

                expect(win()).toBe(true);
            });

            it('third column', function () {
                game = {
                    row1: [, , 'X'],
                    row2: [, , 'X'],
                    row3: [, , 'X']
                };

                expect(win()).toBe(true);
            });
        });

        describe('column one off', function () {
            it('first column', function () {
                game = {
                    row1: ['O'],
                    row2: ['X'],
                    row3: ['X']
                };

                expect(win()).toBe(false);
            });

            it('second column', function () {
                game = {
                    row1: [, 'X'],
                    row2: [, 'O'],
                    row3: [, 'X']
                };

                expect(win()).toBe(false);
            });

            it('third column', function () {
                game = {
                    row1: [, , 'X'],
                    row2: [, , 'X'],
                    row3: [, , 'O']
                };

                expect(win()).toBe(false);
            });
        });
    });

    describe('diagonal', function () {
        describe('diagonal win', function () {
            it('diagonal upper left to bottom right', function () {
                game = {
                    row1: ['X' , ,],
                    row2: [, 'X' ,],
                    row3: [, , 'X']
                };

                expect(win()).toBe(true);
            });

            it('diagonal upper right to lower left', function () {
                game = {
                    row1: [, , 'X'],
                    row2: [, 'X' ,],
                    row3: ['X' , ,]
                };

                expect(win()).toBe(true);
            });
        });

        describe('diagonal one off', function () {
            it('diagonal upper left to bottom right', function () {
                game = {
                    row1: ['O' , ,],
                    row2: [, 'X' ,],
                    row3: [, , 'X']
                };

                expect(win()).toBe(false);
            });

            it('diagonal upper right to lower left', function () {
                game = {
                    row1: [, , 'X'],
                    row2: [, 'X' ,],
                    row3: ['O' , ,]
                };

                expect(win()).toBe(false);
            });
        });
    });
});

describe('gameEnd function', function () {
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
            row1: [ , "O", "X"],
            row2: ["X", "O", "O"],
            row3: ["O", "X", "X"]
        };

        spotsLeft = [0];

        expect(gameEnd()).toBe(false);

    });

    it('game is finished', function () {
        game = {
            row1: ["X", "X", "X"],
            row2: ["X", "X", "X"],
            row3: ["X", "X", "X"]
        };

        spotsLeft = [];

        expect(gameEnd()).toBe(true);

    });
});
