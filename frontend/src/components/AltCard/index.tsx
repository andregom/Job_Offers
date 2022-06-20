import React, { useEffect } from 'react';

import { useQuery } from 'react-query';
import { axiosPrivate } from "../../api/axios";

import { Buffer } from 'buffer';
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

import profileImg from "../../assets/G4F_smaller_size.jpeg";

import { JobOffer } from "../../../class_objects/job_offers"

import './styles.css';
import UseAuth from '../../hooks/useAtuth';

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
    const classes = useStyles();

    /* const jobOffers: JobOffer[] = [
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
            seniority: "Pleno",
            status: "Open",
            localtion: "Remoto",
            workScheduleType: "Full-Time",
            openSince: new Date("2012-04-23T17:45:00.511Z")
        },
    ]; */
    
    const { auth } = UseAuth();

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (config.headers && !config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth}`;
                    console.log(auth);
                }
                return config;
            }, error => Promise.reject(error)
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept)
        };
    }, [auth]);
    
    const { data, isFetching } = useQuery<JobOffer[]>('job-offers');

    data?.map((jobOffer) => {

        // jobOffer.imgLogo = new File([new Blob([jobOffer.imgLogo as BlobPart], { type: "image/png" })], "Logo Image");
        jobOffer.openSince = new Date(jobOffer.openSince);
    })

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
                        { isFetching && <span>Carregando...</span> }
                        {data?.map((jobOffer: JobOffer) => (
                            <Grid item key={ data.indexOf(jobOffer)}>
                                <Card className='card-item'>
                                    <div className='profile-header'>
                                        <img className="profile-img" src={profileImg} alt="logo gria" />
                                        <CardHeader
                                            
                                            title={jobOffer.enterprise}
                                            subheader={`${jobOffer.position}`}
                                        />
                                    </div>
                                    <CardContent>
                                        <Typography style={{ fontSize: 12 }} gutterBottom>
                                            {jobOffer.seniority}
                                        </Typography>
                                        <Typography variant="h6" component="div">
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