let expect = require('expect');

let {generateMessage,generateLocationMessage} = require('./message');
let text = 'testing message';
let from = 'Rishabh Goel';
describe('generateMessage',()=>{
    it('should generate correct message object',()=>{
        let res = generateMessage(from,text);
        expect(res.from).toBe(from);
        expect(res.text).toBe(text);
        // expect(res).toInclude({from,text});
        expect(typeof res.createdAt).toBe('number');
    });
});

describe('generateLocationMessage',()=>{
    it('should generate correct location object', ()=>{
        let loc = generateLocationMessage('Tester',1,1);
        expect(loc.url).toBe('https://www.google.com/maps?q=1,1');
        expect(typeof loc.createdAt).toBe('number');
    });
})