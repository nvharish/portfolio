# N V Harish - Online Portfolio

Welcome to my personal portfolio website. This project showcases my skills, experience, and the projects I've worked on. The website is built to highlight my expertise as a Full Stack Developer and serves as a point of contact for potential employers and collaborators.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)
- [Contact](#contact)

## Features

- **Responsive Design**: Adapts seamlessly to different screen sizes (desktop, tablet, mobile).
- **Projects Section**: Showcases various projects, complete with descriptions, technologies used, and links to GitHub repositories.
- **Skills Section**: Highlights key technical skills, programming languages, and frameworks.
- **Contact Form**: Allows users to send direct inquiries via a contact form.
- **Blog Integration**: Includes a blog to share insights and articles related to web development and technology.

## Technologies

- **Frontend**:

  - HTML5
  - CSS3
  - JavaScript (ES6+)
  - React.js
  - Bootstrap

- **Backend**:

  - Node.js
  - Express.js

- **Storage**:

  - File System (For storing contact form submissions)

- **Deployment**:
  - AWS (Amazon Web Services)

## For local development and testing

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nvharish/portfolio.git
   cd portfolio
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run start
   ```
4. **Run the test cases**:
   ```bash
   npm run test
   ```

## Usage

The portfolio website is live and can be accessed at: [https://nvharish.com](https://nvharish.com).

You can explore the following sections:

- **Home**: A brief introduction to who I am and what I do.
- **Experience**: Details about my professional experience, roles, and accomplishments.
- **Projects**: A collection of my featured work, including links to live demos and GitHub repositories.
- **Skills**: A list of technical skills, programming languages, and tools I use regularly.
- **Contact**: A form where you can send me messages or inquiries directly.

## Project Structure

The project directory is organized as follows:

```plaintext
portfolio/
│
├── src/
│   ├── components/         # React components
│   │   ├── App.js
│   │   └── Header.js
│   │
│   ├── views/              # Server-side views (React entry point for SSR)
│   │   └── index.js        # Renders React app to string and injects into HTML
│   │
│   ├── server/             # Server-side code (Express.js)
│   │   ├── index.js        # Main entry point for the Express server
│   │   └── routes.js       # Express routes
│   │
│   ├── public/             # Public assets (static files like images, CSS)
│   │   ├── css/
│   │   └── js/
│   │
│   └── utils/              # Utility functions (e.g., error handling, data fetching)
│       └── fetchData.js
│
├── build/                  # Bundled static files for production
│
├── node_modules/           # Node.js packages
│
├── .babelrc                # Babel configuration
├── webpack.config.js       # Webpack configuration (for bundling assets)
├── package.json            # Package dependencies
└── README.md               # Documentation
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to use, modify, and distribute this project under the terms of the MIT License. The software is provided "as is," without warranty of any kind, express or implied. For more information, refer to the full text of the MIT License in the `LICENSE` file.

## Contact

If you have any questions, suggestions, or would like to discuss potential collaborations, feel free to reach out to me through the following channels:

- **Email**: [nv.harish@outlook.com](mailto:nv.harish@outlook.com)
- **LinkedIn**: [linkedin.com/in/nvharish](https://www.linkedin.com/in/nvharish)
- **GitHub**: [github.com/nvharish](https://github.com/nvharish)
- **Portfolio Website**: [https://nvharish.com](https://nvharish.com)

I look forward to connecting with you!
