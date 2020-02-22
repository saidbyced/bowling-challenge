# Bowling Scorecard

## Motivation

This is the week 5 individual (weekend) project from Makers Academy. Please see the [Challenge Instructions](./Challenge_Instructions.md) markdown file for more information.
This project is a ten-pin bowling scorecard website.

## Build status

README created. User stories complete, starting on tests.

## Assumptions

1. A frame is a set of bowls.
2. There are 10 frames per game.
3. The first nine frames have up to two bowls, the 10th frame has up to 3 bowls.
4. The minimum score on a single frame is zero points.
5. The maximum score on a single frame is 30 points.
6. A strike is when a player knocks down all ten pins in their first bowl.
7. A spare is when a player knocks down all ten pins over the two bowls of their frame.
8. When bowling a strike, the player does not get a second bowl for that frame.
9. The third bowl on the tenth frame only happens if a spare or strike happens in the first two bowls.
10. A frame is worth the pins knocked down during those bowl/s unless a strike or spare happens.
11. A strike is worth 10 points plus the next two bowls.
12. A spare is worth 10 points plus the next one bowl.

Assumptions for HARD MODE

13. To bowl a 'perfect game' you must bowl total of 12 strikes - this includes three strikes in the 10th frame.
14. You can have up to 8 players on one lane.
15. A split is when, after the first bowl of the frame, the very front pin (pin '1') is knocked down but two or more non-adjacent pins (or groups of pins) are left standing.
16. A circled score (or a score with a small 's' beside it) shows when a split has happened.
17. A foul is where a player's foot passes the beginning of the bowling lane area.
18. A 'F' is put on the scorecard if a player fouls and the score for that bowl is zero.
19. Competitions often have judges who can alter scores.


## User Stories

```
As a bowling player
So that I can score my game
I would like to be able to enter the number of pins I knock down each bowl.

As a ten-pin bowling player
So that my score is accurate
I would like to be able to enter up to 10 pins per bowl.

As an honest player
So that I don't mix up my score
I would like to be able to enter up to a maximum of 10 pins on each frame.

As a ten-pin bowling enthusiast
So that I can score my game against other players
I want to see my frame score shown with correct bowling notation.

As a team player
So that I can see how well I did over a game
I would like to see my whole game listed out, frame by frame.

As a maths-challenged player
So that I can see my total score as it grows
I would like to see a running total under each frame
```

Extras:
```
As a high-scoring player
So that I can show my achievements
I would like to see a congratulatory message when I score a perfect game.

As a social player
So that I can track mine and my friends' scores
I would like to have up to 8 people bowling and scoring on one lane.

As a professional player
So that I can track difficult bowls
I would like to be able to enter when I get a 'split' on my first bowl of a frame.

As a competition-level player
So that I can ensure I stay in regulations
I would like to be able to enter when I get a 'foul'.

As a fair competition-level player
So that I can ensure I don't incorrectly count fouls
I would like for a bowl's value to be zero when I enter a foul, regardless of how many pins I knock down.
```

Double extras:
```
As a judge
So that I can correct mistakes and track fouls in scores
I would like to be able to update previous scores.

As a competition judge
So that I can ensure only judges can update scores
I would like to have to enter a password to do so.

As a forgetful judge
So that I reset my password
I would like to be able to have a password reset link sent to my email.
```
