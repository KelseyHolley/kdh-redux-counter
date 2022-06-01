export const ADD_COUNT = 'counter/ADD_COUNT';
export const ADD = 'counter/ADD';
export const SUBTRACT = 'counter/SUBTRACT';
export const MULTIPLY = 'counter/MULTIPLY';
export const DIVIDE = 'counter/DIVIDE';
export const NUM1CHANGE = 'counter/NUM1CHANGE';
export const NUM2CHANGE = 'counter/NUM2CHANGE';

const initState = {
    num1: null,
    num2: null,
    count: 0,
    result: null
}

export default function reducer(state = initState, action) {
    switch (action?.type) {
        case ADD_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case ADD:
            return {
                ...state,
                result: Number(state.num1) + Number(state.num2)
            }
        case SUBTRACT:
            return {
                ...state,
                result: state.num1 - state.num2
            }
        case MULTIPLY:
            return {
                ...state,
                result: state.num1 * state.num2
            }
        case DIVIDE:
            return {
                ...state,
                result: state.num1/state.num2
            }
        case NUM1CHANGE:
            return {
                ...state,
                num1: action.value
            }
        case NUM2CHANGE:
            return {
                ...state,
                num2: action.value
            }
        default:
            return {
                ...state
            }
    }
}