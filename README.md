# Raven

## Directory of social purpose organisations providing services for young people

### Overview
Raven is a full-stack application built to enable users to search through social purpose organisations based on the kind of support they offer to young people. Uses can review and add orgnisation profiles and ratings view ratings.

### Features
*Search* and *filter* organisations based on the support they offer.   
*View, add,* and *rate* organisations.   
*Retrieve* organisation *statistics* by support type.

Table of Contents
Technologies Used
Features
Installation
Backend Overview
Future Developments
OOP Principles

### Technologies Used

- **Backend:** Java, Spring Boot, MySQL
- **Dependencies:** Maven, Java v11, Spring Web, MySQL Driver, Spring Data JPA
- **Frontend:** Vite, TypeScript, React

### Backend

#### Backend Structure

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

#### Backend Overview

- **Models**
  - *Organisation:* Represents an organisation with various attributes like name, logo, overview, and support areas.
  - *Rating:* Represents a rating for an organisation, including the rating value, comment, name, and timestamp.
- **Repositories**
  - *OrganisationRepository:* Handles database operations for the Organisation entity, including custom queries to count organisations by support area.
  - *RatingRepository:* Handles database operations for the Rating entity, including fetching ratings by organisation.
- **Services**
  - *RavenService:* Contains business logic for creating, reading, updating, and deleting organisations and ratings. Handles the core functionalities of the application.
- **Controllers**
  - *RavenController:* Manages API endpoints for organisations and ratings, including endpoints to add organisations, create ratings, fetch organisations, and count organisations by support area.
- **Exception Handling**
  - *NotFoundException:* Custom exception for handling cases where an entity is not found in the database.
- **Resources**
  - *data.sql*: Contains dummy data for demonstration purposes. This script inserts sample organisations and their details into the database.
  - *schema.sql:* Defines the structure of the database, including the tables for organisations and ratings, and the relationships between them.

#### Backend API Endpoints

- Add a new organisation   POST /organisations/add  
- Add a rating for an organisation  POST /organisations/rate  
- Get all organisations  GET /organisations   
- Get organisation by ID  GET /organisations/{organisationId}   
- Count organisations by support area  GET /organisations/count/{supportArea}    
- Count all organisations  GET /organisations/countAll    
- Get recent ratings for an organisation  GET /organisations/{organisationId}/rate/recent   
- Get a random rating for an organisation GET /{organisationId}/ratings/random  

#### OOP Principles & Backend Best Practices

##### Four Pillars of OOP
- **Encapsulation:** Each class encapsulates its data and provides getters and setters for accessing and modifying it.               
Example: Organisation and Rating classes encapsulate their fields and use getters and setters.          
- **Abstraction:** The service layer (RavenService) abstracts the business logic from the controller layer (RavenController), promoting separation of concerns. 
Example: RavenService methods like addOrganisation and addRating encapsulate the logic for adding entities.         
- **Inheritance:** The concept of inheritance can be seen in the Spring Data JPA repositories extending JpaRepository, inheriting methods for CRUD operations.The use of JpaRepository in OrganisationRepository and RatingRepository leverages inheritance to provide common JPA methods.          
Example: OrganisationRepository and RatingRepository extend JpaRepository.                    
- **Polymorphism:** Interfaces and method overriding allow for polymorphic behavior.Custom query methods in the repositories showcase method overriding to provide specific implementations.                  
Example: Spring's dependency injection allows RavenService to be injected into RavenController, and methods like countBySupportArea demonstrate polymorphic behavior by accepting different support areas.                 

##### Best Practices
- **Modular Code:** Separation of concerns is maintained by organising the code into models, repositories, services, and controllers.
- **Error Handling:** Custom exceptions like NotFoundException and global exception handling in RavenController.
- **Logging:** Use of SLF4J for logging important actions and errors in RavenService.
- **Database Queries:** Use of JPA and custom queries to efficiently interact with the database.
- **Validation:** Ensuring data integrity and validation through entity annotations and service logic.

### Future Developments
Implement functionality to delete and update organisation details.
Add features to list organisations by ratings and other criteria.
Implement user authentication and authorization.
Add more detailed search and filter options for organisations.
Improve the UI/UX of the frontend application.

### Installation
Clone the repository.
Navigate to the backend directory and run mvn install to install dependencies.
Update application.properties with your MySQL configurations.
Run the backend application with mvn spring-boot:run.
Navigate to the frontend directory, install dependencies with npm install, and start the development server with npm run dev.
