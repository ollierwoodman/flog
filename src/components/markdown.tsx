"use client";
import { useEffect, useState } from 'react';
import { remark } from 'remark';
import html from 'remark-html';

const Markdown = ({ filePath, className }: { filePath: string, className: string }) => {
  const [mdString, setMdString] = useState('');

  useEffect(() => {
    fetch(filePath)
      .then((res) => res.text())
      .then((text) => {
        setMdString(text);
      })
      .catch((err) => console.log(err));
  }, [filePath]);

  const processed = remark()
    .use(html)
    .processSync(mdString);
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: processed.toString() }} />
  );
};

export default Markdown;