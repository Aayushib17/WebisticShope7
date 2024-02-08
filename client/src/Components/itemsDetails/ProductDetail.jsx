import React from 'react'
import { Typography, Box, styled, Table, TableBody, TableRow, TableCell } from '@mui/material';
import {LocalOffer as Badge} from '@mui/icons-material';

const SmallText = styled(Box)`
    font-size: 14px;
    vertical align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 14px;
    }
`;
const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`;
const Columntext = styled(TableRow)`
    font-size: 14px; 
    vertical align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`

const ProductDetail = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    const date = new Date(new Date().getTime()+(5*24*60*60*1000));

  return (
    <>
        <Typography>{product.title.longTitle}</Typography>
        <Typography style={{marginTop: 5, color: '#878785', fontSize: 14}}>
              0 Ratings & 1 Review
            <Box component="span"><img src={fassured} alt="img_not_found" style={{width: 77, marginLeft: 20}} /></Box>
        </Typography>
        <Typography>
            <Box component="span" style={{fontSize: 20}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{color: "#878787"}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{color: "#388E3C"}}>{product.price.discount}</Box>
        </Typography>
        <Typography>Available Offers</Typography>
        <SmallText>
            <Typography><StyledBadge />Get extra 20% off upto ₹50 on 1 item(s) T&C </Typography>
            <Typography><StyledBadge />Get extra 13% off (price inclusive of discount) T&C </Typography>
            <Typography><StyledBadge />Sign up for Flipkart pay Later and get Flipkart Gift Card worth ₹100* KNOW More </Typography>
            <Typography><StyledBadge />But 2 items save 5%; Buy 3 or more save 10% T&C  </Typography>
            <Typography><styledBadge />5% Cashback on Flipkart Axis Bank Card </Typography>
            <Typography><StyledBadge />No COST EMI on Bajaj Finserv EMI Card on cart value above ₹2000 </Typography>
        </SmallText>
        <Table>
            <TableBody>
                <Columntext>
                    <TableCell style={{color: '#878787'}}>Delivery</TableCell>
                    <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                </Columntext>
                <Columntext>
                    <TableCell style={{color: '#878787'}}>Warranty</TableCell>
                    <TableCell>No Warranty</TableCell>
                </Columntext>
                <Columntext>
                    <TableCell style={{color: '#878787'}}>Seller</TableCell>
                    <TableCell style={{color: '#2874F0'}}>
                        <Box component="span" style={{color: '#2874F0'}}>SuperComNet</Box>
                        <Typography>GST invoice available</Typography>
                        <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                    </TableCell>
                </Columntext>
                <Columntext>
                    <TableCell colSpan={2}>
                        <img src={adURL} style={{width: 190}} alt='flipkartPoints' />
                    </TableCell>
                </Columntext>
                <Columntext>
                    <TableCell style={{color: '#878787'}}>Description</TableCell>
                    <TableCell>{product.description}</TableCell>
                </Columntext>
            </TableBody>
        </Table>
    </>
  )
}

export default ProductDetail