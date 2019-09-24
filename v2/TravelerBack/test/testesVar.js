var test = require('unit.js');
describe('Asserters', function () {
    it('Array', function () {
        test
            .array(['Placar', [0, 1]])
            .is(['Placar', [0, 1]])
            .case('Test failure', function () {
                test
                    .exception(function () {
                        test.array(['Placar', [0, 1]])
                            .is(['Placar', [0, '1']]);
                    })
                    .exception(function () {
                        test.array(['Placar', [0, 1]])
                            .is(['Placar', [0, 1, 2]]);
                    })
                    .exception(function () {
                        test.array(['Placar', [0, 1]])
                            .is(['Placar', [0]]);
                    })
                    .exception(function () {
                        test.array(['Placar', [0, 1]])
                            .is(['Score', [0, 1]]);
                    });
            });
        test
            .array(['Placar', [0, 1]])
            .isNot(['Placar', [0, '1']])
            .exception(function () {
                test.array(['Placar', [0, 1]])
                    .isNot(['Placar', [0, 1]]);
            })
            ;
    });
    it('Bool', function () {
        //isTrue
        test
            .bool(true)
            .isTrue()
            .exception(function () {
                test.bool(false).isTrue();
            })
            ;
        //isNotTrue
        test
            .bool(false)
            .isNotTrue()
            .exception(function () {
                test.bool(true).isNotTrue();
            })
            ;
        //isFalse
        test
            .bool(false)
            .isFalse()
            .exception(function () {
                test.bool(true).isFalse();
            })
            ;
        //isNotFalse
        test
            .bool(true)
            .isNotFalse()
            .exception(function () {
                test.bool(false).isNotFalse();
            })
            ;
    });
    it('Date', function () {
        //isEqualTo
        var date = new Date('2010, 5, 20');
        test
            .date(date)
            .isEqualTo(date)
            .exception(function () {
                test.date(date).isEqualTo(new Date('2010, 5, 20'));
            })
            ;
        //isNotEqualTo
        var date = new Date('2010, 5, 20');
        test
            .date(date)
            .isNotEqualTo(new Date('2010, 5, 20'))
            .exception(function () {
                test.date(date).isNotEqualTo(date);
            })
            ;
    });
    it('Number', function () {
        //isBetween
        test
            .number(2)
            .isBetween(2, 4)
            .number(3)
            .isBetween(2, 4)
            .number(4)
            .isBetween(2, 4)
            .number(4)
            .isBetween(3.99, 4.01)
            .number(1)
            .isBetween(-1.00000001, 1.0000000001)
            .case('Test failure', function () {
                test
                    .exception(function () {
                        test.number(2).isBetween(-3, -1);
                    })
                    .exception(function () {
                        test.number(2).isBetween(3, 1);
                    });
            });
        //isNotBetween
        test
            .number(1)
            .isNotBetween(2, 4)
            .number(5)
            .isNotBetween(2, 4)
            .exception(function () {
                test.number(2).isNotBetween(1, 3);
            });
        //isBefore
        test
            .number(1)
            .isBefore(2)
            .isBefore(1.01)
            .exception(function () {
                test.number(1).isBefore(0);
            });
        //isAfter
        test
            .number(2)
            .isAfter(1)
            .isAfter(1.99)
            .isAfter(-3)
            .exception(function () {
                test.number(-1).isAfter(0);
            });
        //isLessThan
        test
            .number(1)
            .isLessThan(2)
            .isLessThan(1.01)
            .exception(function () {
                test.number(1).isLessThan(0);
            });
        //isGreaterThan
        test
            .number(2)
            .isGreaterThan(1)
            .isGreaterThan(1.99)
            .isGreaterThan(-3)
            .exception(function () {
                test.number(-1).isGreaterThan(0);
            });
        //isInfinite
        test
            .number(1 / 0)
            .isInfinite()
            .exception(function () {
                test.number(1.333333333333333333333).isInfinite();
            });
        //isNotInfinite
        test
            .number(1.333333333333333333333333)
            .isNotInfinite()
            .exception(function () {
                test.number(1 / 0).isNotInfinite();
            })
            ;
    });
    it('Object', function () {
        var example = {
          message: 'hello world',
          name: 'Nico',
          job: 'developper',
          from: 'France'
        };
        test
          .object(example)
            .hasValue('developper')
            .hasProperty('name')
            .hasProperty('from', 'France')
            .contains({message: 'hello world'})
        ;
    });
    it('Regexp', function () {
        
    var example = 'hello world';
    test
      .string(example)
        .match(/[a-z]/);
    });
    it('String', function () {

        //match
        test.string('Hello').match('Hello');
        test.string('Hello world !').match(/world/i);
        test.string('hello').match(function (it) {
            return it === 'hello';
        });
        test.exception(function () {
            test.string('hello').match(/foo/);
        });

        //notMatch
        test
            .string('foobar')
            .notMatch('some value')
            .notMatch(/[foo]+bazzz$/)
            .string('foo')
            .notMatch(function (it) {
                return it === 'bar';
            })
            .exception(function () {
                test.string('Hello Nico!').notMatch(/nico/i);
            })
            ;
    });
});
