import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader,
    Container
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
            title: "Especialista em Engenharia de dados",
            seniority: "Especialista",
            status: "Open",
            localtion: "Brasília, Distrito Federal, Brasil",
            workScheduleType: "Full-Time",
            openSince: new Date()
        },
        {
            id: "2",
            title: "Recepção",
            seniority: "Júnior",
            status: "Open",
            localtion: "São Paulo, São Paulo, Brasil",
            workScheduleType: "Full-Time",
            openSince: new Date()
        },
        {
            id: "3",
            title: "Desenvolvedor FullStack",
            seniority: "Pleno",
            status: "Open",
            localtion: "Brasília, Distrito Federal, Brasil",
            workScheduleType: "Full-Time",
            openSince: new Date()
        },
        {
            id: "4",
            title: "Vendedor",
            seniority: "Júnior",
            status: "Open",
            localtion: "Rio De Janeiro, Rio de Janeiro, Brasil",
            workScheduleType: "Full-Time",
            openSince: new Date()
        },
        {
            id: "5",
            title: "Operador de Call Center",
            seniority: "Operacional",
            status: "Paused",
            localtion: "Pernambuco, Recife, Brasil",
            workScheduleType: "Full-Time",
            openSince: new Date()
        },
        {
            id: "6",
            title: "Administrador de dados",
            seniority: "Sênior",
            status: "Open",
            localtion: "Remoto",
            workScheduleType: "Full-Time",
            openSince: new Date()
        },
        {
            id: "7",
            title: "Arquiteto de Software",
            seniority: "Mestre",
            status: "Open",
            localtion: "Remoto",
            workScheduleType: "Full-Time",
            openSince: new Date()
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
                        {data.map(elem => (
                            <Grid item key={data.indexOf(elem)}>
                                <Card className='card-item'>
                                    <CardHeader
                                        title={`quarter : ${elem.quarter}`}
                                        subheader={`earnings : ${elem.earnings}`}
                                    />
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom>
                                            Hello World
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </ThemeProvider>
            </div>
        </Container>
    )
}