import { data } from "../../data/dummy-data";

export const GET_ALL = 'GET_ALL';
export const GET_ONE = 'GET_ONE'
const _apiKey = '9983076acb94b2145c62f289a979ed7a'







export const fetchAll = () => {
    return async dispatch => {
        try{
            const res = await fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${_apiKey}&format=json`)

            if (!res.ok) {
                throw new Error(`Somthing went wrong ${res.status}`)
            }

            const resData = await res.json()
            const {track} = resData.tracks
            

            const topTracks = _transformData(track)

            dispatch({type: GET_ALL, topTracks})
        } catch(err) {
            throw err
        }
    }
}

export const fetchArtist = (id) => {
    const name = id.split(' ').join('+')

    return async dispatch => {
        try{
            const res = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${_apiKey}&format=json`)

            if (!res.ok) {
                throw new Error(`Somthing went wrong ${res.status}`)
            }


            const resData = await res.json()


            dispatch({type: GET_ONE, artist: _transformArtist(resData)})
        } catch(err) {
            throw err
        }
    }
}

const _transformData = (arr) => {
    const newArr = arr.map(item => {
        const checkImg = data.find(artist => artist.name === item.artist.name)
        const imgForSong = checkImg ? checkImg.img : ''
        return {
            name: item.artist.name,
            song: item.name,
            artistUrl: item.artist.url,
            img: imgForSong
        }
    })
    return newArr
}

const _transformArtist = (artist) => {
    const checkImg = data.find(item => item.name === artist.artist.name)
    const imgForArtist = checkImg ? checkImg.img : 'https://st.depositphotos.com/1028979/3864/i/600/depositphotos_38643469-stock-photo-young-woman-holding-interrogation-symbol.jpg'

    return {
        name: artist.artist.name,
        about: artist.artist.bio.content,
        tags: artist.artist.tags.tag,
        img: imgForArtist
    }
}