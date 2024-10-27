import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null); 

  
  const events = [
    {
      imageClass: 'card-image1',
      imgclass: 'https://www.livemint.com/lm-img/img/2024/10/26/600x338/289180759_5754632061231502_1626221208455688324_n_1655788111959_1729928213637.jpg',
      eventName: 'Diljit Dosanjh Concert',
      date: '27-10-2024',
      location: 'Jawaharlal Nehru Stadium, New Delhi, India',
      description: 'Enjoy a night of Punjabi music with Diljit Dosanjh in New Delhi!'
    },
    {
      imageClass: 'card-image2',
      imgclass: 'https://feeds.abplive.com/onecms/images/uploaded-images/2024/09/24/f7f3e7b3e6a8c38349dd6f12081fba941727180684303775_original.jpg?impolicy=abp_cdn&imwidth=320',
      eventName: 'Coldplay',
      date: '18-1-2025',
      location: 'DY Patil Stadium, Mumbai, India',
      description: 'Experience the magic of Coldplay live in Mumbai.'
    },
    {
      imageClass: 'card-image3',
      imgclass: 'https://static.toiimg.com/thumb/msid-111960170,width-1280,height-720,resizemode-4/111960170.jpg',
      eventName: 'Karan Aujla, It was all a Dream!',
      date: '7-12-2024',
      location: 'Sector 16, Cricket Stadium, Chandigarh, India',
      description: 'Join Karan Aujla for an unforgettable night in Chandigarh.'
    },
    {
      imageClass: 'card-image4',
      imgclass: 'https://i.ytimg.com/vi/2o5u159w_uI/maxresdefault.jpg',
      eventName: 'Abhishek Upmanyu Live',
      date: '16-11-2024',
      location: 'Guru Nanak Dev Bhavan, Ludhiana, Punjab',
      description: 'Laugh out loud with Abhishek Upmanyu in Ludhiana.'
    },
    {
      imageClass: 'card-image5',
      imgclass: 'https://origin-staticv2.sonyliv.com/videoasset_images/tkss_2022_23_landscape_thumb_plumber.jpg',
      eventName: 'Kapil Sharma Show',
      date: '28-11-2024',
      location: 'Film City, Mumbai, India',
      description: 'Catch the hilarious Kapil Sharma live in action in Mumbai.'
    },
    {
      imageClass: 'card-image6',
      imgclass: 'https://www.mccawhall.com/assets/img/Anubhav-Singh-Bassi-Live_2024_brand-da30123073.jpg',
      eventName: 'Kisi Ko Batana Mat by Anubhav',
      date: '11-1-2025',
      location: 'Prestige Centre for Performing Arts, Bengaluru',
      description: 'Anubhav brings his new comedy special to Bengaluru.'
    }
  ];

  
  const filteredEvents = events.filter((event) =>
    event.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.date.includes(searchTerm) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const openModal = (event) => {
    setSelectedEvent(event);
  };

  
  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className='Main'>
      <nav className='nav'>
        <div className='navimage'></div>
        <p className='navquote'>"Life is an event. Make it memorable."</p>
        <div className='navlist'>
          <li className='navitem'>Home</li>
          <li className='navitem'>About</li>
          <li className='navitem'>Contact</li>
        </div>
      </nav>
      <section className='search-bar'>
        <input
          type='text'
          placeholder='Search Events by Name, Date or Location...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>
      <section className='EventDiv'>
        {filteredEvents.map((event, index) => (
          <div className='card' key={index} onClick={() => openModal(event)}>
            <div className={event.imageClass}></div>
            <div className='card-content'>
              <p className='card-content-style'>Event: {event.eventName}</p>
              <p className='card-content-style'>Date: {event.date}</p>
              <p className='card-content-style'>Location: {event.location}</p>
            </div>
          </div>
        ))}
      </section>

      
      {selectedEvent && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={closeModal}>&times;</span>
            <img src={selectedEvent.imgclass} alt={selectedEvent.eventName} style={{ width: '100%', height: '300px', borderRadius: '10px' }} />
            <h2>{selectedEvent.eventName}</h2>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
            <p>{selectedEvent.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
