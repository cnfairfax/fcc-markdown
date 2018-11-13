const preview = (state = {
    parsedHTML: ''
}, action) => {
    switch(action.type) {
        case 'NEW MARKUP':
            return {
                ...state,
                parsedHTML: action.parsedHTML
            }
        default:
            return {
                ...state
            }
    }
}

export default preview