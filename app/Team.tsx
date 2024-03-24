'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

interface TeamMember {
  Name: string;
  pos: string;
  img: string;
}

interface Teams {
  [key: string]: TeamMember[]; // Index signature to allow any string as key
}

interface Teams {
  lead: TeamMember[];
  cp: TeamMember[];
  web: TeamMember[];
  management: TeamMember[];
  social: TeamMember[];
  design: TeamMember[];
}

function Team() {
  const teams: Teams = {
    lead: [
      {
        Name: 'Jaya Singh',
        pos: 'GDSC Lead 2023-24',
        img: '/didi.svg',
      },
    ],
    cp: [
      {
        Name: 'Yo',
        pos: 'CP Lead 2023-24',
        img: '/didi.svg',
      },
      // Add other CP team members here
    ],
    web: [
      {
        Name: 'Yo',
        pos: 'CP Lead 2023-24',
        img: '/didi.svg',
      },
      // Add your Web team members here
    ],
    management: [
      {
        Name: 'Yo',
        pos: 'CP Lead 2023-24',
        img: '/didi.svg',
      },
      // Add your Management team members here
    ],
    social: [
      {
        Name: 'Yo',
        pos: 'CP Lead 2023-24',
        img: '/didi.svg',
      },
      // Add your Social team members here
    ],
    design: [
      {
        Name: 'Yo',
        pos: 'CP Lead 2023-24',
        img: '/didi.svg',
      },
      {
        Name: 'Yo',
        pos: 'CP Lead 2023-24',
        img: '/didi.svg',
      },
      {
        Name: 'Yo1',
        pos: 'CP Lead 2023-24',
        img: '/didi.svg',
      },
      {
        Name: 'Yo2',
        pos: 'CP Lead 2023-24',
        img: '/didi.svg',
      },
      {
        Name: 'Yo3',
        pos: 'CP Lead 2023-24',
        img: '/didi.svg',
      },
      {
        Name: 'Yo4',
        pos: 'CP Lead 2023-24',
        img: '/didi.svg',
      },
      {
        Name: 'Yo5',
        pos: 'CP Lead 2023-24',
        img: '/didi.svg',
      },
      // Add your Design team members here
    ],
  };

  const [selectedTeam, setSelectedTeam] = useState<string>('cp'); // Default to 'cp' for demo

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const renderTeamMembers = (team: string) => {
    const combinedTeam = [...teams.lead, ...teams[team]];
    return (
      <div>
      <Slider {...settings}>
        {combinedTeam.map((teamMember, index) => (
          <div key={index} className="p-4">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-80 w-full">
                <Image src={teamMember.img} alt={teamMember.Name} layout="fill" objectFit="cover" className="rounded-2xl" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-bold">{teamMember.Name}</p>
                  <p className="text-sm">{teamMember.pos}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    );
  };

  const renderTeamSelectionButtons = () => (
    <div className="flex justify-center my-10">
      {Object.keys(teams).filter(team => team !== 'lead').map((team, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded mx-2 ${selectedTeam === team ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectedTeam(team)}
        >
          {team.charAt(0).toUpperCase() + team.slice(1)} Team
        </button>
      ))}
    </div>
  );

  return (
    <div className="mt-80 mb-40">
      <p className="flex justify-center mb-16 font-bold text-3xl">Team</p>
      {renderTeamSelectionButtons()}
      <div className="px-8">
        {renderTeamMembers(selectedTeam)}
      </div>
    </div>
  );
}

export default Team;
