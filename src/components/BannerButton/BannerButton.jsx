import React from 'react'
import "./BannerButton.css"
import { PlayCircleFilled } from '@ant-design/icons';
export default function BannerButton() {
  return (
    <div>
      <button className='btn btn-outline-light banner-button'>
        <span className='button-content'>
          <PlayCircleFilled />
          <span className='pl-2'>
            How Fiverr Works
          </span>
        </span>
      </button>
    </div>
  )
}
