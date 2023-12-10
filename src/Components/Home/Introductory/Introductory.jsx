import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CallMadeIcon from "@mui/icons-material/CallMade";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import home1 from '../../../assets/home.png'
import './Introductory.css'

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" sx={{ mt: 5.28, justifyContent: "center" }}>
                <Box>
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: "Gilroy-ExtraBold",
                            fontSize: 20,
                            letterSpacing: 2,
                        }}
                    >
                        <CallMadeIcon /> Invoicing made simple
                    </Typography>
                    <Typography id="home"
                        variant="h1"
                        sx={{
                            fontFamily: "Gilroy-ExtraBold",
                            fontSize: 48,
                            letterSpacing: 2,
                        }}
                    >
                        Use Clarify and win back your time
                    </Typography>
                    <Stack spacing={2} direction="row" sx={{ ml: "33.5%", mt: 7 }}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#0c4d71",
                                borderRadius: 5,
                                fontWeight: "bold",
                                padding: "8px 24px",
                                fontSize: 16,
                                fontFamily: "Gilroy-ExtraBold",
                                textTransform: "capitalize",
                                padding: "16px 40px",
                            }}
                        >
                            See All Features &nbsp; <ArrowForwardIcon />
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                color: "black",
                                border: ".1px solid rgb(198, 198, 198)",
                                borderRadius: 5,
                                fontWeight: "bold",
                                padding: "8px 24px",
                                fontSize: 16,
                                fontFamily: "Gilroy-ExtraBold",
                                textTransform: "capitalize",
                                padding: "16px 40px",
                            }}
                        >
                            Start Now &nbsp;
                            <ArrowForwardIcon />
                        </Button>
                    </Stack>
                    <img 
                        src={home1}
                        alt="Home Theme"
                        style={{ marginTop: 60, width: "80%"}}
                    />
                </Box>
                <Box sx={{ display: "flex", textAlign: 'right'}}>
                    <img
                        src="https://fatoura.work/assets/images/section2.svg"
                        alt="Home Theme"
                        style={{ marginTop: 0, marginLeft: 30 }}
                    />
                    <Box class='manage-text'>
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: "Gilroy-ExtraBold",
                                fontSize: 20,
                                letterSpacing: 2,
                                mt: 23.2,
                                ml: 3,
                            }}
                        >
                            <CallMadeIcon /> fast and secure
                        </Typography>
                        <Typography variant="h2" sx={{ fontFamily: "Gilroy-ExtraBold", width: 550, ml:6 }}>
                            Manage Invoices Securely with Ease
                        </Typography>
                        <Box sx={{textAlign: 'right', maxWidth: 5}}>
                            <Typography variant="h5" sx={{ fontFamily: "Gilroy-ExtraBold", width: 450, ml: 18, mb: 2, itemAlign: 'left', fontFamily: 'Gilroy-ExtraBold'}}>
                                Clarify.work was built to serve freelancers and business owners with a complete suite of invoicing & payment tools to advance their business.
                            </Typography>
                            <Typography variant="h5" sx={{ fontFamily: "Gilroy-ExtraBold", width: 450, ml: 18, itemAlign: 'left', fontFamily: 'Gilroy-ExtraBold'}}>
                                Invoicing & Payments Every feature is geared towards accurate and secure invoicing and getting you paid.
                            </Typography>
                            <Button
                            variant="outlined"
                            sx={{
                                width: 250,
                                color: "black",
                                border: ".1px solid rgb(198, 198, 198)",
                                borderRadius: 5,
                                fontWeight: "bold",
                                padding: "8px 24px",
                                fontSize: 16,
                                fontFamily: "Gilroy-ExtraBold",
                                textTransform: "capitalize",
                                padding: "16px 40px",
                                ml: 43,
                                mt: 5,
                                mb: 5
                            }}
                        >
                            Start Now &nbsp;
                            <ArrowForwardIcon/>
                        </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}
