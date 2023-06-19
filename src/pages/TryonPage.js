import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import demo from '../assets/videos/demo.mp4'

// ----------------------------------------------------------------------

const StyledContent = styled('div')(() => ({
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}));

// ----------------------------------------------------------------------

export default function TryonPage() {
  return (
    <>
      <Helmet>
        <title> Try On | Shop </title>
      </Helmet>

      <StyledContent>
        <video style={{width:"100%", height:"100vh", objectFit: "cover"}} playsInline autoPlay muted>
          <source src={demo} type="video/mp4" />
        </video>
      </StyledContent>
    </>
  );
}
