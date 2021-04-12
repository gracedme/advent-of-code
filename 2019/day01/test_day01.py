from solution import calculate_fuel
from solution import part_one
from solution import part_two


def test_calculate_fuel():
    assert calculate_fuel(12) == 2
    assert calculate_fuel(14) == 2
    assert calculate_fuel(1969) == 654
    assert calculate_fuel(100756) == 33583


def test_part_one():
    assert part_one([12]) == 2
    assert part_one([100756]) == 33583
    assert part_one([12, 14, 1969, 100756]) == 34241


def test_part_two():
    assert part_two([14]) == 2
    assert part_two([1969]) == 966
    assert part_two([100756]) == 50346
    assert part_two([14, 1969, 100756]) == 51314
