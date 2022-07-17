import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


const DetailsCard = (data) => {
    const {id, title, thumbURL, altText, genre} = {...data}
    return (
        <Card sx={{ maxWidth: 345, m: 1 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={thumbURL}
                alt={altText}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Stack direction="row" spacing={1}>
                    {genre.map((g)=> {
                        return <Chip key={id} label={g} color="primary" variant="outlined" />
                    })}
                </Stack>
            </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default DetailsCard