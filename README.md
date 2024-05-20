# -Etch-a-Sketch-

This is JavaScript Dynamic Grid Creator allows you to dynamically create a grid of cells within a specified container element on a webpage. Each cell in the grid changes its background color randomly upon mouseover, creating a dynamic visual effect.

## Functionality

### Grid Creation

The `createGrids(grids)` function dynamically generates a grid within the specified container element. Each cell in the grid is a `<div>` element with a default white background color and a black border. The grid size is calculated based on the provided `grids` parameter.

### Mouseover Effect

Upon mouseover of a cell, the `highlight(elem)` function changes its background color to a randomly selected color from a predefined array (`['blue', 'red', 'green']`). This creates a dynamic visual effect as the user interacts with the grid.

### Custom Event

After changing the background color of a cell, the `highlight(elem)` function dispatches a custom event named `'highlight'`, providing details about the new background color in the event's `detail` object.

### User Interaction

The `setGrids()` function allows users to input a new number of grids (between 1 and 100) via a prompt dialog. If the input is valid, it removes the existing grid and creates a new grid with the specified number of grids.

The `reset()` function resets the grid to its initial state by removing all cells and creating a new grid with 16 grids.

### Grid Removal

The `removeGrids()` function removes all child elements of the container element, effectively clearing the grid from the webpage.
