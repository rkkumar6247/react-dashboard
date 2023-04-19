import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar" id="sidebar-menu">
      <a className="menu-item" href='#'>
        <div className="icon">
          <i className="fa-solid fa-house" />
        </div>
        <div className="menu-name">
          <span>Dashboard</span>
        </div>
      </a>
      <a className="menu-item" href='#'>
        <div className="icon">
          <i className="fa-solid fa-thumbtack" />
        </div>
        <div className="menu-name">
          <span>Stake</span>
        </div>
      </a>
      <a className="menu-item" href='#'>
        <div className="icon">
          <i className="fa fa-table" />
        </div>
        <div className="menu-name">
          <span>Band</span>
        </div>
      </a>
      <a className="menu-item" href='#'>
        <div className="icon">
          <i className="fa fa-calculator" />
        </div>
        <div className="menu-name">
          <span>Calculator</span>
        </div>
      </a>
      <a className="menu-item" href='#'>
        <div className="icon">
          <i className="fa-solid fa-fire" />
        </div>
        <div className="menu-name">
          <span>Vaults</span>
        </div>
      </a>
      <a className="menu-item" href='#'>
        <div className="icon">
          <i className="fa-solid fa-chart-line" />
        </div>
        <div className="menu-name">
          <span>Leverage</span>
        </div>
      </a>
      <a className="menu-item" href='#'>
        <div className="icon">
          <i className="fa-solid fa-bolt" />
        </div>
        <div className="menu-name">
          <span>Flash Mint</span>
        </div>
      </a>
      <a className="menu-item" href='#'>
        <div className="icon">
          <i className="fa-solid fa-file" />
        </div>
        <div className="menu-name">
          <span>Docs</span>
        </div>
      </a>
      <a className="menu-item" href='#'>
        <div className="icon">
          <i className="fa-solid fa-right-from-bracket" />
        </div>
        <div className="menu-name">
          <span>Logout</span>
        </div>
      </a>
    </div>
  )
}

export default Sidebar
