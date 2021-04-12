with open(r'input.txt', 'r') as file:
    input = list(map(int, file.read().strip().split()))


def calculate_fuel(mass):
    return (mass // 3) - 2


def part_one(masses):
    sum = 0
    for mass in masses:
        sum += calculate_fuel(mass)
    return sum


def part_two(masses):
    sum = 0
    for mass in masses:
        while calculate_fuel(mass) > 0:
            mass = calculate_fuel(mass)
            sum += mass
    return sum


print("part one:", part_one(input))
print("part two:", part_two(input))
