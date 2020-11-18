import React from 'react';
import './PageTitle.scss';

export default function PageTitle ({icon, title, tag}) {

  return (
    <div page="title">
      <div>
        <div title="icon">
          <img src={icon.src} />
        </div>
        <span>{title}</span>
      </div>
      <div title="tag">
        <span color={tag.color||"blue"}>{tag.label}</span>
      </div>
    </div>
  )
}