# Web Development Project 6 - Pokemon Team Builder

Submitted by: **Paris-Riana Campbell**

This web app: **A React + Vite dashboard for browsing the full Paldea Pokédex, searching and filtering Pokémon, building a team of up to six, and viewing detailed information for each Pokémon on a unique route.**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking on an item in the list view displays more details about it**
  - Clicking on a Pokémon card in the dashboard navigates to a detail view for that Pokémon
  - The detail view includes extra information such as height, weight, abilities, and base stats not shown on the dashboard
  - The same sidebar is displayed in detail view as in dashboard view
- [x] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
  - Each Pokémon detail page is reachable via a unique route such as `/pokemon/:id`
- [x] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - A pie chart shows the distribution of Pokémon types across the Paldea dataset
  - A bar chart highlights the ten tallest Pokémon in the dataset

The following **optional** features are implemented:

- [x] The site’s customized dashboard contains more content that explains what is interesting about the data
  - The dashboard includes summary cards, type distribution visuals, and a top-height comparison chart that give more context to the dataset
- [ ] The site allows users to toggle between different data visualizations
  - User should be able to use some mechanism to toggle between displaying and hiding visualizations

The following **additional** features are implemented:

- [x] Team management panel that lets the user add up to six Pokémon and remove them from the team
- [x] Loading indicator and progressive load counter while the app fetches the full Paldea dataset
- [x] Duplicate prevention and a team-cap enforcement system
- [x] Search and filter tools to help users quickly find Pokémon by name or type

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='./public/pokemon-team-builder.gif' title='Pokemon Team Builder Demo' width='1000' alt='Pokemon Team Builder Demo' />

GIF created with ScreenToGif

## Notes

Challenges encountered while building the app:

- Fetching all 400 Paldea Pokémon required careful use of `useEffect` and `async`/`await` to progressively load data without freezing the UI.
- The PokeAPI returned data in a multi-step format, so the app had to request species information and then Pokémon detail information for each entry.
- Keeping the search, type filter, and team panel in sync required careful state management so that the dashboard and detail views stayed consistent.

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
