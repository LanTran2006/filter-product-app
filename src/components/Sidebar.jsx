import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar">
  
  <div className="top-sellers">
    <h3>Top Sellers</h3>
    <ul>
      <li>
        <img src="https://via.placeholder.com/40" alt="Lucas Price" />
        <span>Lucas Price</span>
        <button>Follow</button>
      </li>
      <li>
        <img src="https://via.placeholder.com/40" alt="Lydia Nguyen" />
        <span>Lydia Nguyen</span>
        <button>Follow</button>
      </li>
      <li>
        <img src="https://via.placeholder.com/40" alt="Abitha Dhamdhame" />
        <span>Abitha Dhamdhame</span>
        <button>Follow</button>
      </li>
      <li>
        <img src="https://via.placeholder.com/40" alt="Fabien Rey" />
        <span>Fabien Rey</span>
        <button>Follow</button>
      </li>
      <li>
        <img src="https://via.placeholder.com/40" alt="Janet Collins" />
        <span>Janet Collins</span>
        <button>Follow</button>
      </li>
    </ul>
  </div>

  
  <div className="popular-blogs">
    <h3>Popular Blogs</h3>
    <ul>
      <li>
        <h4>My Amazing Blog Title 1</h4>
        <p>Publish by Jordan</p>
        <div className="stats">
          <span>💬 142</span>
          <span>👍 44</span>
        </div>
      </li>
      <li>
        <h4>My Amazing Blog Title 2</h4>
        <p>Publish by John</p>
        <div className="stats">
          <span>💬 153</span>
          <span>👍 25</span>
        </div>
      </li>
      <li>
        <h4>My Amazing Blog Title 4</h4>
        <p>Publish by HuXn</p>
        <div className="stats">
          <span>💬 50</span>
          <span>👍 14</span>
        </div>
      </li>
    </ul>
  </div>
</div>

  )
}

export default Sidebar