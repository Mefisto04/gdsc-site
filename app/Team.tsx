import React from "react";
import styles from "../pages/Home.module.css";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function TeamCard({ name, role, socialMedia }) {
  return (
    <div className={`${styles.mainCard}`}>
      <Image
        className={`${styles.profilePic}`}
        src={"/didi.svg"}
        width={140}
        height={100}
        alt="profile image"
      />
      <p>{name}</p>
      <p>{role}</p>
      <div className={`${styles.hr}`} />
      <div className={`${styles.dataContainer}`}>
        {socialMedia.map((media, index) => (
          <div key={index}>
            {media.icon}
            <p>{media.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Team({ teamData }) {
  return (
    <main className={`${styles.main}`}>
      {teamData.map((member, index) => (
        <TeamCard key={index} {...member} />
      ))}
    </main>
  );
}

export default Team;
