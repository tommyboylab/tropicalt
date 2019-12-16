import axios from 'axios';


const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g;




function extractPhotos(content) {
    const links = new Set();
    let match;
    while ((match = regex.exec(content))) {
        links.add(match[1]);
    }
    return Array.from(links);
}

const getAlbum = async (id: number) => {


    try {
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        const request = `https://proxy.tropicalt.ca/https://photos.app.goo.gl/${id}`
        const response = await axios.get(request )
        return extractPhotos(response.data)
    } catch (e) {
        return null;
    }
};

export default getAlbum
