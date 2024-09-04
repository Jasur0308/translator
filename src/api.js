const url = 'https://deep-translate1.p.rapidapi.com/language/translate/v2';

const options = {
    method: 'POST',
    headers: {
        'x-rapidapi-key': '216aaa2687msh91ec62caa74c1a8p1888b2jsnd4414ee7bbf9',
        'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
        'Content-Type': 'application/json',
    },
};

export const translateText = (text, targetLanguage) => {
    return fetch(url, {
        ...options,
        body: JSON.stringify({ 
            q: text,
            source: 'en',
            target: targetLanguage 
        }),
    })
    .then(response => response.json())
    .then(result => result.data.translations.translatedText);
};