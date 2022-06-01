import reducer, {ADD_COUNT, ADD, SUBTRACT, MULTIPLY, DIVIDE, NUM1CHANGE, NUM2CHANGE} from "./counter";

test(
    'should init to correct state',
    () => {
        const state = reducer()
        expect(state).toStrictEqual({
            num1: null,
            num2: null,
            count: 0,
            result: null
        })
    }
)

test(
    'should add 1 to count when ADD_COUNT action is dispatched',
    () => {
        const initState = reducer();
        const state = reducer(initState, {type: ADD_COUNT})
        expect(state).toStrictEqual({
            ...initState,
            count: 1
        })
    }
)

test('should add numbers when ADD action is dispatched',() => {
    const initialState = {num1: 5, num2: 2, count: 0, result: null};
    const state = reducer(initialState, {type: ADD});
    expect(state).toStrictEqual({...initialState, result: 7})
})

test('should subtract numbers when SUBTRACT action is dispatched',() => {
    const initialState = {num1: 5, num2: 2, count: 0, result: null};
    const state = reducer(initialState, {type: SUBTRACT});
    expect(state).toStrictEqual({...initialState, result: 3})
})

test('should multiply numbers when MULTIPLY action is dispatched',() => {
    const initialState = {num1: 5, num2: 2, count: 0, result: null};
    const state = reducer(initialState, {type: MULTIPLY});
    expect(state).toStrictEqual({...initialState, result: 10})
})

test('should divide numbers when DIVIDE action is dispatched',() => {
    const initialState = {num1: 6, num2: 2, count: 0, result: null};
    const state = reducer(initialState, {type: DIVIDE});
    expect(state).toStrictEqual({...initialState, result: 3})
})

test('should change num1 when NUM1CHANGE action is dispatched',() => {
    const initialState = {num1: 5, num2: 2, count: 0, result: null};
    const state = reducer(initialState, {type: NUM1CHANGE, value: 3});
    expect(state).toStrictEqual({...initialState, num1: 3})
})

test('should change num2 when NUM2CHANGE action is dispatched',() => {
    const initialState = {num1: 5, num2: 2, count: 0, result: null};
    const state = reducer(initialState, {type: NUM2CHANGE, value: 3});
    expect(state).toStrictEqual({...initialState, num2: 3})
})