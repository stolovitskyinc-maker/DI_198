# Conway's Game of Life Implementation
# Rules:
# 1. Any live cell with fewer than two live neighbours dies (underpopulation).
# 2. Any live cell with two or three live neighbours lives on.
# 3. Any live cell with more than three live neighbours dies (overpopulation).
# 4. Any dead cell with exactly three live neighbours becomes a live cell (reproduction).
#
# Constraints: Uses Object-Oriented Programming (Classes) and supports fixed or expanding boundaries.

import time
import os

class Cell:
    """Represents a single cell in the grid."""
    def __init__(self, is_alive=False):
        self.is_alive = is_alive

    def get_next_state(self, live_neighbors):
        """Applies the 4 rules of Conway's Game of Life."""
        if self.is_alive:
            if live_neighbors < 2 or live_neighbors > 3:
                return False  # Underpopulation or Overpopulation
            return True       # Survives
        else:
            if live_neighbors == 3:
                return True   # Reproduction
            return False      # Remains dead


class GameOfLife:
    """Manages the board, game loop, transitions, and rendering."""
    def __init__(self, rows, cols, initial_live_cells=None, expandable=False, max_size=10000):
        self.rows = rows
        self.cols = cols
        self.expandable = expandable
        self.max_size = max_size
        
        # Grid offset tracker used primarily for the expandable bonus configuration
        self.row_offset = 0
        self.col_offset = 0

        # Initialize full grid with dead Cell objects
        self.grid = [[Cell(False) for _ in range(cols)] for _ in range(rows)]

        # Populate initial live cells
        if initial_live_cells:
            for r, c in initial_live_cells:
                if 0 <= r < rows and 0 <= c < cols:
                    self.grid[r][c].is_alive = True

    def count_live_neighbors(self, r, c):
        """Counts how many of the 8 surrounding cells are alive."""
        live_count = 0
        for dr in [-1, 0, 1]:
            for dc in [-1, 0, 1]:
                if dr == 0 and dc == 0:
                    continue
                nr, nc = r + dr, c + dc
                
                if 0 <= nr < self.rows and 0 <= nc < self.cols:
                    if self.grid[nr][nc].is_alive:
                        live_count += 1
        return live_count

    def check_and_expand_grid(self):
        """Bonus: Seamlessly expands grid boundaries if active cells touch borders."""
        expand_top = any(self.grid[0][c].is_alive for c in range(self.cols))
        expand_bottom = any(self.grid[self.rows-1][c].is_alive for c in range(self.cols))
        expand_left = any(self.grid[r][0].is_alive for r in range(self.rows))
        expand_right = any(self.grid[r][self.cols-1].is_alive for r in range(self.rows))

        # Block expansion if safety thresholds are exceeded
        if self.rows >= self.max_size or self.cols >= self.max_size:
            return

        if expand_top:
            self.grid.insert(0, [Cell(False) for _ in range(self.cols)])
            self.rows += 1
            self.row_offset -= 1
        if expand_bottom:
            self.grid.append([Cell(False) for _ in range(self.cols)])
            self.rows += 1
        if expand_left:
            for row in self.grid:
                row.insert(0, Cell(False))
            self.cols += 1
            self.col_offset -= 1
        if expand_right:
            for row in self.grid:
                row.append(Cell(False))
            self.cols += 1

    def compute_next_generation(self):
        """Calculates state changes and constructs the new grid state synchronously."""
        if self.expandable:
            self.check_and_expand_grid()

        # Phase 1: Pre-calculate the next state for every coordinate point
        next_states = [[False for _ in range(self.cols)] for _ in range(self.rows)]
        for r in range(self.rows):
            for c in range(self.cols):
                neighbors = self.count_live_neighbors(r, c)
                next_states[r][c] = self.grid[r][c].get_next_state(neighbors)

        # Phase 2: Update cells to their new values simultaneously
        for r in range(self.rows):
            for c in range(self.cols):
                self.grid[r][c].is_alive = next_states[r][c]

    def display(self, generation):
        """Renders the grid cleanly to the console console platform."""
        # Clears screen context per generation refresh loop
        os.system('cls' if os.name == 'nt' else 'clear')
        print(f"=== Conway's Game of Life | Generation: {generation} ===")
        print(f"Grid Dimensions: {self.rows}x{self.cols}\n")
        
        for row in self.grid:
            row_str = "".join(["◼ " if cell.is_alive else "◻ " for cell in row])
            print(row_str)
        print("\nPress Ctrl+C to terminate application.")

    def run_simulation(self, max_generations=50, delay=0.3):
        """Primary controller engine loop updating state sequentially."""
        try:
            for gen in range(1, max_generations + 1):
                self.display(gen)
                self.compute_next_generation()
                time.sleep(delay)
        except KeyboardInterrupt:
            print("\nSimulation aborted by user instruction.")


# --- Presets & Execution Testing Setup ---
if __name__ == "__main__":
    # Setup Option A: "The Glider" (Transports itself diagonally forever)
    glider_cells = [(0, 1), (1, 2), (2, 0), (2, 1), (2, 2)]
    
    # Setup Option B: "Blinker" (Oscillates static position state forever)
    blinker_cells = [(2, 1), (2, 2), (2, 3)]

    # Instantiate game with a fixed map window size (Set expandable=True for the bonus variant)
    game = GameOfLife(rows=10, cols=40, initial_live_cells=glider_cells, expandable=False)
    
    # Run the interactive loop engine
    game.run_simulation(max_generations=30, delay=0.2)
