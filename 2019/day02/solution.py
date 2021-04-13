with open(r'input.txt', 'r') as file:
    input = list(map(int, file.read().strip().split(',')))

# opcodes
ADD = 1
MUL = 2
END = 99

def edit(program, noun, verb):
    copy = program.copy()
    copy[1] = noun
    copy[2] = verb
    return copy


def execute(program):
    ix = 0
    while ix < len(program):
        if program[ix] == ADD:
            program[program[ix + 3]] = program[program[ix + 1]] + program[program[ix + 2]]
            ix += 4
        elif program[ix] == MUL:
            program[program[ix + 3]] = program[program[ix + 1]] * program[program[ix + 2]]
            ix += 4
        elif program[ix] == END:
            ix = len(program)
        else:
            ix += 1
    return program


def part_one():
    print("part one", execute(edit(input, 12, 2))[0])


def part_two():
    for noun in range(0, 100):
        for verb in range(0, 100):
            result = execute(edit(input, noun, verb))[0]
            if result == 19690720:
                print("part two", noun * 100 + verb)

part_one()
part_two()
