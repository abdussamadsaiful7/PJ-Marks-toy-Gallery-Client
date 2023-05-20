import React from 'react';
import about from '../../assets/about.jpg'
import shop1 from '../../assets/car/shop1.jpg'
import shop2 from '../../assets/car/shop2.png'
import shop3 from '../../assets/car/shop3.jpg'

const About = () => {
    return (
        <div>
            <h1 className='text-2xl font-extrabold text-center my-10'>ABOUT US</h1>
            <img className='w-1/2 h-96 mx-auto mb-10' src={about} alt="" />
            <div className='md:mx-20'>
                <p className='mb-4 font-extrabold'>Welcome to PJMARKS GALLERY - Your Ultimate Destination for Toy Cars in Dhaka, Bangladesh!</p>

                <p>  At PJMARKS GALLERY, we are passionate about providing a world of joy and excitement to children and collectors alike. As the premier toy store specializing in cars, we offer an extensive range of high-quality toy cars, replicas, and collectibles that cater to enthusiasts of all ages.
                    <br />
                    Established in 1992, PJMARKS GALLERY has been serving the Dhaka community for several years, bringing smiles to the faces of countless children and car enthusiasts. Our commitment to exceptional customer service and a vast selection of products sets us apart from other toy stores in the city.</p>
                <p>Why Choose Us?</p>
                <p>1. Wide Range of Products: We pride ourselves on offering an extensive collection of toy cars, featuring popular brands, iconic models, and limited editions. Whether you're looking for die-cast models, remote-controlled cars, or miniature replicas, we have something to suit every taste and budget.</p>
                <p>2. Quality and Authenticity: We understand the importance of authenticity when it comes to collectibles. That's why we source our products from trusted manufacturers and distributors, ensuring that every toy car in our store meets the highest standards of quality.</p>
                <p>3. Knowledgeable Staff: Our dedicated team of toy enthusiasts is always ready to assist you in finding the perfect toy car or provide recommendations based on your preferences. We are passionate about cars and toys, and we love sharing our knowledge and expertise with our customers.</p>
                <p>4. Customer Satisfaction: Your satisfaction is our top priority. We strive to create a pleasant and enjoyable shopping experience for every customer, offering friendly service, competitive prices, and hassle-free returns and exchanges.</p>
                <p>5. Community Involvement: PJMARKS GALLERY believes in giving back to the community. We actively participate in local events, support charitable initiatives, and collaborate with schools and organizations to spread joy among children who share our passion for toy cars.</p>
                <p className='text-xl font-extrabold mt-14 mb-4'>Visit Us Today!</p>
                <p>Come and experience the world of toy cars at PJMARKS GALLERY. Located in the heart of Dhaka, our store offers a captivating environment where you can explore, discover, and indulge in your love for cars. Whether you're a collector, a parent looking for the perfect gift, or simply seeking a nostalgic trip down memory lane, we have everything you need to fuel your imagination.</p>
                <p className='my-10'>Thank you for choosing PJMARKS GALLERY. We look forward to serving you and being a part of your journey into the world of toy cars!</p>
            </div>
            <div className=' my-10'>
                <h1 className='text-center text-xl font-bold mb-6 mt-10'>Our famous branch in Bangladesh </h1>
                <div className='grid lg:grid-cols-3 gap-6 lg:mx-20 mx-6'>
                    <div className='shadow-lg mx-auto p-4' data-aos="fade-right">
                        <img className='w-64 h-52' src={shop1} alt="" />
                        <h1>PJMARKS GALLERY, Gulshan.</h1>
                        <p> House 34, Road 134, Gulshan Avenue, <br/> Dhaka 1212, Bangladesh.</p>
                    </div>
                    <div className='shadow-lg mx-auto p-4'>
                        <img className='w-64 h-52' src={shop2} alt="" />
                        <h1>PJMARKS GALLERY, Dhanmondi.</h1>
                        <p>House 34, Road 27, Dhanmondi R/A, <br/> Dhaka 1209, Bangladesh.</p>
                    </div>
                    <div className='shadow-lg mx-auto p-4' data-aos="fade-left">
                        <img className='w-64 h-52' src={shop3} alt="" />
                        <h1>PJMARKS GALLERY Banani.</h1>
                        <p>House 11, Road 11, Block F, Banani, <br/> Dhaka 1213, Bangladesh.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;