# TEMPERATURES
# https://www.codingame.com/training/easy/temperatures

import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

a = int(input())  # the number of temperatures to analyse
b = input()

if b:
    temperatures = sorted(list(map(int, b.split(' '))))

    options = []

    if max(temperatures) < 0:
        print(max(temperatures))
    elif min(temperatures) > 0:
        print(min(temperatures))
    else: 
        for i in range(0, len(temperatures)):
            if temperatures[i] > 0:
                options.append(temperatures[i - 1])
                options.append(temperatures[i])
                break

    if abs(options[0]) > options[1]:
        print(options[1])
    elif abs(options[0]) == options[1]:
        print(options[1])
    else:
        print(options[0])
else:
    print(0)