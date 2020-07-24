const initialState = {
    result: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "calculate":
            return {
                result: (eval(state.result)) + ""
            };

        case "reset":
            return {
                result: ""
            };

        case "button":
            return {
                result: state.result + action.buttonName
            };

        case "square":
            return {
                result: (state.result) * (state.result)
            };

        case "root":
            return {
                result: Math.sqrt(state.result)
            };

        case "ln":
            return {
                result: Math.log(state.result)
            };

        case "pi":
            return {
                result: Math.PI
            };

        case "sin":
            return {
                result: Math.sin(state.result)
            };

        case "cos":
            return {
                result: Math.cos(state.result)
            };

        case "tan":
            return {
                result: Math.tan(state.result)
            };

        case "sign":
            return {
                result: "-" + state.result
            };

        default:
            return state;
    }
}