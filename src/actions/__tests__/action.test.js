import {add_challenge} from '../actions'

describe('add_challenge action check', ()=>{
    it('has correct type',()=>{
        const action = add_challenge();
        expect(action.type).toEqual('ADD_CHALLENGE')
    })

    it('has correct payload',()=>{
        const payload = { id:"something", title:"First title" }
        const action = add_challenge(payload);
        expect(action.payload).toEqual(payload)
    })
})