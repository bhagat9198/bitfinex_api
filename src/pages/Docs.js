import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';

export default function Docs() {
  console.log('Docs');
  return (
    <>
      <Box className="borderGrayBottom">
        <Header />
      </Box>
      <Grid container spacing={2} style={{ marginTop: 1, height: '90vh' }}>
        <Grid item xs={12} md={6} className='borderGrayRight' >
          <InfoCard heading='About the Project'>
            The project is built with 'create-react-app'. This project focuses on fetching all the cryptos and displaying them to users. Out of all the cryptos, users can select any crypto to see more details. Users can even search the crypto by crypto name. <br />
            All the crypto data will be refreshed automatically every 5 seconds.
          </InfoCard>
          <InfoCard heading='Packages Used '>
            Multiple 3rd party packages are being used in order to finish complete the project :- <br />
            <ul>
              <li>
                <strong>Core react packages </strong> -
                <i>react , react-dom, react-scripts, web-vitals, @testing-library/jest-dom, @testing-library/react, @testing-library/user-event </i>
                These are packages that are prebuild installed in order to word with react app.
              </li>
              <li>
                <strong>Styling</strong> -
                <i>@emotion/react, @emotion/styled, @mui/material </i>
                To do stying, I am using the MaterialUI library which gives full-fledged react custom components along with their style.
              </li>
              <li>
                <strong>Store</strong> -
                <i>redux, redux-thunk, react-redux</i>
                To make the clear separation between UI, logic and storing data. I make use of redux which helps use resolve this problem. <u>redux</u> helps in creating store to store the data. <u>react-redux </u> helps in interacting readuc with react. <u>redux-thunk</u> helps in making async calls in store.
              </li>
              <li>
                <strong>axios</strong> -
                To send the API request which intern gives us response.
              </li>
              <li>
                <strong>react-icons</strong> -
                To display the icons.
              </li>
            </ul>
          </InfoCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <InfoCard heading='Project Structure'>
            This project is separated into 4 main parts.
            <ul>
              <li>
                <strong>assets</strong> -
                It contains the files which are mostly static and does not change.
              </li>
              <li>
                <strong>components</strong> -
                It contains the files which can be reused multiple times and contains a bit of logic on what to render based on props passed to it.
              </li>
              <li>
                <strong>pages</strong> -
                It contains the core components files which deal with UI, on how to represent the components. These files make use of small components which are present in the components folder.
              </li>
              <li>
                <strong>store</strong> -
                It contains the files which help in storing the data on the global scope. This is done so that every component in the project can access to store data without being depended upon.
              </li>

            </ul>
          </InfoCard>
          <InfoCard heading='CORS Issue'>
            “CORS” stands for <b>Cross-Origin Resource Sharing</b>. It allows you to make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the <b>Same-Origin Policy</b> (SOP) <br />
            To overcome this problem, normally the server side should be configured but if that's not the case then the problem can be mitigated by 3rd party extension which makes the browser to allow make requests from one website to another website. <br />
            As <i>Bitfinex API</i> at the server-side, it's not configured to set proxy header. Thus, I have used "<u>Allow CORS: Access-Control-Allow-Origin</u>" extension. <a href='https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en'>
              https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en
            </a>
          </InfoCard>
        </Grid>
      </Grid>
    </>
  )
}
