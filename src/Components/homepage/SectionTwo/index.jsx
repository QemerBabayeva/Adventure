import React, { useState } from 'react';
import Image1 from "../../../assets/Images/image1.jpg";
import Image2 from "../../../assets/Images/image2.jpg";
import Image3 from "../../../assets/Images/image3.jpg";
import Image4 from "../../../assets/Images/image4.jpg";
import Image5 from "../../../assets/Images/image5.jpg";
import Box from './box';

const SectionTwo = () => {


    const boxData=[
        { 
         id:1,
         img: Image1,
         text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        { 
            id:2,
            img: Image2,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
           },
           { 
            id:3,
            img: Image3,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
           },
           { 
            id:4,
            img: Image4,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

           },
           { 
            id:5,
            img: Image5,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
           },
];

return <div className='flex flex-wrap items-center justify-center gap-5 px-8 py-4'>
    {boxData?.map(box =>(
    <Box id={box?.id} key={box?.id} image={box.img} text={box.text}/>
))}</div>

}

export default SectionTwo;