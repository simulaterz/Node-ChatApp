var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Pure';
        var text = 'this is my text';
        var message = generateMessage(from, text);

        expect(message.createAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('genarateLocationMessage', () => {
    it('should genarate correct location object', () => {
        var from = 'Admin';
        var latitude = 1;
        var longitude = -15;
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        var messageLocation = generateLocationMessage(from, latitude, longitude);

        expect(messageLocation.createAt).toBeA('number');
        expect(messageLocation).toInclude({from, url});
    });
});