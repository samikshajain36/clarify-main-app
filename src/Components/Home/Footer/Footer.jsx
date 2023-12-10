import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'

export default function SimpleContainer() {
    const linkList = [{ title: "Sign up", link: "/auth/register" }, { title: "Sign in", link: "/signin" }, { title: "Terms and Conditions", link: "/tandc" }, { title: "Privacy Policy", link: "/policy" }, { title: "Contact Us", link: "/contact" }]
    const socialLink = [{ tag: <FacebookRoundedIcon sx={{ fontSize: 24 }} />, link: "/signup" }, { tag: <InstagramIcon sx={{ fontSize: 24 }} />, link: "/signin" }, { tag: <LinkedInIcon sx={{ fontSize: 24 }} />, link: "/tandc" }]
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="100%" sx={{ bgcolor: '#0c4d71', height: 'auto' }}>
                <Box className="footer-container">
                    <Box className="footer-links">
                        {
                            linkList.map(links => (
                                <Link to={links.link} className="footer-link">{links.title}</Link>
                            ))
                        }
                    </Box>
                    <Box className="footer-icons">
                        {
                            socialLink.map(icons => (
                                <Link to={icons.link} className="footer-icon">{icons.tag}</Link>
                            ))
                        }
                    </Box>
                    <Box className="footer-copyright">
                        Copyright &copy; All rights reserved
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}