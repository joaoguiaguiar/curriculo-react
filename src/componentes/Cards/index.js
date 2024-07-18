import React from 'react';
import './Cards.css';
import posts from '../../json/posts.json'; 
import PostCard from './PostCard';

const Cards = () => {
    return (
        <section className='section__cards'>
            <div className='container'>
                <h2>Repertórios</h2>
                <p> Clique sobre os banners abaixo</p>
                <div className='row container__cards'>
                    {posts.map((post) => (
                        <div key={post.id} className='col-md-4 mb-4 g-4'>
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </div>

        </section>

    );
}

export default Cards;
