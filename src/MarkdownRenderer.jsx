import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownRenderer = ({ url }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!url) return;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch markdown');
        return res.text();
      })
      .then(setContent)
      .catch(console.error);
  }, [url]);

  return (
    <div className="prose max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
