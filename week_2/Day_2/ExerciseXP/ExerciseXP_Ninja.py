import time
import os
import random
class Cell:
    """Represents a single cell in the grid."""
    def __init__(self, is_alive=False):
        self.is_alive = is_alive

    def get_char(self):
        """Returns visual representation of the cell."""
        return "■ " if self.is_alive else ". "


class GameOfLife:
    """Handles the game logic, grid updates, and rendering."""
    def __init__(self, rows, cols, initial_live_coords=None, expandable=False, max_size=100):
        self.rows = rows
        self.cols = cols
        self.expandable = expandable
        self.max_size = max_size
        self.generation = 0
        
        # Initialize grid with dead cells
        self.grid = [[Cell(False) for _ in range(self.cols)] for _ in range(self.rows)]
        
        # Seed initial state
        if initial_live_coords:
            self.seed(initial_live_coords)

    def seed(self, coords):
        """Populates the grid with initial live cells."""
        for r, c in coords:
            if 0 <= r < self.rows and 0 <= c < self.cols:
                self.grid[r][c].is_alive = True

    def display(self):
        """Clears terminal and prints the current generation."""
        os.system('cls' if os.name == 'nt' else 'clear')
        print(self.get_status_string())
        
    def get_status_string(self):
        """Generates the text grid for display."""
        out = [f"Generation: {self.generation} | Grid Size: {self.rows}x{self.cols}"]
        out.append("-" * (self.cols * 2))
        for row in self.grid:
            out.append("".join(cell.get_char() for cell in row))
        return "\n".join(out)

    def count_live_neighbors(self, r, c):
        """Counts how many of the 8 neighbors are alive."""
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

    def check_expansion_needs(self):
        """Bonus feature: Detects if live cells touch the current boundary."""
        if not self.expandable:
            return False, False, False, False

        expand_top = any(self.grid[0][c].is_alive for c in range(self.cols))
        expand_bottom = any(self.grid[self.rows-1][c].is_alive for c in range(self.cols))
        expand_left = any(self.grid[r][0].is_alive for r in range(self.rows))
        expand_right = any(self.grid[r][self.cols-1].is_alive for r in range(self.rows))
        
        return expand_top, expand_bottom, expand_left, expand_right

    def expand_grid(self, top, bottom, left, right):
        """Expands the matrix dynamically if memory limits allow."""
        # Pad top or bottom rows
        if top and self.rows < self.max_size:
            self.grid.insert(0, [Cell(False) for _ in range(self.cols)])
            self.rows += 1
        if bottom and self.rows < self.max_size:
            self.grid.append([Cell(False) for _ in range(self.cols)])
            self.rows += 1
            
        # Pad left or right columns
        if left and self.cols < self.max_size:
            for row in self.grid:
                row.insert(0, Cell(False))
            self.cols += 1
        if right and self.cols < self.max_size:
            for row in self.grid:
                row.append(Cell(False))
            self.cols += 1

    def step(self):
        """Computes the next generation using Conway's rules."""
        if self.expandable:
            t, b, l, r = self.check_expansion_needs()
            if any([t, b, l, r]):
                self.expand_grid(t, b, l, r)

        # Precompute neighbor matrix to avoid altering data midway
        neighbor_counts = [[0 for _ in range(self.cols)] for _ in range(self.rows)]
        for r in range(self.rows):
            for c in range(self.cols):
                neighbor_counts[r][c] = self.count_live_neighbors(r, c)

        # Apply survival/reproduction rules
        grid_changed = False
        next_grid = [[Cell(False) for _ in range(self.cols)] for _ in range(self.rows)]
        
        for r in range(self.rows):
            for c in range(self.cols):
                is_alive = self.grid[r][c].is_alive
                neighbors = neighbor_counts[r][c]
                
                if is_alive:
                    # Rule 1 & 3: Under/Overpopulation. Rule 2: Lives on.
                    next_state = neighbors == 2 or neighbors == 3
                else:
                    # Rule 4: Reproduction
                    next_state = neighbors == 3
                
                next_grid[r][c].is_alive = next_state
                if next_state != is_alive:
                    grid_changed = True

        self.grid = next_grid
        self.generation += 1
        return grid_changed


# ==========================================
# INITIAL PRESETS FOR TESTING
# ==========================================

# 1. Blinker (Period 2 Oscillator)
blinker_coords = [(2, 1), (2, 2), (2, 3)]

# 2. Beacon (Period 2 Oscillator)
beacon_coords = [(1, 1), (1, 2), (2, 1), (2, 2), (3, 3), (3, 4), (4, 3), (4, 4)]

# 3. Glider (Spaceship that travels across the board)
glider_coords = [(0, 1), (1, 2), (2, 0), (2, 1), (2, 2)]


# ==========================================
# SIMULATION RUNNER
# ==========================================
if __name__ == "__main__":
    # Change "expandable" to True to activate the bonus feature.
    # Safe small max_size used for terminal rendering clarity. Increase up to 10000 if needed.
    game = GameOfLife(rows=10, cols=15, initial_live_coords=glider_coords, expandable=True, max_size=30)
    
    max_generations = 30
    for _ in range(max_generations):
        game.display()
        time.sleep(0.3)
        has_changed = game.step()
        
        if not has_changed:
            game.display()
            print("\nSimulation reached a static state or died out.")
            break