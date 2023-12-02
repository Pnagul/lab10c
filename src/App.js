// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <body>
      <div className="main">
        <h1>Welcome to Lab 10 C: By Pavithiran</h1>

        <div className="container">
          <h3>How did Pavithiran build this page you may ask?</h3>
          <p>
            It was enjoyable process, in which I learnt the basics of React.js and the cool aspects of it.
          </p>

          <ol>
            <li>
              <b>Install Node.js!:</b> This is the obvious first step, which I will cover in full detail later below!
            </li>

            <li>
              <b>Make the HTML code for this site!:</b> Inside of the App.js file, I added the HTML code it requried to appear like this. This included divisions, lists, headers, and alot of other small aspects to create this little site of mine!
            </li>

            <li>
              <b>Host this page:</b> As the final step, I had to host this page. After much research, I came across an easy solution by following <a href="https://www.youtube.com/watch?v=2hM5viLMJpA" target="_blank" rel="noopener noreferrer">this tutorial</a> and hosted my site on GitHub!.
            </li>
          </ol>
        </div>
        <hr></hr>

        <div className="container">
          <h3>The elephant in the room, how I installed the framework of my choice React.js!</h3>
          <p>
            The steps I followed, from <a href="https://kinsta.com/knowledgebase/install-react/" target="_blank" rel="noopener noreferrer">this tutorial</a>, are noted below:
          </p>

          <div className="section-container">
            <div className="step-container">
              <h2>1. Download and install Node.js:</h2>
              <p>
                To have React.js, it requires you to install Node.js. You can download and install the latest version for you computer <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">from the offical site!</a>
              </p>
            </div>

            <div className="step-container">
              <h2>2. Install create react app:</h2>
              <p>
                Open Windows Powershell/Terminal and type this command <code>npm install -g create-react-app</code> to install the create react app!
              </p>
            </div>

            <div className="step-container">
              <h2>3. Create a new react project:</h2>
              <p>
                Enter the command <code>npx create-react-app projName</code> and replace <strong>projName</strong> with the desired name of your project!
              </p>
            </div>

            <div className="step-container">
              <h2>4. Navigate to your project directory:</h2>
              <p>
                Enter the command <code>cd projName</code> to navigate to your porject directory!
              </p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="container">
          <h3>Difficulties I encountered and how I solved them!</h3>
          <p>
            The only difficulty I would say I encountered, was how to change and edit the HTML and CSS of this site. Until I found the correct resources online that taught me, I was a bit jarred on which file to edit and how to start but after a while of researching, I learned the basics to create and edit this site! Other than that, no issues at all!
          </p>
        </div>
      </div>
    </body>
  );
}

export default App;
