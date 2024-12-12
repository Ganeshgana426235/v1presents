import React from 'react'
import './Contact.css'
import { useState } from 'react';
import apply from '../../Media/apply.gif'
import logo from '../../Media/logo.png'

const Contact = () => {
   
  const [result, setResult] = React.useState("");
  const [isClick, setClick] = useState(false);
  const handleClick = async(e) =>{
    e.preventDefault();
    isClick? setClick(false):setClick(true);
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ae3a7e2b-20af-4c9a-811f-951e9028c054");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <br></br>
      <br></br>
      <div className='v1details'>
        <h2>Join the Journey</h2>
        <p>Whether you're a writer, actor, director, or passionate storyteller, V1 Presents is the platform for you. Together, we can create stories that inspire, entertain, and leave a lasting impression.</p>
        <h2>Explore Our Vision</h2>
        <p>Dive into a world of innovation, creativity, and storytelling excellence. At V1 Presents, we don’t just make films – we craft experiences.

<br></br><br></br>Contact us today to learn how you can be part of the journey. Your story deserves to be told.<br></br><br></br></p>
<h2>Collaborate with V1Presents</h2>
<p>Are you passionate about creating impactful projects and showcasing your skills? At V1Presents, we believe in the power of collaboration and innovation. Whether you're an aspiring developer, designer, or creative thinker, there’s always room for fresh ideas and enthusiastic minds in our team.
<br></br>
By collaborating with us, you’ll have the opportunity to:<br></br>
<ul>
  <li>Work on real-world projects that challenge and enhance your skills.</li>
  <li>Showcase your talents on a global platform.</li>
  <li>Grow your network and connect with like-minded individuals.</li>
  <li>Learn and improve in a supportive and dynamic environment.</li>
</ul>
<br></br>

Let’s create something extraordinary together!
If you're interested in making an impact and contributing to exciting projects, we’d love to hear from you.
Join us, and let’s turn your ideas into reality.

Reach out today and start your journey with V1Presents!</p>
      </div>
      <br></br>
      <marquee> Hurry up! Don’t miss this opportunity!, Click the form below and join now!         Hurry up! Don’t miss this opportunity!, Click the form below and join now!   Hurry up! Don’t miss this opportunity!, Click the form below and join now!    Hurry up! Don’t miss this opportunity!, Click the form below and join now!    Hurry up! Don’t miss this opportunity!, Click the form below and join now!</marquee>
      <p></p>
      <img  className="applynow" src={apply} onClick={handleClick}></img>
      {isClick && 
      <form onSubmit={onSubmit}>
      <input type='text' 
      required
        placeholder='Name'
        name='Name'
        >
        </input>
        <select name='Gender'>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value='Transgender'>Transgender</option>
        </select>
        <input
        required
        type='number'
        placeholder='Age'
        name='Age'
        >
        </input>
        <input
        required
        type='tel'
        placeholder='Mobile Number'
        name='Phone'
        >
        </input>
        <input
        required
        type='email'
        placeholder='Gmail'
        name='Gmail'
        >
        </input>
        <input
        required
        placeholder='Occupation'
        name='occupation'
        >
        </input>
        <input
        placeholder='Link of Prevois Projects'
        name='PreviousProjects'

        >
        
        </input>
        <textarea
        required
        placeholder='Your Message'
        rows='5'
        name='Message'
        >
        </textarea>
        <span>{result}</span>
        <input className='submitbutton' type='submit'></input>

      </form>
}
<div>
  <br></br>
  <img  className='v1logo' src={logo}></img>
  <br></br>
  <br></br><br></br>
  <p>Srirama Nilayam, Gandi Maisamma, Hyderabad - 500043</p>
  <p>
    Ph : +91 6300161975<br></br> Email : v1presents@gmail.com <br></br></p>

</div>
      

    </div>
  );
}


export default Contact
