*https://gitto-io.vercel.app/*

# Project Structure

- src/components: Contains React components used throughout the application.
- src/store: Contains Zustand store configuration and state management related files.
- src/utils: Contains helper functions used across the application, such as data formatting, calculations, etc.
- src/api: Contains modules for making API calls to GitHub using Octokit.

## To set up the repository gitto.io for development, follow these instructions:

Prerequisites
Node.js and npm: Make sure you have Node.js and npm installed on your machine. You can download and install them from the official website.
Steps
Clone the Repository: Clone the gitto.io repository to your local machine using Git.

`git clone https://github.com/Sakshamkapur/gitto.io.git`
Navigate to the Project Directory: Go to the directory where the repository was cloned.

`cd gitto.io`
Install Dependencies: Install the required dependencies for the project using npm.

`npm install`
Set Up Environment Variables: If the project requires any environment variables (e.g., API keys), create a .env file in the root directory and add your variables there.

Start the Development Server: Run the development server to start the application locally.

`npm start`
Access the Application: Once the development server is running, you can access the application in your web browser at http://localhost:3000 or the port specified in the console.

## Generate a GitHub Personal Access Token:

Go to your GitHub account settings.
Navigate to the "Developer settings" section.
Click on "Personal access tokens" and then click "Generate new token".
Provide a description for the token, select the scopes you need (for this project, you might need access to repositories), and click "Generate token".
Copy the generated token.
Create the `.env.local` File:

In the root directory of the gitto.io project, create a new file named .env.local.
Define the Environment Variable:

Open the .env.local file in a text editor.
Add the following line to define the `REACT_APP_GITHUB_AUTH` environment variable:

`REACT_APP_GITHUB_AUTH=ghp_abc`
Replace `ghp_abc` with the GitHub token you generated.
Save the File:

Save the `.env.local` file.

# Future Enhancements
- Responsive Design: Ensure the application is responsive and works well on different devices and screen sizes.
- Error Handling: Implement mechanisms to gracefully handle API errors or unexpected situations.
- Optimization: Optimize performance by lazy loading components, code splitting, or using memoization techniques.
- User Authentication: Integrate authentication mechanisms to allow users to log in with their GitHub accounts and access personalized data.
