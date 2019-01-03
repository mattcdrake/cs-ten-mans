# Counter-Strike 10-Man Finder

A website that lets players find and oragnize "10-man" Counter-Strike matches.
Features a player selection process, and map banning.

## TODO (features)

- list all current games on home page
- add sorting functionality to home page games
- management page for host of a game
- join an open game
- leave an open game
- start a game w/ 10 players connected
- create a timeout function to delete abandoned games
- create drafting process
- styling (not even concerned right now)

### Class Design

- app
  - GameManager
    - CurrentGames (list of games)
      - Game
        - Game state (waiting on players, organizing, complete)
        - Lobby owner
        - 2 captains
        - Players on each team
        - Current players
