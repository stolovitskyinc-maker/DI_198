student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72],
}

# Initialize empty dictionaries
student_averages = {}
student_letter_grades = {}

# Calculate averages and assign letter grades
for student, grades in student_grades.items():
    # Calculate average
    avg = sum(grades) / len(grades)
    student_averages[student] = avg

    # Determine letter grade
    if avg >= 90:
        letter = "A"
    elif avg >= 80:
        letter = "B"
    elif avg >= 70:
        letter = "C"
    elif avg >= 60:
        letter = "D"
    else:
        letter = "F"

    student_letter_grades[student] = letter

# Calculate the overall class average
class_average = sum(student_averages.values()) / len(student_averages)
print(f"Class Average: {class_average:.2f}\n")

# Print individual student results
for student in student_grades:
    avg = student_averages[student]
    letter = student_letter_grades[student]
    print(f"Student: {student} | Average: {avg:.2f} | Grade: {letter}")
