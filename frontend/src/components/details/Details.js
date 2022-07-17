import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


const Details = (data) => {
    const {id, title, thumbURL, altText, genre, summary} = {...data}
    return (
        <Card sx={{ m: 1, pointerEvents: 'none' }}>
            <CardActionArea>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <CardMedia
                            component="img"
                            height="500"
                            image={thumbURL}
                            alt={altText}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Title: {title}
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <Typography gutterBottom variant="h6" component="div">
                                    Genre:
                                </Typography>
                                {genre.length > 0 ? genre.map((g)=> {
                                    return <Chip key={id} label={g} color="primary" variant="outlined" />
                                }) : 'None'}
                            </Stack>
                            <Typography gutterBottom variant="h6" component="div">
                                Summary: {summary}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    )
}

export default Details