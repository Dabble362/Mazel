![preview-image](https://github.com/Dabble362/Mazel/blob/master/salmonravioli.png)

<p> A place to create, save, and talk about the recipies you love. </p>

<h3>Built Using</h3>

<p>
<img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" style="max-width: 100%;">
<img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
<img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white">
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">
</p>
<p>
Used Figma to draw up initial design and Miro to visualize the flow and models used.  The JavaScript started with a solid API framework with authentication. 
MongoDB is being used here as the database. Cloudinary to handle the images. My first jump into TailwindCSS and I'm a fan.  Heroku to host the lovely thing.
</p>

<p>Check it out here: <a href="https://mazel.herokuapp.com/">Mazel</a></p>

<h2>Things to add:</h2>
<ul>
  <li>Search Functionality</li>
  <li>Recipe cards for neatness</li>
  </ul>
  
  <h2>Known issues:</h2>
<ul>
  <li>You can favorite more than once</li>
  <li>Search bar isn't up to par</li>
  </ul>

<h2>How to get it up and running</h2>

`npm install`

---



- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

# Run

`npm start`
