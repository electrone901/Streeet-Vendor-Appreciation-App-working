import React, { useEffect, useState } from 'react'
import ProfileList from './profile-list/ProfileList'
import logo from '../../../images/logo-large.png'
import test from '../../../images/test.png'
import { Grid, Container, Card, TextField, MenuItem } from '@material-ui/core'
import './HomeGallery.css'

function HomeGallery({ setSelectedProfile }) {
  return (
    <div
      style={{
        minHeight: '70vh',
        paddingBottom: '4rem',
        paddingTop: '1.5rem',
      }}
    >
      {/* Home Header */}
      <Container>
        <div>
          <Grid
            container
            spacing={3}
            style={{
              paddingBottom: '1rem',
              width: '100%',
            }}
          >
            <Grid
              item
              xs={4}
              className="outer"
              colum
              style={{
                textAlign: 'left',
                alignItems: 'flex-start',
                display: 'block',
              }}
            >
              {/* <img src={logo} className="logo-hero" alt="logo-hero" /> */}
              <h1 style={{ fontSize: '6rem' }}>Collect unique artworks</h1>
              <h2 style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }}>
                Experience interactive and generative art &amp; music
              </h2>
            </Grid>
            <Grid
              item
              xs={8}
              style={{
                paddingLeft: '5rem',
                textAlign: 'end',
              }}
            >
              <img
                src={test}
                style={{
                  objectFit: 'cover',
                  width: '90%',
                  textAlign: 'right',
                }}
                alt="logo-hero"
              />
            </Grid>
          </Grid>
        </div>
      </Container>

      <section id="gallery" className="gallery-container">
        {/* Filters  */}
        <div className="outer">
          <TextField
            fullWidth
            name="petType"
            select
            label="Business Type"
            variant="outlined"
            style={{ width: '80%' }}
            // onChange={(e) => setPetType(e.target.value)}
            defaultValue="All vendors"
            // ref={petTypeRef}
            id="test"
          >
            <MenuItem value="All vendors">✅ All vendors</MenuItem>
            <MenuItem value="Restaurant">☐ Restaurant</MenuItem>
            <MenuItem value="Services">☐ Services</MenuItem>
            <MenuItem value="Handyman">☐ Handyman</MenuItem>
            <MenuItem value="Other">☐ Other</MenuItem>
          </TextField>

          {/* by city */}
          <TextField
            fullWidth
            name="petType"
            select
            label="Search by neighborhoods"
            variant="outlined"
            style={{ width: '80%' }}
            // onChange={(e) => setPetType(e.target.value)}
            defaultValue="All neighborhoods"
            // ref={petTypeRef}
          >
            <MenuItem value="All neighborhoods">✅ All neighborhoods</MenuItem>
            <MenuItem value="Alamo Square">☐ Alamo Square</MenuItem>
            <MenuItem value="Anza Vista">☐ Anza Vista</MenuItem>
            <MenuItem value="Ashbury Heights">☐ Ashbury Heights</MenuItem>
            <MenuItem value="Balboa Terrace">☐ Balboa Terrace</MenuItem>
            <MenuItem value="Bayview-Hunters Point">
              ☐ Bayview-Hunters Point
            </MenuItem>
            <MenuItem value="Bernal Heights">☐ Bernal Heights</MenuItem>
            <MenuItem value="Bayview-Hunters Point">
              ☐ Bayview-Hunters Point
            </MenuItem>
            <MenuItem value="Castro">☐ Castro</MenuItem>
            <MenuItem value="Chinatown">☐ Chinatown</MenuItem>
            <MenuItem value="Civic Center">☐ Civic Center</MenuItem>
            <MenuItem value="Corona Heights">☐ Corona Heights</MenuItem>
          </TextField>

          {/* by Distance */}
          <TextField
            fullWidth
            name="petType"
            select
            label="Search by distance"
            variant="outlined"
            style={{ width: '80%' }}
            // onChange={(e) => setPetType(e.target.value)}
            defaultValue="Any distance"
            // ref={petTypeRef}
          >
            <MenuItem value="Any distance">✅ Any distance</MenuItem>
            <MenuItem value="Driving (5 mi.)">☐ Driving (5 mi.)</MenuItem>
            <MenuItem value="Biking (2 mi.)">☐ Biking (2 mi.)</MenuItem>
            <MenuItem value="Walking (1 mi.)">☐ Walking (1 mi.)</MenuItem>
            <MenuItem value="Within 10 blocks">☐ Within 10 blocks</MenuItem>
            <MenuItem value="Bayview-Hunters Point">
              ☐ Bayview-Hunters Point
            </MenuItem>
          </TextField>

          {/* search */}
          <form className="search-form">
            <div className="outer pseudo-search">
              <input type="text" placeholder="Search" autofocus required />
              <span className="search-clear">Clear</span>
              <span className="search-icon">🔍</span>
            </div>
          </form>
        </div>
        <br />
        {/* Profiles */}
        <Card
          style={{
            borderRadius: '24px',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            backgroundColor: '#fff9f7',
          }}
        >
          <ProfileList setSelectedProfile={setSelectedProfile} />
        </Card>
      </section>
    </div>
  )
}

export default HomeGallery
