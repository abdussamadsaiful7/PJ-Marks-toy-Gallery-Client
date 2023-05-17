import React from 'react';

const Blog = () => {
    return (

        <div className='bg-gray-200 p-1 rounded-md my-10'>
            <div className='lg:mx-10 mx-5 my-10 bg-white py-4 px-6 shadow-xl'>
                <h1 className='text-center text-5xl font-bold my-5'>Theory Section</h1>
                <div>
                    <h1 className='text-3xl'><span className='text-red-500'>Question:</span> (1) What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    <p className='text-xl my-4 text-gray-500'><span className='text-green-600'>Answer:</span> Access tokens are used in token-based authentication to allow an application to access an API Access tokens are short-lived and typically stored in memory or a short-lived storage mechanism, such as a browser's sessionStorage or a mobile app's memory. <br /> and Refresh token is used to generate a new access token. Typically, if the access token has an expiration date, once it expires, the user would have to authenticate again to obtain an access token. The recommended approach is to store refresh tokens in a secure HTTP-only cookie, which provides protection against XSS attacks.</p>
                </div>
                <div className='mt-10'>
                    <h1 className='text-3xl'><span className='text-red-500'>Question:</span> (2) Compare SQL and NoSQL databases?</h1>
                    <p className='text-xl my-4 text-gray-500'><span className='text-green-600'>Answer:</span></p>
                    <div className="text-gray-500 text-lg">
                        <table className='lg:mx-auto'>
                            {/* head*/}
                            <thead className=''>
                                <tr>
                                    <th className='lg:pr-96'>SQL</th>
                                    <th>NoSQL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className='lg:mr-96'>
                                    <td>
                                        <p>1. Relational Database Management system (RDBMS).</p>
                                        <p>2. These databases have fixed or static or predefined schema.</p>
                                        <p>3. These databases are not suited for hierarchical data storage.</p>
                                        <p>4. Vertically Scalable</p>
                                    </td>
                                    <td>
                                        <p>1. Non-relational or distributed database system.</p>
                                        <p>2. They have a dynamic schema.</p>
                                        <p>3. These databases are best suited for hierarchical data storage.</p>
                                        <p>4. Horizontally scalable</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='mt-10'>
                    <h1 className='text-3xl'><span className='text-red-500'>Question:</span> (3) What is express js
                        and Nest JS? </h1>
                    <p className='text-xl my-4 text-gray-500'><span className='text-green-600'>Answer:</span>
                        Express js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. <br /> and Nest js is a framework that helps build Node.JS server-side applications. The Nest framework is built using TypeScript which allows developers to build highly scalable and testable applications.  </p>
                </div>
                <div className='mt-10'>
                    <h1 className='text-3xl'><span className='text-red-500'>Question:</span> (4) What is MongoDB aggregate and how does it work?</h1>
                    <p className='text-xl my-4 text-gray-500'><span className='text-green-600'>Answer:</span>
                        Aggregate is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                        <br /> Aggregation in MongoDB is responsible for processing the data, which results in the calculated outputs, generally by assembling the data from several documents and then executes in various ways on those assembled data in order to yield one collective result. It practices documents and then yield computed outputs and thus execute a range of operations on the assembled data to return only one result.</p>
                </div>
            </div>
        </div>

    );
};

export default Blog;