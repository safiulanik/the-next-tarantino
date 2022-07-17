import { Box, Typography, Paper } from '@mui/material'
import DetailsCard from '../DetailsCard/DetailsCard';


const DetailsCardContainer = (data) => {
    const {title, titleIcon, movieData} = {...data}
    return (
        <Paper elevation={3}>
            <Box sx={{ p: 1}}>
                <Typography gutterBottom variant="h4" component="div">
                    {titleIcon} {title}
                </Typography>
            </Box>
            <Box sx={{overflowX: "scroll"}}>
                <Box sx={{ display: 'flex', gridAutoFlow: "column", width: movieData.length * 240}}>
                    { movieData.map(({...data}) => {
                        const {id, title, thumbURL, altText, genre} = {...data}
                        return <DetailsCard key={id} id={id} title={title} thumbURL={thumbURL} altText={altText} genre={genre} />
                    })}
                </Box>
            </Box>
        </Paper>
    )
}

export default DetailsCardContainer