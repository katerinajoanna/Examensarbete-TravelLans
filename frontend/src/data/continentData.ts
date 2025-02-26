import canion from '../assets/images/Canyonlands-National-Park-Utah.jpg';
import jakies from '../assets/images/zhangjiajie-d485479.jpg';
import niagara from '../assets/images/Niagara-cud-natury-w-nocy-.jpg';
import AfricaVideo from '../assets/videos/afrykaVideo.mp4';
import NorthVideo from '../assets/videos/ampnVideo.mp4';
import SouthVideo from '../assets/videos/ampndVideo.mp4';
import AsiaVideo from '../assets/videos/azjaVideo.mp4';
import EuropeVideo from '../assets/videos/europaVideo.mp4';
import OceaniaVideo from '../assets/videos/australiaVideo.mp4';

export const continentData: Record<string, {
    //indeksacja data
    name: string;
    description: string;
    video: string;
    places: {
        id: number;
        title: string;
        country: string;
        category: string;
        image: string;
        description: string;
        linkInfo: string;
    }[];
}> =
{
    africa: {
        name: "Africa",
        description: "Discover the amazing nature of Africa",
        video: AfricaVideo,   // potem url z S3
        places: [
            {
                id: 1,
                title: "Victoria Falls",
                country: "Zimbabwe",
                category: "Waterfall",
                image: canion,
                description: "One of the largest and most famous waterfalls in the world.",
                linkInfo: "https://pl.wikipedia.org/wiki/Andy ",
            },
            {
                id: 2,
                title: "Sahara Desert",
                country: "Morocco",
                category: "Desert",
                image: jakies,
                description: "The largest hot desert in the world. The largest hot desert in the world. The largest hot desert in the world. The largest hot desert in the world. The largest hot desert in the world.The largest hot desert in the world.",
                linkInfo: "https://pl.wikipedia.org/wiki/Andy ",
            },
        ],
    },
    asia: {
        name: "Asia",
        description: "Discover the amazing nature of Asia.",
        video: AsiaVideo,
        places: [
            {
                id: 3,
                title: "Mount Fuji",
                country: "Japan",
                category: "Mountain",
                image: niagara,
                description: "Japan’s highest and most iconic mountain.",
                linkInfo: "https://pl.wikipedia.org/wiki/Andy ",
            },
            {
                id: 4,
                title: "Ha Long Bay",
                country: "Vietnam",
                category: "Bay",
                image: jakies,
                description: "A UNESCO World Heritage Site known for its limestone islands. A UNESCO World Heritage Site known for its limestone islands. A UNESCO World Heritage Site known for its limestone islands. A UNESCO World Heritage Site known for its limestone islands. A UNESCO World Heritage Site known for its limestone islands.",
                linkInfo: "https://pl.wikipedia.org/wiki/Andy ",
            },
            {
                id: 5,
                title: "Mount Fuji",
                country: "Japan",
                category: "Mountain",
                image: canion,
                description: "Japan’s highest and most iconic mountain.",
                linkInfo: "https://pl.wikipedia.org/wiki/Andy ",
            },
            {
                id: 4,
                title: "Ha Long Bay",
                country: "Vietnam",
                category: "Bay",
                image: jakies,
                description: "A UNESCO World Heritage Site known for its limestone islands. A UNESCO World Heritage Site known for its limestone islands.A UNESCO World Heritage Site known for its limestone islands.",
                linkInfo: "https://pl.wikipedia.org/wiki/Andy ",
            },
            {
                id: 7,
                title: "Mount Fuji",
                country: "Japan",
                category: "Mountain",
                image: canion,
                description: "Japan’s highest and most iconic mountain.",
                linkInfo: "https://pl.wikipedia.org/wiki/Andy ",
            },
            {
                id: 8,
                title: "Ha Long Bay",
                country: "Vietnam",
                category: "Bay",
                image: niagara,
                description: "A UNESCO World Heritage Site known for its limestone islands.",
                linkInfo: "https://pl.wikipedia.org/wiki/Andy ",
            },
        ],
    },

    europe: {
        name: "Europe",
        description: "Discover the amazing nature of Europe.",
        video: EuropeVideo,
        places: [
            {
                id: 9,
                title: "Mount Fuji",
                country: "Japan",
                category: "Mountain",
                image: niagara,
                description: "Japan’s highest and most iconic mountain.",
                linkInfo: "https://pl.wikipedia.org/wiki/Andy ",
            },
            {
                id: 10,
                title: "Ha Long Bay",
                country: "Vietnam",
                category: "Bay",
                image: jakies,
                description: "A UNESCO World Heritage Site known for its limestone islands. A UNESCO World Heritage Site known for its limestone islands. A UNESCO World Heritage Site known for its limestone islands. A UNESCO World Heritage Site known for its limestone islands. A UNESCO World Heritage Site known for its limestone islands.",
                linkInfo: "https://pl.wikipedia.org/wiki/Andy ",
            },
            {
                id: 11,
                title: "Mount Fuji",
                country: "Japan",
                category: "Mountain",
                image: canion,
                description: "Japan’s highest and most iconic mountain.",
                linkInfo: "https://pl.wikipedia.org/wiki/Andy ",
            },
            {
                id: 12,
                title: "Ha Long Bay",
                country: "Vietnam",
                category: "Bay",
                image: jakies,
                description: "A UNESCO World Heritage Site known for its limestone islands. A UNESCO World Heritage Site known for its limestone islands.A UNESCO World Heritage Site known for its limestone islands.",
                linkInfo: "https://pl.wikipedia.org/wiki/Andy ",
            },

        ],
    },

    oceania: {
        name: "Oceania",
        description: "Explore the stunning landscapes of Oceania.",
        video: OceaniaVideo,
        places: [
            {
                id: 13,
                title: "Victoria Falls",
                country: "Zimbabwe",
                category: "Waterfall",
                image: niagara,
                description: "One of the largest and most famous waterfalls in the world.",
                linkInfo: "https://pl.wikipedia.org/wiki/Andy ",
            },
            {
                id: 14,
                title: "Sahara Desert",
                country: "Morocco",
                category: "Desert",
                image: jakies,
                description: "The largest hot desert in the world.",
                linkInfo: "https://pl.wikipedia.org/wiki/Andy ",
            },
        ],
    },
    northamerica: {
        name: "North America",
        description: "Explore the stunning landscapes of North America.",
        video: NorthVideo,
        places: [
            {
                id: 15,
                title: "Victoria Falls",
                country: "Zimbabwe",
                category: "Waterfall",
                image: niagara,
                description: "One of the largest and most famous waterfalls in the world.",
                linkInfo: "https://pl.wikipedia.org/wiki/Andy ",
            },
            {
                id: 16,
                title: "Sahara Desert",
                country: "Morocco",
                category: "Desert",
                image: jakies,
                description: "The largest hot desert in the world.",
                linkInfo: "https://pl.wikipedia.org/wiki/Andy ",
            },
        ],
    },
    southamerica: {
        name: "South America",
        description: "Explore the stunning landscapes of South America.",
        video: SouthVideo,
        places: [
            {
                id: 17,
                title: "Victoria Falls",
                country: "Zimbabwe",
                category: "Waterfall",
                image: niagara,
                description: "One of the largest and most famous waterfalls in the world.",
                linkInfo: "https://pl.wikipedia.org/wiki/Andy ",
            },
            {
                id: 18,
                title: "Sahara Desert",
                country: "Morocco",
                category: "Desert",
                image: jakies,
                description: "The largest hot desert in the world.",
                linkInfo: "https://pl.wikipedia.org/wiki/Andy ",
            },
        ],
    },
};