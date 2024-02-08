import React from 'react';
import { Box, Button, styled } from '@mui/material';

const LeftContainer = styled(Box)`
min-width: 40%;
padding: 40px 0 0 80px;
`;
const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
})
const styledButton = styled(Button)`
  width: 46%;
  height: 50px;
  border-radius: 2px;
`
const ActionItem = ({product}) => {
  return (
    <LeftContainer>
        <Image src={product.detailUrl} />
        <styledButton variant='contained' style={{marginRight: 10, background: '#ff9f00'}}>Add to Cart</styledButton>
        <styledButton variant='contained'>Buy Now</styledButton>
    </LeftContainer>
  )
}

export default ActionItem