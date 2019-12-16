import axios from 'axios'

export default axios.create({

    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer NPErSFWKEr5rhEl0ocW2NAIvFnFbpkbjJVTeYkNrC0BqTJ6SYd9YFxTa9vBYb2GnpPOASmBOzNWlt2abwYrE-aix4gcey-a4ejhJ19-idfFm6yvp3oZzqOvkUsfqXXYx'
    }
});