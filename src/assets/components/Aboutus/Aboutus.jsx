import React from 'react';
import v1homevideos from '../../Media/v1presentvideos.mp4';
import './Aboutus.css';
import v1homevideo from '../../Media/homevideo.mp4';
import v1homevideo2 from '../../Media/v1presentvideos2.mp4';
const Aboutus = () => {
  return (
    <div className='a'>
      <div className='headimage'>
      <video
            autoPlay
            loop
            muted // Optional: mute the video if you want
           
            className='uimage'
            src={v1homevideos}
            type="video/mp4"
          >
            Your browser does not support the video tag.
          </video>
        
      </div>

      <div className='Aboutus'>
        <div className='home'>
          <video
            autoPlay
            loop
            muted // Optional: mute the video if you want
           
            className='bimage'
            src={v1homevideo}
            type="video/mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='home'>
          <video
            autoPlay
            loop
            muted // Optional: mute the video if you want
           
            className='bimage2'
            src={v1homevideo2}
            type="video/mp4"
          >
            Your browser does not support the video tag.
          </video>
          
        </div>
        <div className='scrolltext'>
        <marquee>Welcome to V1 Presents! Where vision meets creation, Stay tuned for exciting updates and releases!, Thank You</marquee>
        </div>
        
        <div className='home'>
          <p>
          <b>Welcome to V1 Presents – Where Talent Meets Opportunity</b> <br></br>

At V1 Presents, we are a visionary film production company dedicated to showcasing exceptional talent and transforming creative ideas into unforgettable cinematic experiences. Our mission is to provide a platform for emerging and established artists, creators, and visionaries to bring their stories to life.
<br></br><b>
What We Do</b><br></br>
We specialize in producing high-quality films across genres, embracing innovative storytelling and cutting-edge techniques. From concept development to post-production, our team collaborates with talented individuals to craft impactful narratives that resonate with global audiences.
<br></br><b>
Our Commitment to Talent</b><br></br>
At the heart of V1 Presents is our passion for nurturing talent. We believe in empowering creators, actors, and behind-the-scenes professionals by offering them the tools, resources, and opportunities to shine. Our projects are a testament to the limitless potential of collaboration and creativity.
<br></br><b>
Join the Journey</b><br></br>
Whether you're a writer, actor, director, or passionate storyteller, V1 Presents is the platform for you. Together, we can create stories that inspire, entertain, and leave a lasting impression.

Explore Our Vision
Dive into a world of innovation, creativity, and storytelling excellence. At V1 Presents, we don’t just make films – we craft experiences.

Contact us today to learn how you can be part of the journey. Your story deserves to be told.</p>
          
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
