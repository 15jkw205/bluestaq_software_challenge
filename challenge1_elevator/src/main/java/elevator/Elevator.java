package elevator; 

import java.util.LinkedList; 
import java.util.Queue; 

public class Elevator { 
    private int currentFloor; 
    private Direction direction; 
    private Queue<Integer> upQueue; 
    private Queue<Integer> downQueue; 

    // Constructor 
    public Elevator() { 
        this.currentFloor = 0; 
        this.direction = Direction.IDLE; 
        this.upQueue = new LinkedList<>(); 
        this.downQueue = new LinkedList<>(); 
    }

    // Method to add a request 
    public void addRequest(int floor) { 
        if (floor < 0 || floor > 9) { // Assuming a building with floors 0-9
        System.out.println("Invalid floor request. Please enter a valid floor number.");
        return;

        }
        if (floor > currentFloor) { 
            upQueue.add(floor); 
        } else if (floor < currentFloor) { 
            downQueue.add(floor); 
        } else { 
            System.out.println("You are already on floor " + floor); 
        }
    }

    // Method to process all requests and move the elevator 
    public void processRequests() { 
        while (!upQueue.isEmpty() || !downQueue.isEmpty()) { 
            if (direction == Direction.UP || direction == Direction.IDLE) { 
                processUpQueue(); 
                if (direction == Direction.IDLE && !downQueue.isEmpty()) { 
                    direction = Direction.DOWN; 
                }
            }

            if (direction == Direction.DOWN) { 
                processDownQueue(); 
                if (direction == Direction.IDLE && !upQueue.isEmpty()) { 
                    direction = Direction.UP; 
                }
            }
        }
    }

    // Process the up queue
    private void processUpQueue() { 
        while (!upQueue.isEmpty()) { 
            int nextFloor = upQueue.poll(); 
            moveToFloor(nextFloor); 
        }
        if (downQueue.isEmpty()) { 
            direction = Direction.IDLE; 
        } else { 
            direction = Direction.DOWN;
        }
    }

    // Process the down queue
    private void processDownQueue() { 
        while (!downQueue.isEmpty()) { 
            int nextFloor = downQueue.poll(); 
            moveToFloor(nextFloor); 
        }
        if (upQueue.isEmpty()) { 
            direction = Direction.IDLE; 
        } else { 
            direction = Direction.UP;
        }
    }

    // Move to a specified floor 
    private void moveToFloor(int floor) { 
        System.out.println("Moving from floor " + currentFloor + " to floor " + floor); 
        currentFloor = floor; 
        System.out.println("Arrived at floor " + floor); 
    }

    // Method to print the current status 
    public void status() { 
        System.out.println("Current floor: " + currentFloor); 
        System.out.println("Current direction: " + direction);
    }
}