import axios from "axios";

export const randomJoke = async () => {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        return response.data;
    } catch (e) {
      console.log(e)
    }


};