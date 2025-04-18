import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../../store/reducers/postsSlice';
import './SocialCard.css';

const SocialCard = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // ✅ Ensure posts is an array
  if (!Array.isArray(posts)) {
    return <div>No posts to show.</div>;
  }

  return (
    <div className="card-container">
      {posts.map((post) => (
        <div key={post.id} className="card">
          {/* Use post.id to generate a unique image */}
          <img
            src={`https://picsum.photos/seed/${post.id}/400/300`}
            alt="Card"
            className="card-image"
          />
          <div className="card-content">
            <p className="user-id">User ID: {post.userId}</p>
            <p className="title">Title: {post.title}</p>
            <p className="body">
              Body: {post.body}
              <br />
              Read More...
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialCard;
