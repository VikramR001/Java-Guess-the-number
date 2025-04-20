import java.util.Random;
import java.util.Scanner;

public class NumberGuessingGame {

    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            Random random = new Random();
            int secretNumber = random.nextInt(50) + 1;
            int attempts = 5; // You can adjust the number of attempts
            int guess;
            
            System.out.println("Welcome to the Number Guessing Game!");
            System.out.println("I'm thinking of a number between 1 and 50.");
            
            while (attempts > 0) {
                System.out.println("You have " + attempts + " attempts left.");
                System.out.print("Enter your guess: ");
                guess = scanner.nextInt();
                scanner.nextLine(); // Consume the newline character
                
                if (guess < 1 || guess > 50) {
                    System.out.println("Invalid guess. Please enter a number between 1 and 50.");
                    continue;
                }
                
                if (guess == secretNumber) {
                    System.out.println("Congratulations! You guessed the number " + secretNumber + " in " + (5 - attempts) + " attempts.");
                    break;
                } else if (guess < secretNumber) {
                    System.out.println("It is low! Try again.");
                } else {
                    System.out.println("It is high! Try again.");
                }
                
                attempts--;
            }
            
            if (attempts == 0) {
                System.out.println("You ran out of attempts! The number was " + secretNumber + ".");
            }
        }
    }
}
