import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const storiesData = [
    // Add your stories data here
    { id: 1, name: 'Story 1', imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 2, name: 'Story 2', imageUrl: "https://images.unsplash.com/photo-1682686580950-960d1d513532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60" },
    { id: 3, name: 'Story 3', imageUrl: "https://images.unsplash.com/photo-1695567034270-3f30aaf05df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" },
    {
        id: 4, name: 'Story 4', imageUrl: "https://plus.unsplash.com/premium_photo-1695635984457-a6010a4bec28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        id: 5, name: 'Story 5', imageUrl: "https://plus.unsplash.com/premium_photo-1695635984457-a6010a4bec28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        id: 6, name: 'Story 6', imageUrl: "https://images.unsplash.com/photo-1695504236952-37306fc71896?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        id: 7, name: 'Story 7', imageUrl: "https://images.unsplash.com/photo-1695606392809-0da228da6b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        id: 8, name: 'Story 8', imageUrl: "https://images.unsplash.com/photo-1695408248582-0c122bf0f9e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
    },
    {
        id: 9, name: 'Story 9', imageUrl: "https://images.unsplash.com/photo-1695266392730-8867f816c817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
    },
    {
        id: 10, name: 'Story 10', imageUrl: "https://images.unsplash.com/photo-1694594594401-82aa8102535b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
    },
    {
        id: 5, name: 'Story 5', imageUrl: "https://plus.unsplash.com/premium_photo-1695635984457-a6010a4bec28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        id: 6, name: 'Story 6', imageUrl: "https://images.unsplash.com/photo-1695504236952-37306fc71896?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        id: 7, name: 'Story 7', imageUrl: "https://images.unsplash.com/photo-1695606392809-0da228da6b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        id: 8, name: 'Story 8', imageUrl: "https://images.unsplash.com/photo-1695408248582-0c122bf0f9e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
    },
    {
        id: 9, name: 'Story 9', imageUrl: "https://images.unsplash.com/photo-1695266392730-8867f816c817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
    },
    {
        id: 10, name: 'Story 10', imageUrl: "https://images.unsplash.com/photo-1694594594401-82aa8102535b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
    }
];

export const Stories = () => {


    let settings = {
        dots: false,
        infinite: false,
        speed: 150,
        slidesToShow: 8,
        slidesToScroll: 2,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },

        ],


    };




    return (
        <div className="w-full">
            <Slider {...settings}>
                {
                    storiesData.map(story => (
                        <Story story={story} />
                    ))
                }
            </Slider>
        </div>
    );
};

export default Stories;

const Story = ({ story }) => {

    return (
        <div className="flex flex-col items-center p-2">
            <div
                className="w-16 h-16 rounded-full p-1"
                style={{
                    background: 'linear-gradient(to right, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                }}
            >
                <img
                    src={story.imageUrl}
                    alt={story.name}
                    className="w-full h-full rounded-full object-cover"
                />
            </div>

            <span className="text-xs mt-1">{story.name}</span>
        </div>
    );


};