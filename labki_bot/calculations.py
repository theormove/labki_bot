
import numpy as np



student_koef = {'2' : 12.7,
                '3' : 4.3,
                '4' : 3.2,
                '5' : 2.8,
                '6' : 2.6,
                '7' : 2.4,
                '8' : 2.4,
                '9' : 2.3,
                '10': 2.3,
                'else' : 2.0,}


def avarage_measurement(measurements):
    sum = 0
    for measurement in measurements:
        sum += measurement
    avg = sum/len(measurements)
    dis_sum = 0
    for measurement in measurements:
        dis_sum += (avg - measurement)**2
    dispersion = (dis_sum/(len(measurements)-1))**0.5
    for measurement in measurements:
        if abs(measurement - avg) >= 3*dispersion and 3*dispersion != 0:
            measurements.remove(measurement)
            return avarage_measurement(measurements) + ' MISTAKE: ' + str(measurement)
    standart_error = dispersion/(len(measurements)**0.5)
    if len(measurements) <= 10:
        stud = student_koef[str(len(measurements))]
    else:
        stud = student_koef['else']
    random_error = stud*standart_error
    random_relative_error = random_error*100/avg
    return 'Average is: ' + str(avg) + '\n' + 'Error is: ' + str(random_error) + ' ( ' + str(random_relative_error) + '% ) '
def lowest_square(dic):
    X = dic['0']
    Y = dic['1']
    X_mean = np.mean(X)
    Y_mean = np.mean(Y)
    num = 0
    den = 0
    for i in range(len(X)):
        num += (X[i] - X_mean) * (Y[i] - Y_mean)
        den += (X[i] - X_mean) ** 2
    m = num / den
    c = Y_mean - m * X_mean
    return [m, c]
