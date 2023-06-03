import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useHistory } from 'react-router'
import { Container, Box, Grid, Button, Card } from '@mui/material'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import LinearProgress from '@mui/material/LinearProgress'
import './Profile.css'
import donation from '../../../images/list.png'
import Overview from './Overview'
import Updates from './Updates'
import Contact from './Contact'
// import TableUpdates from './TableUpdates'

const dataUpdates = [
  {
    created: 'August 23, 2022',
    author: 'Annie Loizzi',
    update:
      'Cooper is making some positive progress this week. Following is an update from the Roberts family:  This week, we are happy to report that Cooper IV and PICC lines have been removed. He no longer requires IV pain medicine and antibiotics.',
  },
  {
    created: 'August 23, 2022',
    author: 'Annie Loizzi',
    update:
      'Cooper is making some positive progress this week. Following is an update from the Roberts family:  This week, we are happy to report that Cooper IV and PICC lines have been removed. He no longer requires IV pain medicine and antibiotics.',
  },
  {
    created: 'August 23, 2022',
    author: 'Annie Loizzi',
    update:
      'Cooper is making some positive progress this week. Following is an update from the Roberts family:  This week, we are happy to report that Cooper IV and PICC lines have been removed. He no longer requires IV pain medicine and antibiotics.',
  },
]

function Profile({
  account,
  currentAccount,
  selectedProfile,
  setDonateNfts,
  setDonateStream,
}) {
  const { userAddress } = useParams()
  selectedProfile = {
    category: 'Mexican',
    creationDate: 'Oct-09-2022',
    description:
      'The authentic taste of Rosa comes from family recipes and from fresh, simple and tasteful ingredients straight from home. In every taco there is a bit of true Mexican culture and flavor. Located in the heart of Chelsea Market, our offerings are all made-from-scratch from our salsas and marinades to our flour and corn tortillas. We also serve tostadas, quesadillas, mulas, and vampiro. We suggest our very popular adobada tacos made with pork marinated in adobo sauce. Customize your tacos or get them "con todo" (with everything): guacamole, onion, cilantro and salsa. Bite into the authentic flavors of Mexico and join us for lunch or dinner. Provecho!',
    fundraiserId: '4',
    image:
      'https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg',
    organizer: '0x11760DB13aE3Aa5Bca17fC7D62172be2A2Ea9C11',
    targetAmmount: '1000',
    title: 'Best Tacos - Rosa Mexicano',
    totalDonations: '100',
    neighborhood: 'Tribeca',
  }
  const history = useHistory()
  console.log('selectedProfile', selectedProfile)
  const [showProfile, setShowProfile] = useState(false)
  const [section, setSection] = useState('Overview')

  useEffect(() => {}, [])

  useEffect(() => {
    // getProfile(userAddress)
  }, [userAddress])

  const donate = async (e) => {
    setDonateStream(false)
    history.push(`/donate`)
  }
  const donateStream = async (e) => {
    setDonateStream(true)
    history.push(`/donate`)
  }

  const donateNFTs = async (e) => {
    setDonateNfts(true)
    history.push(`/donate`)
  }

  const visitSite = (site) => {
    const link = site.value
    if (link) {
      window.open(link, '_blank')
    } else {
      window.open(site, '_blank')
    }
  }

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div
      className="page-community"
      style={{ minHeight: '70vh', paddingBottom: '1rem', paddingTop: '1rem' }}
    >
      <header>
        <div className="img-apartment">
          <div
            style={{
              background: `url(https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) no-repeat`,
              // background: `url(${apt}) no-repeat`,
              backgroundPosition: 'center bottom',
              backgroundSize: '100%',
              height: '420px',
              display: 'flex',
              justifyContent: 'space-between',
              color: 'white',
              fontWeight: '600',
            }}
          >
            <div className="apartment-inner">
              <div className="bg-black">
                <h1>{selectedProfile.title} </h1>
                <div style={{ paddingTop: '0.3rem' }}>
                  <span style={{ fontSize: '2rem' }}>⭐</span>
                  <span style={{ fontSize: '2rem' }}>⭐</span>
                  <span style={{ fontSize: '2rem' }}>⭐</span>
                  <span style={{ fontSize: '2rem' }}>⭐</span>
                  <span style={{ fontSize: '2rem' }}>☆</span>
                  <span style={{ fontSize: '1rem', marginLeft: '1rem' }}>
                    12 comments
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: '0.3rem',
                  }}
                >
                  <TaskAltIcon style={{ fontSize: '2rem', color: 'white' }} />
                  <p style={{ fontSize: '1rem', marginLeft: '0.6rem' }}>
                    Verified Street Vendor Business
                  </p>
                </div>
              </div>
            </div>
            <div className="apartment-inner2">
              <button type="button" className="btn btn-lg btn-primary">
                Write a review
              </button>
              <button type="button" className="btn btn-lg btn-warning">
                Add new price
              </button>
            </div>
          </div>
        </div>
      </header>

      <Container>
        <div
          style={{
            paddingTop: '2.5rem',
            paddingBottom: '1rem',
          }}
        >
          <Button
            variant={section === 'Overview' ? 'contained' : ''}
            onClick={() => setSection('Overview')}
          >
            Overview
          </Button>
          <Button
            variant={section === 'Comments' ? 'contained' : ''}
            onClick={() => setSection('Comments')}
          >
            Comments
          </Button>
          <Button
            variant={section === 'Contact' ? 'contained' : ''}
            onClick={() => setSection('Contact')}
          >
            Contact & hours
          </Button>
        </div>
        <hr style={{ border: '1px solid #c8c8c8' }} />

        <div>
          {selectedProfile ? (
            <Box sx={{ width: '100%', paddingTop: '2rem' }}>
              <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={8}>
                  {section === 'Overview' && (
                    <Overview selectedProfile={selectedProfile} />
                  )}
                  {section === 'Comments' && (
                    <Updates selectedProfile={selectedProfile} />
                  )}
                  {section === 'Contact' && (
                    <Contact selectedProfile={selectedProfile} />
                  )}
                </Grid>

                <Grid p xs={4} className="grid-rigth-side">
                  <Card
                    style={{
                      width: '300px',
                      padding: '1.5rem',
                      float: 'right',
                    }}
                  >
                    <div className="page-wallet-address">
                      <p style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                        $
                        {selectedProfile.totalDonations === '0'
                          ? '0.00'
                          : selectedProfile.totalDonations}
                        <span
                          style={{
                            fontSize: '.94rem',
                            color: 'rgb(90 87 87)',
                            paddingLeft: '0.3rem',
                          }}
                        >
                          raised of $ {selectedProfile.targetAmmount}
                        </span>
                      </p>
                      <br />
                      <LinearProgress variant="determinate" value={50} />

                      <p style={{ fontSize: '.9rem', color: 'rgb(90 87 87)' }}>
                        30.3K suppoters
                      </p>
                      <br />

                      <br />

                      <Button
                        style={{
                          width: '100%',
                          background:
                            'linear-gradient(180deg,#ffde9e 50%,#fcb957)',
                          color: 'black',
                        }}
                        onClick={donate}
                      >
                        Donate Now
                      </Button>
                      <br />
                      <br />
                      <Button
                        style={{
                          width: '100%',
                          background:
                            'linear-gradient(180deg,#ffde9e 50%,#fcb957)',
                          color: 'black',
                        }}
                        onClick={donateStream}
                      >
                        Stream Payment By Superfluid
                      </Button>
                      <br />
                      <br />
                      <Button
                        onClick={donateNFTs}
                        style={{
                          width: '100%',
                          background:
                            'linear-gradient(180deg,#fdb933 35.42%,#f58131 139.58%)',
                          color: 'black',
                        }}
                      >
                        Donate NFT By NftPort
                      </Button>
                      <br />
                      <br />

                      <Button
                        onClick={donateNFTs}
                        style={{
                          width: '100%',
                          background:
                            'linear-gradient(180deg,#310242 35.42%,#2348cb 139.58%)',
                          color: 'white',
                        }}
                      >
                        Chat powered by XMTP
                      </Button>
                      <br />
                      <br />
                      <br />
                      <hr style={{ border: '1px solid #c8c8c8' }} />
                      <p>Street Vendor Suppoters</p>
                      <img
                        src={donation}
                        alt="profileIcon"
                        className="donation-img"
                      />
                      <img
                        src={donation}
                        alt="profileIcon"
                        className="donation-img"
                      />
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <Button variant="contained" color="primary" component={Link} to="/">
              Refresh
            </Button>
          )}
        </div>
      </Container>

      <br />
    </div>
  )
}

export default Profile
