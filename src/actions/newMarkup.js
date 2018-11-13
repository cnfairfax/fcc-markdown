import marked from 'marked';

var renderer = new marked.Renderer();

renderer.link = (href, title, text) => {
    return `<a href=${href} title=${title} target="_blank">${text}</a>`
}

const newMarkup = text => {

    const parsedHTML = marked(text, { renderer: renderer, breaks: true });

    return {
        type: 'NEW MARKUP',
        parsedHTML
    }
}

export default newMarkup