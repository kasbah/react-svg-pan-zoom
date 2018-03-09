import React from 'react';
import Readme from '../../README.md';

let html = Readme
  .replace(/<!-- START_NO_WEB:1 -->[\w\W]*<!-- END_NO_WEB:1 -->/, '')
  .replace(/<!-- START_NO_WEB:2 -->[\w\W]*<!-- END_NO_WEB:2 -->/, '')
  .replace(/\.\//g, 'https://github.com/chrvadala/react-svg-pan-zoom/tree/master/')
  .replace(/<a/g, '<a target="_blank" ');

export default function Welcome(){

  return (
    <div style={{background: "#fff", padding: "1rem 2rem"}} className="markdown-body">
      <div dangerouslySetInnerHTML={{__html: html}}/>
    </div>
  )
}


