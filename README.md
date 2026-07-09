# Web Development Project 5 - Pokemon Team Builder

Submitted by: **Paris-Riana Campbell**

This web app: A small React + Vite application that lets users browse Paldea-region Pokémon fetched from the public PokeAPI, search and filter them by name and type, and build a team of up to six Pokémon.

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard displays 400 Paldea Pokémon (one per card/row in the grid)
  - Each Pokémon row/card shows at least two features: name, sprite image, and its types (and includes an "Add to Team" button)
- [x] **`useEffect` React hook and `async`/`await` are used**
  - Data is fetched inside useEffect using async/await to progressively load details for each Pokémon
- [x] **The app dashboard includes at least three summary statistics about the data** 
  - Summary shown in the left panel includes: total Pokémon loaded, number of Pokémon currently displayed (after filters/search), and number of Pokémon in the current team
- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar correctly filters Pokémon by name
  - The list of results dynamically updates as the user types into the search bar
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - A Type filter (dropdown) restricts displayed Pokémon by type (a different attribute than the search bar)
  - The filter correctly filters items and the dashboard list updates dynamically as the user adjusts the filter

The following **optional** features are implemented:

- [ ] Multiple filters can be applied simultaneously
- [x] Filters use different input types
  - Search uses a text input; Type filter uses a dropdown
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

- [x] Team management panel: add up to 6 Pokémon to a team and remove them from the team
- [x] Loading indicator and progressive load counter while the app fetches the 400 Pokémon
- [x] Prevent duplicate additions to the team and enforce the 6-Pokémon team limit

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='pokemon-team-builder.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ...

## Notes

Challenges encountered while building the app:

- Fetching 400 Pokémon in sequence required careful use of async/await to avoid overwhelming the UI; the app progressively updates state so the user sees a loading counter while entries are appended.
- The PokeAPI requires several requests per entry (species -> pokemon) to obtain sprites and type data; implemented a loop that fetches each entry's details and appends them to state.
- Ensuring filters and search interact correctly required computing a derived filtered list from both inputs (search text + type dropdown) and using that list for the grid display.

## Running locally

1. Install dependencies:

   npm install

2. Start the dev server:

   npm run dev

3. Open the app in your browser (usually at http://localhost:5173)

Notes:
- The app fetches data from https://pokeapi.co/ and requires an internet connection.

## Project structure (important files)

- src/App.jsx — main app component (fetching, state, filtering, and team management)
- src/components/SearchBar.jsx — search input component
- src/components/Filter.jsx — type filter dropdown
- src/components/Summary.jsx — summary statistics component
- src/components/PokemonGrid.jsx — grid that renders Pokémon rows/cards
- src/components/TeamPanel.jsx — team management sidebar

## License

    Copyright [2026] Paris-Riana Campbell

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
