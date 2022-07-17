import React from 'react'
import { Box, Typography, Paper } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import HistoryIcon from '@mui/icons-material/History';
import ListIcon from '@mui/icons-material/List';
import DetailsCardContainer from '../DetailsCardContainer/DetailsCardContainer';
import Details from '../details/Details';

const Home = () => {
    const singleMovieInfo = {
        'id': '1',
        'title': 'Avengers Endgame',
        'thumbURL': 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
        'altText': 'Avengers Endgame',
        'summary': 'This is a demo summary',
        'genre': ['action', 'adventure']
    }
    const movieData = []
    for (var i=0; i<10; i++) {
        movieData.push(structuredClone(singleMovieInfo))
        movieData[i]['id'] = i.toString()
    }
    const {id, title, thumbURL, altText, genre, summary} = {...movieData[0]}
    
    return (
        <Box sx={{ flexGrow: 1, px: 5 }}>
            <Paper elevation={6}>
                <Box sx={{ p: 2}}>
                    <Typography variant="h3" component="div" textAlign={'center'}>
                        The Next Tarantio
                    </Typography>
                </Box>
            </Paper>

            <DetailsCardContainer movieData={movieData} title='Favourites' titleIcon={<FavoriteIcon />} />
            <DetailsCardContainer movieData={movieData} title='Watchlist' titleIcon={<HistoryIcon />} />
            <DetailsCardContainer movieData={movieData} title='All Movies' titleIcon={<ListIcon />} />

            <Details key={id} id={id} title={title} thumbURL={thumbURL} altText={altText} genre={genre} summary={summary} />
        </Box>
    )
}

export default Home