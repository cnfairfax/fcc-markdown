const quote = (state = {
    quote: {
        text: null,
        author: null
    },
    updating: false,
    error: undefined
}, action) => {
switch(action.type) {
    case 'START FETCH':
        return {
            ...state,
            updating: true
        }
    case 'ACCEPT QUOTE':
        return {
            quote: {
                text: action.quote,
                author: action.author
            },
            updating: false,
            quotes: action.quotes
        }
    case 'FETCH ERROR':
        return {
            ...state,
            updating: false,
            error: action.error
        }
    default:
        return {
            ...state
        }
}
}

export default quote