import { useEffect, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import axios from '../api/axios';
import { toast } from 'react-toastify';

const BlogEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');  // Added author state

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // base64 image
    };
    reader.readAsDataURL(file);
  };

  const saveDraft = async () => {
    try {
      await axios.post('/save-draft', {
        title,
        content,
        tags: tags.split(','),
        image,
        author,  // Added author to draft
      });
      toast.success('Auto-saved draft');
    } catch (err) {
      toast.error('Failed to auto-save');
    }
  };

  const debouncedSave = useCallback(debounce(saveDraft, 5000), [title, content, tags, image, author]);

  useEffect(() => {
    if (title || content || tags || image || author) debouncedSave();
    return debouncedSave.cancel;
  }, [title, content, tags, image, author, debouncedSave]);

  return (
    <div className="container mt-4">
      <h2>Blog Editor</h2>
      <input
        type="text"
        className="form-control my-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="form-control my-2"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="text"
        className="form-control my-2"
        placeholder="Tags (comma-separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <input
        type="text"
        className="form-control my-2"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}  // Bind author input
      />

      <input type="file" className="form-control my-2" onChange={handleImageChange} />
      {image && <img src={image} alt="Preview" style={{ maxWidth: '150px' }} className="mb-3" />}

      <div className="d-flex gap-2">
        <button className="btn btn-secondary" onClick={saveDraft}>Save as Draft</button>
        <button
          className="btn btn-primary"
          onClick={async () => {
            await axios.post('/publish', {
              title,
              content,
              tags: tags.split(','),
              image,
              author,  // Add author to published blog
            });
            toast.success('Blog published');
          }}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default BlogEditor;
