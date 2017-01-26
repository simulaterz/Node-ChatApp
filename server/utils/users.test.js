const expect = require('expect');

var {Users} = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'room one'
        }, {
            id: '2',
            name: 'Jen',
            room: 'room two'
        }, {
            id: '3',
            name: 'Pure',
            room: 'room one'
        }]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Pure',
            room: 'Room'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = '99';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '1';
        var findUser = users.getUser(userId);
        expect(findUser.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '99';
        var findUser = users.getUser(userId);
        expect(findUser).toNotExist();
    });

    it('should return names for room one', () => {
        var userList = users.getUserList('room one');

        expect(userList).toEqual(['Mike', 'Pure']);
    });

    it('should return names for room two', () => {
        var userList = users.getUserList('room two');

        expect(userList).toEqual(['Jen']);
    });
});