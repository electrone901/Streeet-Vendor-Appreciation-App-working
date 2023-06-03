import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'
import HomeGallery from './components/home-container/gallery/HomeGallery'
import Profile from './components/home-container/profile/Profile'
import CreateProfile from './components/create-profile/CreateProfile'
import CreateLinks from './components/create-links/CreateLinks'
import MyProfile from './components/home-container/myprofile/MyProfile'
import Notifications from './components/notifications/Notifications'
import Web3Modal from 'web3modal'
// import ABI from ''
import ABI from './artifacts/contracts/StreeetVendorAppreciationApp.sol/StreeetVendorAppreciationApp.json'
import UAuth from '@uauth/js'
const { ethers } = require('ethers')

function App() {
  const [wallet, setWallet] = useState('')
  const [signer, setSigner] = useState(null)
  const [provider, setProvider] = useState(null)
  const [contract, setContract] = useState(null)
  console.log("🚀 ~ file: App.js ~ line 23 ~ App ~ contract", contract)
  const [donateStream, setDonateStream] = useState(false)
  const [web3authLogin, setWeb3authLogin] = useState(null)
  const [hasProfile, setHasProfile] = useState('')
  const [allProfiles, setAllProfiles] = useState([])
  const [selectedProfile, setSelectedProfile] = useState('')
  const [image, setImage] = useState('')
  const [username, setUsername] = useState('')
  const [bio, setBio] = useState('')
  const [coverPhoto, setCoverPhoto] = useState('')
  const [userUD, setUserUD] = useState('')
  const [category, setCategory] = useState('Other')

  const unstoppableInstance = new UAuth({
    clientID: '36d48583-8d6f-418d-ab02-e35123dd1467',
    redirectUri: 'https://phasedapp.netlify.app',
    scope: 'openid wallet',
  })

  const unstoppableLogin = async () => {
    const user = await unstoppableInstance.loginWithPopup()
    console.log('MY user', user)
    if (user) {
      localStorage.setItem('user', user)
      setUserUD(user)
      setWallet(user.idToken.wallet_address)
    }
  }

  const userLogOut = () => {
    localStorage.removeItem('user')
    setUserUD('')
  }

  const connectWallet = async () => {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const address = await signer.getAddress()
    setWallet(address)
    localStorage.setItem('currentAccountLocalStorage', address)
    setProvider(provider)
    setSigner(signer)
    let contract = new ethers.Contract(
      '0x16d7be29ebc6db2e9c92E0Bf1dE5c1cfe6b1AD2a',
      ABI.abi,
      signer,
    )
    setContract(contract)
  }

  const disconnectWallet = async () => {
    localStorage.removeItem('currentAccountLocalStorage')
    setWallet('')
  }

  useEffect(() => {}, [])

  return (
    <Router>
      <div className="">
        <Navbar
          unstoppableLogin={unstoppableLogin}
          userUD={userUD}
          connectWallet={connectWallet}
          disconnectWallet={disconnectWallet}
          wallet={wallet}
          hasProfile={hasProfile}
        />

        <Route exact path="/">
          <HomeGallery
            allProfiles={allProfiles}
            setSelectedProfile={setSelectedProfile}
          />
        </Route>

        <Switch>
          <Route exact path="/notifications" component={Notifications} />

          <Route path="/create">
            <CreateProfile
              setCoverPhoto={setCoverPhoto}
              setImage={setImage}
              setUsername={setUsername}
              setBio={setBio}
              setCoverPhotoFunction={setCoverPhoto}
              wallet={wallet}
              image={image}
              username={username}
              bio={bio}
              coverPhoto={coverPhoto}
              category={category}
              setCategory={setCategory}
            />
          </Route>

          <Route path="/create-links">
            <CreateLinks
              wallet={wallet}
              image={image}
              username={username}
              bio={bio}
              coverPhoto={coverPhoto}
              category={category}
            />
          </Route>

          <Route path="/profile/details/:userAddress">
            <Profile selectedProfile={selectedProfile} wallet={wallet} />
          </Route>
          <Route path="/my-profile">
            <MyProfile selectedProfile={selectedProfile} wallet={wallet} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
