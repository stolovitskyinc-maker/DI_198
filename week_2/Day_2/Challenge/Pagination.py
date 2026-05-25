import math

class Pagination:
    """Manages chunking and navigation for a large collection of items."""
    
    def __init__(self, items=None, page_size=10):
        # Step 2: Initialize parameters
        self.items = items if items is not None else []
        self.page_size = page_size
        self.current_idx = 0  # Internally 0-indexed
        
        # Calculate total pages using math.ceil
        self.total_pages = max(1, math.ceil(len(self.items) / self.page_size))

    def get_visible_items(self):
        """Step 3: Returns the slice of items for the current page."""
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    def go_to_page(self, page_num):
        """Step 4: Navigates to a specific 1-based page number."""
        if not (1 <= page_num <= self.total_pages):
            raise ValueError(f"Page number must be between 1 and {self.total_pages}.")
        self.current_idx = page_num - 1

    def first_page(self):
        """Navigates to the first page. Returns self for chaining."""
        self.current_idx = 0
        return self

    def last_page(self):
        """Navigates to the last page. Returns self for chaining."""
        self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        """Moves forward one page if possible. Returns self for chaining."""
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        """Moves backward one page if possible. Returns self for chaining."""
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    def __str__(self):
        """Step 5 (Bonus): Visualizes current items line by line."""
        visible_items = self.get_visible_items()
        return "\n".join(str(item) for item in visible_items)


# ==========================================
# SYSTEM DEMONSTRATION
# ==========================================
if __name__ == "__main__":
    alphabetList = list("abcdefghijklmnopqrstuvwxyz")
    p = Pagination(alphabetList, 4)
    
    print(p.get_visible_items())
    # ['a', 'b', 'c', 'd']
    
    p.next_page()
    print(p.get_visible_items())
    # ['e', 'f', 'g', 'h']
    
    p.last_page()
    print(p.get_visible_items())
    # ['y', 'z']
    
    p.go_to_page(10)
    print(p.current_idx + 1)
    # Output: ValueError
    
    p.go_to_page(0)
    # Raises ValueError
