// OurTeam.js
import React from 'react';
import './OurTeam.css';
import ayushiPhoto from './Ayushi.jpeg'
import amiteshPhoto from './amitesh.png'
import midunPhoto from './midun.jpeg'
import nikhilPhoto from './nikhil.jpg'

const teamMembers = [
    {
        id: 1,
        name: " Amitesh Kumar",
        position: "Founder & CEO ",
        college: "BITS Pilani",
        photo: amiteshPhoto,
    },
    {
        id: 2,
        name: "Nikhil raj",
        position: "Founding Team Member, Application Development",
        college: "NIT Patna",
        photo: nikhilPhoto,
    },
    {
        id: 3,
        name: "Midhun Mohan",
        position: "Founding Team Member, Design Head",
        college: "Bharathiar University ",
        photo: midunPhoto,
    },
    {
        id: 4,
        name: "Ayushi Verma",
        position: "Founding Team member, UX UI Designer",
        college: "NIFT, Hyderabad ",
        photo: ayushiPhoto,
    }
];

const OurTeam = () => {
    return (
        <div className="our-team-container">
            <h2 className="center">Our Team</h2>
            <div className="team-members-container">
                {teamMembers.map((member) => (
                    <div key={member.id} className="team-member-card">
                        <img src={member.photo} alt={member.name} className="team-member-photo" />
                        <h3>{member.name}</h3>
                        <p>{member.position}</p>
                        <p>{member.college}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurTeam;
