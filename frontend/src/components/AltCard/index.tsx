import React from 'react';
import monent from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardHeader,
    Container,
    CardActions,
    Button
} from '@material-ui/core/'

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import { JobOffer } from "../../../class_objects/job_offers"

import './styles.css';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 450,
            md: 600,
            lg: 900,
            xl: 1200,
        }
    }
});

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))

export default function AltCard() {
    const classes = useStyles()
    const jobOffers: JobOffer[] = [
        {
            id: "1",
            enterprise: "",
            position: "Especialista em Engenharia de dados",
            seniority: "Especialista",
            status: "Open",
            localtion: "Brasília, Distrito Federal, Brasil",
            workScheduleType: "Full-Time",
            openSince: new Date("2012-04-23T17:45:00.511Z")
        },
        {
            id: "2",
            enterprise: "",
            position: "Recepção",
            seniority: "Júnior",
            status: "Open",
            localtion: "São Paulo, São Paulo, Brasil",
            workScheduleType: "Full-Time",
            openSince: new Date("2012-04-23T17:45:00.511Z")
        },
        {
            id: "3",
            enterprise: "",
            position: "Desenvolvedor FullStack",
            seniority: "Pleno",
            status: "Open",
            localtion: "Brasília, Distrito Federal, Brasil",
            workScheduleType: "Full-Time",
            openSince: new Date("2012-04-23T17:45:00.511Z")
        },
        {
            id: "4",
            enterprise: "",
            position: "Vendedor",
            seniority: "Júnior",
            status: "Open",
            localtion: "Rio De Janeiro, Rio de Janeiro, Brasil",
            workScheduleType: "Full-Time",
            openSince: new Date("2012-04-23T17:45:00.511Z")
        },
        {
            id: "5",
            enterprise: "",
            position: "Operador de Call Center",
            seniority: "Operacional",
            status: "Paused",
            localtion: "Pernambuco, Recife, Brasil",
            workScheduleType: "Full-Time",
            openSince: new Date("2012-04-23T17:45:00.511Z")
        },
        {
            id: "6",
            enterprise: "",
            position: "Administrador de dados",
            seniority: "Sênior",
            status: "Open",
            localtion: "Remoto",
            workScheduleType: "Full-Time",
            openSince: new Date("2012-04-23T17:45:00.511Z")
        },
        {
            id: "7",
            enterprise: "",
            position: "Arquiteto de Software",
            seniority: "Mestre",
            status: "Open",
            localtion: "Remoto",
            workScheduleType: "Full-Time",
            openSince: new Date("2012-04-23T17:45:00.511Z")
        },
    ];
    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 }
    ]
    return (
        <Container className='cards-container-wrapper'>
            <div className="cards-container">
                <ThemeProvider theme={theme}>
                    <Grid
                        title='Vagas'
                        container
                        spacing={5}
                        direction="row"
                        alignItems="center"
                    >
                        {jobOffers.map(jobOffer => (
                            <Grid item key={ jobOffers.indexOf(jobOffer)}>
                                <Card className='card-item'>
                                    <CardHeader
                                        title={jobOffer.enterprise}
                                        subheader={`${jobOffer.position}`}
                                    />
                                    <CardContent>
                                        <Typography style={{ fontSize: 14 }} gutterBottom>
                                            {jobOffer.seniority}
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            {jobOffer.workScheduleType}
                                        </Typography>
                                        <Typography>
                                            {jobOffer.localtion}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Typography>
                                            {jobOffer.openSince.toDateString()}
                                        </Typography>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </ThemeProvider>
            </div>
        </Container>
    )
}