# Counter-Strike 10-Man Finder

A website that lets players find and oragnize "10-man" Counter-Strike matches.
Features a player selection process, and map banning. 

## TODO

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
