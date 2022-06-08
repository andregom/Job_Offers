import * as React from 'react';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography
} from "@material-ui/core";

import './styles.css';

const bull = (
    <Box
        component="span"
        style={{ display: 'inline-block' }}
    >
        •
    </Box>
);

export default function BasicCard() {
    return (
        <Card className='card-item'>
            <CardContent>
                <Typography style={{ fontSize: 14 }} gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography>
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
