# Elevator Simulation Project 

## Overview 
This project simulates an elevator system. The user can input floor requests, and the elevator will move floors based on the requests. The simulation handles multiple requests and provides real-time feedback.

## Features 
- Handles floor requests for a building with floors numbered 0 to 9.
- Accepts user input and validates it. 
- Displays the current status of the elevator (current floor and direction). 
- Simulates realistic elevator movement with a 1-second delay. 

## How to Run 

### Prerequisites
- Ensure you have Java installed on your system. 

### Compilation 
To compile the project, run the following command: 
```bash 
javac -d bin src/main/java/elevator/*.java
```

### Running the Simulation 
After compiling, run the program using: 
```bash 
java -cp bin elevator.ElevatorController 
```

## Example Interaction
```
Welcome to the Elevator Simulation! 
Enter a floor number between 0 and 9, or -1 to exit. 

Request a floor (-1 to exit): 3
Request to floor 3 added. 
Moving from floor 0 to floor 3 
Arrived at floor 3 
Current floor: 3 
Current direction: IDLE 

Request a floor (-1 to exit): -1 
Exiting the simulation...
Current floor: 3 
Current direction: IDLE 
```

## Project Structure
```
bluestaq_software_challenge/
--->challenge1_elevator/
------->src/
----------->main/
--------------->java/
------------------->elevator/
----------------------->Elevator.java
----------------------->Direction.java
----------------------->ElevatorController.java
--->README.md
--->.gitignore
--->bin/
```

## Assumptions 
- The building has floors numbered 0 through 9. 
- The elevator starts at floor 0. 
- Invalid inputs are handled gracefully.

## Future Enhancements 
- Support for multiple elevators. 
- Adding a graphical user interface (GUI). 
- Optimizing the request handling algorithm. 

## License 
This project is open-source and free to use under the MIT License. 

![Java](https://img.shields.io/badge/Java-17-blue) 
![License: MIT](https://img.shields.io/badge/License-MIT-green)