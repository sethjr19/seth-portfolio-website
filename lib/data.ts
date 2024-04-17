import glipzImg from '@/public/glipz.png'
import { describe } from 'node:test';
import { title } from 'process';
import { LuGraduationCap, LuSchool  } from "react-icons/lu";
import { FaUniversity } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import React from 'react';

export const links = [
    {
        name:'Home',
        hash: '#home',
    },
    {
        name:'Skills',
        hash: '#skills',
    },
    {
        name:'Projects',
        hash: '#projects',
    },
    {
        name:'Experience',
        hash: '#experience',
    },
    {
        name:'Contact',
        hash: '#contacts',
    }
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Node.JS",
] as const; 

export const experienceData = [
    {
        title:'Graduated A-Levels',
        location: 'International School @ ParkCity',
        description: 'A*AA in Maths, Physics, Biology',
        icon: React.createElement(LuSchool),
        date: '2019'
    },
    {
        title:'Graduated University',
        location: 'Loughborough University, United Kingdom',
        description: '2nd Upper Honors Class in BSC Computer Science',
        icon: React.createElement(FaUniversity),
        date: '2023'
    },
    {
        title:'Junior Front-end Developer',
        location: 'Crave Asia',
        description:'First official job out of University',
        icon: React.createElement(FaComputer),
        date: '2024'
    }
] as const; 

export const projectsData = [
    {
        title: 'Glipz',
        description: 'Fully functioning Social Media Prototype',
        tags: ['React','Firebase'],
        imageURL: glipzImg
    },
    {
        title: 'Ghibli',
        description: 'Beautiful Scrolling Website Commemorating Studio Ghibli',
        tags: ['Javascript','Framer-motion','CSS'],
        imageURL: glipzImg
    },
    {
        title: 'Project 2',
        description: 'Just a placeholder for a better project',
        tags: ['React','MongoDB', 'Node.JS', 'Express.JS'],
        imageURL: glipzImg
    }
] as const;