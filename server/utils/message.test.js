let expect = require('expect');

let {generateMessage} = require('./message');
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