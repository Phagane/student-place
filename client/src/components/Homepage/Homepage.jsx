import React from "react";
import Header from "../Layouts/Header";
import RoomGallery from "./RoomGallery";
import ImageCard from "./ImageCard";

const Homepage = () => {
  return (
    <div>
      <Header bannerImage="aboutUs.jpg" bannerTitle="Welcome to PropertyHub"/>
      <main className="container mx-auto px-6 py-12">
        <RoomGallery/>
        <ImageCard
          imageSrc="aboutUs.jpg"
          title="The Story Behind Masondo Real Estates"
          description="With years of experience in the student accommodation sector, Masondo Real Estates has established itself as a leading provider. Our expertise lies in offering students a variety of living options that prioritize safety, comfort, and affordability. We understand the unique needs of students, ensuring each residence meets high standards."
          buttonText="Learn More"
        />
      </main>
    </div>
  );
};

export default Homepage;
