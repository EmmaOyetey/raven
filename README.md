# Raven

## A Directory of Social Purpose Organisations providing services for Young People

### Overview
Raven is a full-stack application built to enable users to search through social purpose organisations based on the kind of support they offer to young people. Uses can review and add orgnisation profiles and ratings view ratings. This project showcases my ability to build a full-stack application with a relational database backend and a responsive, interactive frontend. Using modern technologies and best practices to ensure the codebase is maintainable, scalable, and ready for future enhancements.

### Technologies Used

- **Backend:** Java, Spring Boot, MySQL
- **Frontend:** Vite, TypeScript, SCSS, React
- **Dependencies:** Maven, Java v11, Spring Web, MySQL Driver, Spring Data JPA, React Router

### Features
*Search* and *filter* organisations based on the support they offer.   
*View, add,* and *rate* organisations.   
*Retrieve* organisation *statistics* by support type.

### API Endpoints
  
    - Create a new organisation   POST /organisations/add  
    - Add a rating for an organisation  POST /organisations/rate  
    - Fetch / Get all organisations  GET /organisations   
    - Get organisation by ID  GET /organisations/{organisationId}   
    - Count organisations by support area  GET /organisations/count/{supportArea}    
    - Count all organisations  GET /organisations/countAll    
    - Get recent ratings for an organisation  GET /organisations/{organisationId}/rate/recent   
    - Get a random rating for an organisation GET /{organisationId}/ratings/random

### Structure Overview & Key Components

#### Backend
The BackEnd of this project is structured into the following key folders:
  - **Models**
      - *Organisation:* Represents an organisation with various attributes like name, logo, overview, and support areas.
      - *Rating:* Represents a rating for an organisation, including the rating value, comment, name, and timestamp.
- **Repositories**
  - *OrganisationRepository:* Handles database operations for the Organisation entity, including custom queries to count organisations by support area.
  - *RatingRepository:* Handles database operations for the Rating entity, including fetching ratings by organisation.
- **Services** *RavenService:* Contains business logic for creating, reading, updating, and deleting organisations and ratings. Handles the core functionalities of the application.
- **Controllers** *RavenController:* Manages API endpoints for organisations and ratings, including endpoints to add organisations, create ratings, fetch organisations, and count organisations by support area.
- **Exception Handling** *NotFoundException:* Custom exception for handling cases where an entity is not found in the database.
- **Resources** *data.sql*: Contains dummy data for demonstration purposes. This script inserts sample organisations and their details into the database. *schema.sql:* Defines the structure of the database, including the tables for organisations and ratings, and the relationships between them.
     
#### FrontEnd
App.tsx is The main entry point of the application, setting up the router and fetching initial data. The frontend of this project is then structured into the following key folders:
- **assets:** Contains background and logo images.
- **components:** Reusable UI components such as Carousel, Dropdown Box, Form, Navbar, OrganisationCard (displaysing a brief overview of an organisation.), OrganisationInfo, ( displaying detailed information about an organisation), RatingCard, and SearchBox.
- **containers:** Pages and views including
  - *Home*,The landing page with a navigation link to explore organisations.
  - *About*,
  - *Organisations*: Lists all organisations, with filtering options based on support areas.
  - *OrganisationProfile*: Displays detailed information and ratings carousel for a specific organisation.
  - *CreateOrganisation*: A form to add a new organisation.
  - *RateOrganisation*: A form to add a rating for an organisation
- **styles:** SCSS files for styling, including _reset.scss, _typography.scss, and _variables.scss.
- **types:** TypeScript type definitions for Organisation and Rating.

#### Database Design
This project demonstrates the use of Relational Databases and showcases my ability to create and manage one-to-many relationships.
- **Organisation Table:** Stores information about various social purpose organisations.
- **Rating Table:** Stores ratings for the organisations, with a foreign key linking each rating to an organisation.
      
Benefits of using a Relational Database for this project include;
- **Data Integrity:** The use of primary and foreign keys ensures the integrity and consistency of the data. Each rating is associated with a valid organisation, preventing orphaned records.
- **Scalability:** handling large volumes of data efficiently and providing horizontal and vertical scalability to meet growing demands.
- **Flexibility:** The structured format  allows for complex queries and easy data manipulation, which is essential for this project's potential diverse data retrieval needs.
  
### Best Practices

- **OOP**
    - **Encapsulation:** Each class encapsulates its data and provides getters and setters for accessing and modifying it.               
  Example: Organisation and Rating classes encapsulate their fields and use getters and setters.          
    - **Abstraction:** The service layer (RavenService) abstracts the business logic from the controller layer (RavenController), promoting separation of concerns. 
  Example: RavenService methods like addOrganisation and addRating encapsulate the logic for adding entities.         
    - **Inheritance:** The concept of inheritance can be seen in the Spring Data JPA repositories extending JpaRepository, inheriting methods for CRUD operations.The use of JpaRepository in OrganisationRepository and RatingRepository leverages inheritance to provide common JPA methods.          
      Example: OrganisationRepository and RatingRepository extend JpaRepository.                    
    - **Polymorphism:** Interfaces and method overriding allow for polymorphic behavior.Custom query methods in the repositories showcase method overriding to provide specific implementations.                  
      Example: Spring's dependency injection allows RavenService to be injected into RavenController, and methods like countBySupportArea demonstrate polymorphic behavior by accepting different support areas.
- **Modular Code:** Separation of concerns is maintained by organising the code into models, repositories, services, and controllers.
- **Error Handling:** Custom exceptions like NotFoundException and global exception handling in RavenController.
- **Logging:** Use of SLF4J for logging important actions and errors in RavenService.
- **Database Queries:** Use of JPA and custom queries to efficiently interact with the database.
- **Validation:** Ensuring data integrity and validation through entity annotations and service logic.
- **React and TypeScript:** Leveraging the power of TypeScript for type safety and better code maintenance. Using React for building a dynamic and responsive user interface.
- **React Router**: For client-side routing, enabling a single-page application experience with multiple views.
- **Component Reusability:** Creating reusable components (e.g., Navbar, OrganisationCard) to maintain a consistent design and reduce code duplication.
- **SCSS for Styling:** Using SCSS for more organized and modular CSS, making it easier to manage and scale styles across the application.
- **Async Data Fetching:** Fetching data asynchronously with proper error handling and state management using React hooks.
        

### Future Developments
- Persistent Data Storage: Transition from using dummy data in data.sql to a more robust solution that retains user inputs and maintains historical records.
- Enhanced Filtering and Search: Improving the filtering and search functionality to provide more relevant results to users.
- Implement functionality to delete and update organisation details.
- Add features to list organisations by ratings and other criteria.
- Implement user authentication and authorization.
- Improve the UI/UX of the frontend application; ensuring Responsive Design and an application that is accessible and usable on different devices and screen sizes.

### Structure

  - #### Backend Structure
  
                  src/main/java/                    
                  ├── com/example/api             
                      ├── models                 
                      │   ├── Organisation.java            
                      │   └── Rating.java            
                      ├── repositories                 
                      │   ├── OrganisationRepository.java              
                      │   └── RatingRepository.java               
                      ├── responses                
                      │   ├── NotFoundException.java            
                      │   ├── RavenController.java           
                      │   └── RavenService.java             
                  └── ApiApplication.java          
                  └── resources           
                      ├── data.sql           
                      └── schema.sql

  - #### Frontend Structure
                src/                  
                  ├── assets                              
                  ├── components                  
                  │   ├── Carousel                   
                  │   ├── DropdownBox           
                  │   ├── Form                  
                  │   │   ├── OrganisationForm.tsx 
                  │   │   └── RatingsForm.tsx 
                  │   ├── Nav                  
                  │   ├── OrganisationCard           
                  │   ├── OrganisationInfo           
                  │   ├── RatingCard                
                  │   └── SearchBox                 
                  ├── containers                
                  │   ├── About                   
                  │   ├── Create                   
                  │   ├── Home                    
                  │   ├── OrganisationProfile     
                  │   ├── Organisations              
                  │   └── Rate                   
                  ├── styles                    
                  ├── types                     
                  │   ├── organisationType.ts    
                  │   └── ratingsType.ts         
                  ├── App.scss                  
                  ├── App.tsx                   
                  ├── main.tsx                  
                  ├── index.html                


### Installation
Clone the repository.
Navigate to the backend directory and run mvn install to install dependencies.
Update application.properties with your MySQL configurations.
Run the backend application with mvn spring-boot:run.
Navigate to the frontend directory, install dependencies with npm install, and start the development server with npm run dev.
