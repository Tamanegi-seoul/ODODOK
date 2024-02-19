import React, { useRef, useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

const EditorComponent = () => {
  const editorInstance = useRef(null);

  useEffect(() => {
    editorInstance.current = new EditorJS({
      holder: 'editorjs',
      tools: {
        header: Header,
        list: List,
        // Add other tools here if needed
      },
      // Other Editor.js configuration options can go here
    });

    return () => {
      if (editorInstance.current) {
        editorInstance.current.destroy();
        editorInstance.current = null;
      }
    };
  }, []);

  return <div id="editorjs"></div>;
};

export default EditorComponent;