<a href="https://ibb.co/jGmmkyM"><img src="https://i.ibb.co/vmpp43P/pexels-lucie-liz-mazel-banner.jpg" alt="pexels-lucie-liz-mazel-banner" border="0"></a>
# Mazel App
---
Mazel is a web application that allows users to upload and share their favorite recipes, as well as comment on and search for other users' recipes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Installation

To install the Recipe Application, follow these steps:

1. Clone the respository

`git clone https://github.com/dabble362/Mazel.git`

2. Install dependencies:

`cd Mazel`
`npm install`

3. Create a `.env` file in config folder and add the following as `key = value`

  - PORT = 2121 (can be any port)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

4. Start the server:

`npm start`


## Usage

To use Mazel, follow these steps:

1. Open your web browser and go to `http://localhost:2121` (or whatever port you chose).
2. Sign up or log in to your account.
3. Explore the app by uploading your favorite recipes, commenting on other users' recipes, and searching for recipes by ingredient or name.

## Features

The Recipe Application includes the following features:

- **Upload recipes:** Users can upload their favorite recipes, including ingredients, directions, image, and more.
- **Log in authentication:** Users can create an account and log in to access their uploaded recipes and leave comments on other users' recipes.
- **Comments on recipes:** Users can leave comments on other users' recipes, sharing their thoughts or asking questions.
- **Search implementation:** Users can search for recipes by ingredient or name, making it easy to find new recipes to try.


## License

Mazel is licensed under the [MIT License](LICENSE).

