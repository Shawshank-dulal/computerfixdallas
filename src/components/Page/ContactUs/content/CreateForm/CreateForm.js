"use client"
import { useState } from 'react';

export default function CreateForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      data: {
        title,
        content,
      },
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/formdatas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`, // If you have an API token
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Failed to create post');
      }

      const responseData = await res.json();
      console.log('Post created successfully:', responseData);
      setSuccess(true);
    } catch (error) {
      setError(error.message);
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <h1>Create a Blog Post</h1>

      {error && <p>Error: {error}</p>}
      {success && <p>Post created successfully!</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
