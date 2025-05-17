# WepProject #CS346

#Overview of the Website<br>
The website aims to connect doctors from various medical specialties across Riyadh, allowing users to easily search for suitable doctors. It also enables users to generate reports for their health conditions and provide ratings for doctors based on their experiences, with the ability to add reviews. The site features a user-friendly interface with clear divisions of content, making navigation simple. Additionally, it provides seamless communication with the platform’s administration. Authentication is available on every page, with integration with a MongoDB database.<br>

**#Target Audience:**<br>
The target audience for this website includes:
•	Patients and users searching for suitable doctors across Riyadh.<br>
•	University students who need to generate medical reports to be sent to relevant departments.<br>
•	Users who want to rate doctors and share their experiences with others.<br>
•	Doctors and hospitals looking to engage more with patients through interactive online services.<br>

**#Goals:**<br>
• Simplify the process of finding doctors across various specialties in Riyadh.<br>
• Provide authentic ratings and reviews from patients to help users choose the right doctor.<br>
• Generate customized health reports that can be sent directly to relevant entities.<br>
• Enhance the user experience with a clear, easy-to-use interface and well-organized sections.<br>
• Expand the service in the future to include other cities, increasing its reach.<br>

**#Unique Feature:** Direct Report Generation and Submission<br>
Our website offers a unique feature that sets it apart from existing platforms: a clear and intuitive interface that allows users to generate a report about their health condition and send it directly to the desired recipient via email.
For example, a university student can generate a health report through the platform and, if needed, send it directly to the relevant department or health service responsible for student health cases. This feature provides an efficient way to share personal health reports, making it easier for users to communicate with institutions or healthcare providers without the need for intermediaries.<br>

**#Flow chart**<br>

![](./public/img/FlowChart.jpg)

**#Project Setup**<br>
1-	Setting up the Basic Tools:<br>
•  Install Visual Studio Code (VSC).<br>
•  Install Node.js.<br>
•  Install and run MongoDB locally.<br>
•  Install MongoDB Shell to interact with the database.<br>
2-	Setting up Git and GitHub:<br>
•  Install Git.<br>
•  Create a repository on GitHub.<br>
•  Add team members to the repository for collaboration and sharing.<br>
3-	Setting up Wiki Repository:<br>
•	Create a Wiki in the GitHub repository to document the project.<br>
4-	Setting up the Project Locally (for team members):<br>
•	Clone the repository <br>
•	Install the dependencies<br>
•	Run the project <br>
5-	Working with the Database:<br>
•  Ensure that MongoDB is installed and running locally.<br>
•  Use MongoDB Shell to interact with the database<br>
6-	Ensuring the Project Works via HTTP:<br>
•	Ensure that the server is running at http://localhost:5000 (or the specified port in the project)<br>
•	Verify that MongoDB is connected and working by checking that the server is running on the specified port in Node.js.<br>

**#Technologies Used**<br>
•	Node.js: JavaScript runtime used to build the backend of the application.<br>
•	Express.js: Web framework for Node.js that simplifies routing and handling HTTP requests.<br>
•	MongoDB: NoSQL database used to store user and application data.<br>
•	Mongoose: ODM (Object Data Modeling) library for MongoDB, used to manage data models and interactions with MongoDB.<br>
•	Git: Version control system used for tracking code changes and collaboration among team members.<br>
•	GitHub: Platform for hosting the project repository and facilitating team collaboration.<br>
•	Visual Studio Code (VSC): Integrated development environment (IDE) used for writing and editing code.<br>
•	MongoDB Shell: Command-line interface for interacting with MongoDB databases.<br>
•	HTML: Markup language used to structure content on web pages.<br>
•	CSS: Styling language used to design and lay out the website.<br>
•	JavaScript: Programming language used to add interactivity and dynamic features to the website.<br>
•	EJS (Embedded JavaScript): Templating engine used to embed JavaScript into HTML pages, allowing for dynamic page rendering with data from the server.<br>
•	Google Authentication: Implemented OAuth 2.0 from Google to provide login and authentication for users using their Google accounts, simplifying the authentication process and increasing security.<br>

**#Some Screenshot**<br>
### Screenshot 1: Home Page
![Home Page](public/img/home_page.png)

### Screenshot 2: Dashboard for users
![Home Page](public/img/dashboard.png)

### Screenshot 3: Reviews Page
![Home Page](./public/img/reviews_page.png)

### Screenshot 4: Add Review
![Home Page](./public/img/addReview.png)

### Screenshot 5: Doctors Page For Gusts
![Home Page](./public/img/doctors_page(Gust).png)

### Screenshot 6: Doctors Page For Users
![Home Page](./public/img/doctors_page(Users).png)

### Screenshot 7: Contact Page 
![Home Page](./public/img/Contact_page.png)

### Screenshot 8: Athuntication
![Home Page](./public/img/athuntication_page.png)

### Screenshot 9: Database (Doctros Collection)
![Home Page](./public/img/database.png)



**#Future Work**<br>
•	Location-based Services: Add functionality to directly find doctors via a map, allowing users to easily see nearby doctors and hospitals.<br>
•	Doctor Filtering: Enable users to filter doctors based on their ratings from 1 to 5 to find the most highly rated professionals.<br>
•	Expansion to Other Cities: Expand the platform to include other cities beyond Riyadh, broadening the accessibility of the service<br>
•	Appointment Booking: Allow users to book appointments directly via the browser and choose the most suitable hospital based on their preferences.<br>
•	Doctor's Interface Development: Enhance the doctor’s interface to include features like managing appointments, viewing patient feedback, and updating availability.<br>
•	Admin Interface Development: Develop the admin interface to manage users, doctors, appointments, and reviews, as well as track the overall health of the platform.<br>
•	Notifications & Reminders: Implement notifications for upcoming appointments, feedback reminders, or new doctor availability.<br>




**#Resources**<br>
•	MongoDB - The database used to store user and doctor data.<br>
•	Express.js - The framework used to build the backend and handle HTTP requests.<br>
•	EJS - The templating engine used to embed JavaScript within HTML pages to create dynamic pages.<br>
•	Google OAuth - Used to provide Google Authentication feature.<br>
•	Git - The version control system used by the team to track changes and collaborate.<br>
•	GitHub - The platform used to host the repository and facilitate team collaboration.<br>
•	Visual Studio Code - The integrated development environment (IDE) used to write and edit code.<br>
•	Node.js - JavaScript runtime used to build the backend of the application.<br>
•	Building the Frontend (YouTube Video) - A video tutorial used to help build the frontend of the website.<br>
•	  Connecting to the Database (YouTube Playlist) - A YouTube playlist used for connecting the project to the MongoDB database.<br>



**#Team Members**<br>
--
Rand Abdulaziz AL-khuzaiem 442013948<br>
Nada  AL-turki 444008569<br>
Dana AL-shehri 442014081<br>

Rand: Responsible for building the general pages using CSS and JavaScript, creating the doctor page content, implementing authentication, integrating with the database, inserting doctor data into the database, and working with Node.js and Express.js. She is also responsible for writing the README file.<br>

Nada: Built the Get Report page, enabling users to send reports to specific entities. She worked with Node.js and Express.js and contributed to preparing the presentation.<br>

Dana: Responsible for adding the functionality to insert new reviews. She works with Node.js and Express.js and contributed to the flowchart.<br>




