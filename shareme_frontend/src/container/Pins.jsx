import React,{useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Feed from '../components/Feed';
import PinDetails from '../components/PinDetails';
import CreatePin from '../components/CreatePin';
import UserProfile from '../components/UserProfile';
import Search from '../components/Search';
const Pins = ({user}) => {
  const [searchTerm, setSearchTerm] = useState('');

  return(
      <div className="px-2 md:px-5">
          <div className="bg-gray-50">
              <Navbar user={user} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          </div>
          <div className="h-full">
              <Routes>
                  <Route path="/" element={<Feed/>}/>
                  <Route path="/category/:categoryId" element={<Feed/>}/>
                  <Route path="/create-pin" element={<CreatePin user={user}/>}/>
                  <Route path="/search" element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>}/>
                  <Route path="/pin-detail/:pinId" element={<PinDetails user={user}/>}/>
                
              </Routes>
          </div>
      </div>
  )
};

export default Pins;
