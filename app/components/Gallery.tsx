"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Gallery.module.css";

interface Project {
  imageUrl: string;
  projectName: string;
  subtitle: string;
  description: React.ReactNode;
  technologies: string[];
  githubUrl?: string;
  siteUrl?: string;
  images: string[];
}

interface ProjectsGalleryProps {
  activeTab: string;
}

const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ activeTab }) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const projectData: Project[] = [
    {
      imageUrl:
        "https://res.cloudinary.com/maheshidevelopments/image/upload/v1718835408/portfolio-hero.png",
      projectName: "Find Maheshi",
      subtitle: "Portfolio of Maheshi",
      description:
        "This is my portfolio site I made to showcase my projects! All cartoons and designs are created by me and it is responsive at any screen size!",

      technologies: [
        "Typescript",
        "Next.js",
        "GSAP",
        "Tailwind CSS",
        "DaisyUI",
        "Sass",
      ],
      githubUrl:
        "https://github.com/MashiGitCat/portfolio--Maheshi-Nawarathna.git",
      images: [
        "https://res.cloudinary.com/maheshidevelopments/image/upload/v1719004564/portfolio-01_2.jpg",
        "https://res.cloudinary.com/maheshidevelopments/image/upload/v1719004808/portfolio-02.jpg",
        "https://res.cloudinary.com/maheshidevelopments/image/upload/v1719005045/smartmockups_lxp7555u.jpg",
      ],
    },

    {
      imageUrl:
        "https://res.cloudinary.com/maheshidevelopments/image/upload/c_pad,w_769,h_433,ar_16:9/v1719360864/WonderWriters_B.jpg",
      projectName: "WonderWriters",
      subtitle: "Writing, illustrating and sharing stories",
      description:
        "An application for story writers and illustrators to collaborate with each and make beautiful children stories. My hobby of writing/illustrating drove me to do this project.All the cartoons and Website design is my own! ",

      technologies: [
        "Typescript",
        "React",
        "GSAP",
        "Material UI",
        "Node.js",
        "MongoDB",
        "Sass",
      ],
siteUrl:"https://wonderwriters.onrender.com",
githubUrl:"",
      images: [
        "https://res.cloudinary.com/maheshidevelopments/image/upload/c_fill,w_769,h_433,ar_16:9/v1719189200/wonderwriters-ss-02.png",
        "https://res.cloudinary.com/maheshidevelopments/image/upload/c_fill,w_769,h_433,ar_16:9/v1719189612/wonderwriters-ss-03.png",
        "https://res.cloudinary.com/maheshidevelopments/image/upload/c_crop,w_769,h_433,ar_16:9/v1719191176/ww-ss-07.png",
        "https://res.cloudinary.com/maheshidevelopments/image/upload/c_crop,w_769,h_433,ar_16:9/v1719190202/ww-ss-04.png",
        "https://res.cloudinary.com/maheshidevelopments/image/upload/b_rgb:C2C9D6/c_fill,w_769,h_433,ar_16:9/v1719190305/wonderwriters-04.png",
        "https://res.cloudinary.com/maheshidevelopments/image/upload/c_fill,w_769,h_433,ar_16:9/v1719190534/wonderwriters-03.png",
        "https://res.cloudinary.com/maheshidevelopments/image/upload/c_fill,w_769,h_433,ar_16:9/v1719191188/ww-ss-08.png",

      ],
    },



{
      imageUrl:
        "https://res.cloudinary.com/dchzjr4bz/image/upload/t_the-biggest-shine/v1724111752/the-biggest-shine_idpeiu.png",
      projectName: "The Biggest Shine",
      subtitle: "Animated story",
      description:
       "A story told with pictures and animations & Still in Progress project. GitHub Link is https://github.com/MashiGitCat/The-Biggest-Shine.git",


      technologies: [
        "Javascript",
        "React",
        "GSAP",
        "Material UI",
        "Three.js",
        "Sass",
      ],
siteUrl:"https://thebiggestshine.netlify.app/",
githubUrl:"",
      images: [

      ],
    },


    

    {
      imageUrl:
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704494414/petree-thumbnail_m9loos.png",
      projectName: "Petree",
      subtitle: "Domestic Fruit Trees Subscription",
      description: (
        <span>
          A domestic dwarf fruit tree subscription app allows users to have a
          green companion inside their homes. It sends notifications about
          watering and fertilizer needs. Explore the design on{" "}
          <a
            href="https://www.figma.com/file/12YF4DL0tCUaH1QaJUfLjM/PETREE-SCREENS?type=design&node%20id=0%3A1&mode=design&t=SKFQJgH7Qkqk4bI9-1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectDescriptionLink}
          >
            Figma
          </a>{" "}
          and view the server code on{" "}
          <a
            href="https://github.com/Maheshinav/petree-server.git"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectDescriptionLink}
          >
            GitHub
          </a>
        </span>
      ),
      technologies: ["React", "Node.js", "JavaScript", "MySQL", "JWT"],
      githubUrl: "https://github.com/Maheshinav/PETREE-capstone-maheshi.git",
      images: [
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704494902/petree-1_oki1qs.png",
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704495343/petree-2_jmbfil.png",
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704496387/petree-3_daowiu.png",
      ],
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704567603/bees-knees-thumbnail_wglvjg.png",
      projectName: "Bandsite",
      subtitle: "Bees Knees Band's Site",
      description:
        "Bandsite is the official website of BeesKnees Band, offering tour information, booking options, and a platform for fan comments",

      technologies: ["Javascript", "HTML5", "Axios", "Sass"],
      githubUrl: "https://github.com/MashiGitCat/Bandsite-Transfer.git",
      images: [
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704231516/bandsite-1_y7adxs.png",
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704225496/bees_knees_2_p9pql8.png",
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704055838/1280720_qayjal.png",
      ],
    },

    {
      imageUrl:
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704492900/brainflix-thumbnail_gzxria.png",
      projectName: "Brainflix",
      subtitle: "Video Sharing",
      description: (
        <span>
          A video uploading and commenting platform, akin to YouTube, enabling
          users to share videos and engage through comments.Find the {""}
          <a
            href="https://github.com/Maheshinav/BrainFlix-API.git"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectDescriptionLink}
          >
            {" "}
            API
          </a>{" "}
          here.
        </span>
      ),
      technologies: ["React", "Node.js", "Express", "API Integration", "Axios"],
      githubUrl: "https://github.com/MashiGitCat/BRAINFLIX_TRANSFER.git",
      images: [
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704489141/brainflix2_adwasf.png",
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704488794/brainflix-1_v4yrvw.png",
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704489501/brainflix3_deroft.png",
      ],
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704493676/instock_thumbnail_bkr0wc.png",
      projectName: "Instock",
      subtitle: "Inventory Management System",
      description:
        "An inventory management system developed with CRUD operations",
      technologies: [
        "Node.js",
        "Knex.js & MySQL",
        "Sass",
        "React",
        "Javascript",
      ],
      githubUrl:
        "https://github.com/MashiGitCat/Instock-Brainstation-transfer.git",
      images: [
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704490035/instock_1_cakctp.png",
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704490412/instock_2_b4rn6g.png",
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704490640/instock3_vjvauz.png",
      ],
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704560969/travel-site-thumbnail_sfgjgl.png",
      projectName: "Travel Site",
      subtitle: "Travelling to dream Destinations",
      description:
        "Travelling site shows information about destinations and travel planning",
      technologies: ["HTML", "CSS"],
      githubUrl: "https://github.com/Maheshinav/Travel-Site.git",
      images: [
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704564819/travel-site-2_jil88m.png",
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704565230/travel-site-1_tnjyym.png",
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704565485/travel-site-3_tlvtos.png",
      ],
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704705088/vancity-thumbnail-1_kn36rt.png",
      projectName: "Vancity Cleaning",
      subtitle: "Commercial Cleaning Service",
      description:
        "Website for the Vancity Cleaning, provide booking options and information about the company and services to users",
      technologies: ["WordPress"],
      githubUrl: "",
      siteUrl: "https://vancitycleaningservice.com",
      images: [
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704567061/vancity-2_q5tcjd.png",
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704567359/vancity-4_xsfnec.png",
      ],
    },

    {
      imageUrl:
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704782132/paw-love-thumbnail_jetaqs.png",
      projectName: "PawLove",
      subtitle: "Community Care About Cats",
      description:
        "A platform for cat lovers to share anything they love about cats and make a network to help Cats in crisis",
      technologies: ["Firebase", "React", "JavaScript", "Bootstrap", "Sass"],
      githubUrl: "https://github.com/Maheshinav/Paw-Love.git",
      siteUrl: "",
      images: [
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704781699/pawlove-1_ahebz6.png",
        "https://res.cloudinary.com/dchzjr4bz/image/upload/v1704783730/paw-love-2_jetfzs.png",
      ],
    },
  ];

  useEffect(() => {
    setActiveCardIndex(null);
  }, [activeTab]);

  const filteredProjects = projectData.filter((project) => {
    if (activeTab === "ALL") return true;
    if (activeTab === "FREELANCE") {
      return (
        project.projectName === "PawLove" || project.projectName === "LYROCAT"
      );
    }
    if (activeTab === "IN_PROGRESS") {
      return project.projectName === "The Biggest Shine";
    }
    return false;

  const handleCardClick = (index: number) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  return (
    <div>
      <div className={styles.projectsGallery}>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl || ""} // Provide a default value
            siteUrl={project.siteUrl || ""}
            projectName={project.projectName}
            subtitle={project.subtitle}
            description={project.description}
            technologies={project.technologies}
            images={project.images}
            index={index}
            isActive={index === activeCardIndex}
            onCardClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsGallery;
