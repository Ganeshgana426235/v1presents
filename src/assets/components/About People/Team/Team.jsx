import React from 'react';
import './Team.css';
import Team_data from './Teamdata';
import veeru from '../../../Media/veerendra.png'
import Support from './Supporter';
import insta from '../../../Media/insta.png'

const Team = () => {
  return (
    <div className='teams'>
      <div className='veerendra'>
        <br></br>
      <img src={veeru}></img>
      <h1>Veerendra (Founder of V1 Presents) <a href="https://www.instagram.com/veerendra_1422/profilecard/?igsh=MWc3b2pxYWRwZDlmag=="> <img className='instapic' src={insta}></img></a></h1>
      <h2>Director, Editor, Actor :</h2>
      <h3>Veerendra is a multifaceted talent in the world of entertainment, recognized as a visionary film director, editor, actor, and the founder of V1 Presents. With a passion for storytelling and a deep understanding of cinematic artistry, Veerendra has carved a niche for himself in the industry, seamlessly blending creativity and professionalism in every project he undertakes. As a film director, Veerendra is celebrated for his ability to craft compelling narratives that resonate with audiences. In addition to directing, Veerendra is a skilled editor, bringing precision and finesse to post-production. As an actor, Veerendra brings depth and authenticity to his performances, connecting with audiences on an emotional level<br></br><br></br>Through V1 Presents, Veerendra channels his creative vision to produce groundbreaking projects, blending film, content creation, and entertainment. His leadership has transformed V1 Presents into a trusted name, synonymous with quality and innovation.</h3>

      </div>
      <div className='team'>
      {Team_data.map((team, index) => {
        return (
          <div className='team-div' key={index}>
            <div>
              <img className="team-pic" src={team.team_pic} alt={team.team_name} />
            </div>

            <div className='team-d'>
              <h2 className='team-names'>{team.team_name}</h2>
              <h2 className='team-profession'>{team.team_role}</h2>
              <p>{team.team_des}</p>
            </div>
          </div>
        );
      
      })}
      </div>
      <h1>Best Supporters</h1>
      <div className='support'>
        
        {Support.map((support, index) =>{
          return(
            <div className='support-des'>
              <div> <img src={support.sup_pic}></img></div>
            </div>
            

          );

        })}
      </div>
    </div>
  );
};

export default Team;
