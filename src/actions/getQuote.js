import rand from '../helpers/randomNumber';

const getQuote = (quotes=undefined) => {

    return (dispatch) => {
        const index = rand(101);

        dispatch({
            type: 'START FETCH'
        });

        if(quotes) {
            dispatch({
                type: 'ACCEPT QUOTE',
                ...quotes.quotes[index],
                quotes
            });

            return
        }

        return fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then( async (resp) => {
                const response = await resp.json();
                const quote = response.quotes[index];
                if(resp.status !== 200) { 
                    dispatch({type: 'FETCH ERROR', error: 'Something went wrong'});
                } else {
                    dispatch({
                        type: 'ACCEPT QUOTE',
                        ...quote,
                        quotes: response
                    });
                }
            })
    }
}

export default getQuote