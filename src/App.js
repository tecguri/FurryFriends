// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Help from './components/Help';
import FAQ from './components/FAQ';
import Auth, {AuthContext} from './utils/Auth';
import Pet, {PetContext} from './utils/Pets';
import {useContext} from 'react';
import UserProfile from './components/UserProfile';
import Appointments from './components/Appointments';
import Admin from './components/Admin';
import AdminAppointments from './components/AdminAppointments';
import AdminUsers from './components/AdminUsers';

function App() {

  const {user} = useContext(AuthContext);
  // const {pet} = useContext(PetContext);

  return (
    <>
      <Auth user={user} >
        <Pet>
          <Router>
            { user?.email && user.email == "Admin@gmail.com" ? (
                <>
                  <Routes>
                    <Route exact path='/' element={<Admin />}></Route>
                    <Route exact path='/admin' element={<Admin />}></Route>
                    <Route exact path='/admin-appointments' element={<AdminAppointments />}></Route>
                    <Route exact path='/admin-users' element={<AdminUsers />}></Route>
                  </Routes>
                </>
              ) : (
                <>
                  <Navbar title="FurryFriends" />
                  <Routes>
                    <Route exact path='/' element={<Homepage />}></Route>
                    <Route exact path='/termsandconditions' element={<TermsAndConditions />}></Route>
                    <Route exact path='/privacypolicy' element={<PrivacyPolicy />}></Route>
                    <Route exact path='/aboutus' element={<AboutUs />}></Route>
                    <Route exact path='/contactus' element={<ContactUs />}></Route>
                    <Route exact path='/ourservices' element={<Services />}></Route>
                    <Route exact path='/help' element={<Help />}></Route>
                    <Route exact path='/faq' element={<FAQ />}></Route>
                    <Route exact path='/profile' element={<UserProfile />}></Route>
                    <Route exact path='/appointments' element={<Appointments />}></Route>
                  </Routes>
                  <Footer />
                </>
              )
            }
          </Router>
        </Pet>
      </Auth>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
