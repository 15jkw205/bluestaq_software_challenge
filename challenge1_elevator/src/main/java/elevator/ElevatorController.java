package elevator; 

import java.util.Scanner; 

public class ElevatorController { 
    private Elevator elevator; 

    // Constructor to initialize the Elevator instance 
    public ElevatorController() { 
        this.elevator = new Elevator(); 
    }

    // Method to run the elevator simulation 
    public void run() { 
        Scanner scanner = new Scanner(System.in); 
        System.out.println("Welcome to the Elevator Simulation!"); 
        System.out.println("Enter a floor number between 0 and 9, or -1 to exit."); 

        // Continuous loop to accept user input 
        while (true) { 
            System.out.print("\nRequest a floor (-1 to exit): "); 

            // Read user input 
            int floor; 
            try { 
                floor = Integer.parseInt(scanner.nextLine()); 
            } catch (NumberFormatException e) { 
                System.out.println("Invalid input. Please enter a valid floor number."); 
                continue; 
            }

            // Check if the user wants to exit 
            if (floor == -1) { 
                System.out.println("Exiting the simulation..."); 
                elevator.status(); // Show final status before exiting
                break; 
            }

            // Validate floor range
            if (floor < 0 || floor > 9) { 
                System.out.println("Invalid floor number. Please enter a number between 0 and 9.");
                continue; 
            }

            // Add the floor request and process it 
            elevator.addRequest(floor); 
            System.out.println("Request to floor " + floor + " added.");
            elevator.processRequests(); 
            elevator.status(); 

            try { 
                Thread.sleep(1000); // Pause for 1 second before next request
            } catch (InterruptedException e) { 
                Thread.currentThread().interrupt();
            }
        }

        // Clean up the scanner resource 
        scanner.close(); 
    }

    // Main method to run the program 
    public static void main(String[] args) { 
        ElevatorController controller = new ElevatorController(); 
        controller.run();
    }
}