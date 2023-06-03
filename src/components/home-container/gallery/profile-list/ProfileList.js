import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './ProfileList.css'
import {
  Typography,
  Button,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core'

import { apiKey } from '../../../../APIKEYS'
import CircularStatic from '../../../commons/CircularProgressWithLabel'
import { displayAll } from '../../../../Phase/displayAll'

function ProfileList({ account, contractData, setSelectedProfile }) {
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const [profiles, setProfiles] = useState([
    {
      image:
        'https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg',
      className: 'Tacos Rosa Mexicano',
    },
    {
      image:
        'https://food.fnr.sndimg.com/content/dam/images/food/products/2022/3/11/rx_goldbelly-clinton-street-diner-zeus-burger.jpg.rend.hgtvcom.406.305.suffix/1647019464547.jpeg',
      className: 'Best Burgers in NYC',
    },
    {
      image:
        'https://hips.hearstapps.com/hmg-prod/images/nachos-supreme-horizontal-1547669254.png',
      className: 'Nachos From The Heart',
    },
    {
      image:
        'https://assets.epicurious.com/photos/576430e58accf290434553d1/16:9/w_1280,c_limit/braised-beef-short-ribs.jpg',
      className: 'Braised Beef Short Ribs',
    },

    {
      image:
        'https://hips.hearstapps.com/hmg-prod/images/delish-homemade-pizza-horizontal-1542312378.png',
      className: 'Homemade Pizza',
    },

    {
      image:
        'https://www.thespruceeats.com/thmb/k8Ejnb3LR7yrhwGirJEC2x6r1sg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-fish-and-chips-recipe-434856-Hero-5b61b89346e0fb00500f2141.jpg',
      className: 'Classic fish and chips',
    },

    {
      image:
        'https://easyhealthyrecipes.com/wp-content/uploads/2021/09/Buffalo-Shrimp-SF-6-500x375.jpg',
      className: 'The buffalo shrimp',
    },

    {
      image:
        'http://smilesandwich.com/wp-content/uploads/2019/09/3-Ingredient-Buffalo-BBQ-Air-Fryer-Chicken-Wings-2.jpg',
      className: ' Buffalo BBQ',
    },

    {
      image:
        'https://veganhuggs.com/wp-content/uploads/2021/09/just-egg-omelette-square-crop.jpg',
      className: 'JUST Egg Omelette',
    },

    {
      image:
        'https://d1e3z2jco40k3v.cloudfront.net/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/quick_and_easy_french_toast_new_800x800.webp?rev=472bd38acf3f4e80b329915ba486cae1&vd=20220809T202043Z&hash=34381AE86E477B12B64277F710290F21',
      className: 'French Toast',
    },

    {
      image:
        'https://www.kosher.com/resized/details.slide/f/t/FT_Schapira_Refreshing_Tropical_Fruit_Cocktail.jpg',
      className: 'Tropical Fruit Cocktail',
    },
    {
      image:
        'https://hips.hearstapps.com/hmg-prod/images/delish-homemade-pizza-horizontal-1542312378.png',
      className: 'Homemade Pizza',
    },
  ])

  useEffect(() => {
    const loaddata = async () => {
      try {
        setLoading(true)
        console.log('getAllProfiles')
        // setProfiles(getAllProfiles)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    loaddata()
  }, [])

  const details = (profile) => {
    console.log('here profile', profile.address)
    localStorage.removeItem('selectedProfile')
    localStorage.setItem('selectedProfile', profile)
    setSelectedProfile(profile)
    history.push(`/profile/details/${profile.address}`)
  }

  return (
    <div style={{ minHeight: '60vh', borderRadius: '24px' }}>
      {loading ? (
        <CircularStatic />
      ) : (
        <div>
          <Grid container spacing={40}>
            {profiles.length ? (
              profiles.map((profile, index) => (
                <Grid item md={3} spacing={1} className="swap-card">
                  <Card sx={{ maxWidth: 240 }} onClick={() => details(profile)}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={profile.image}
                      alt="Profile"
                    />
                    <CardContent>
                      <Typography
                        font-size="24px"
                        color="#1C1A19"
                        className="card-header-swap"
                      >
                        {profile.className}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <h2>No Profiles Yet...</h2>
            )}
          </Grid>
        </div>
      )}
    </div>
  )
}

export default ProfileList
