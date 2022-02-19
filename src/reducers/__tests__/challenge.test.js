import ChallengeReducer from "../challengeReducer";

it("Hanlde action of type ADD_CHALLENGE",()=>{

    const objectValue = { id:"something", title:"First title" }
    const action= { type: "ADD_CHALLENGE", payload: objectValue }

    const state = { searchValue: null, challenges: [] }

    const newState = ChallengeReducer(state,action);

    expect(newState['challenges'].length).toEqual(1);
    expect(newState['challenges']).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                title:"First title"
            })
        ])
    )
})