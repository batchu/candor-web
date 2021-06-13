import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import RequestListResults from 'src/components/request/RequestListResults';
import RequestListToolbar from 'src/components/request/RequestListToolbar';
import requests from 'src/__mocks__/requests';

const RequestList = () => (
  <>
    <Helmet>
      <title>Requests</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <RequestListToolbar />
        <Box sx={{ pt: 3 }}>
          <RequestListResults requests={requests} />
        </Box>
      </Container>
    </Box>
  </>
);

export default RequestList;
