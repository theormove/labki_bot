import matplotlib.pyplot as plt
from calculations import lowest_square



def painting(dic):
    SECOND_DEFAULT_X: float = max(max(dic['0']),max(dic['1']))
    FIRST_DEFAULT_X: float = min(min(dic['0']), min(dic['1']))
    data = metamorphosis(dic)
    line = lowest_square(dic)
    plot = Plotter()
    plot.Plot(line[0],line[1],data[0],data[1],data[2],'graph.png',FIRST_DEFAULT_X, SECOND_DEFAULT_X )
    return ' a = ' + str(line[0]) + '; b = ' + str(line[1])



def metamorphosis(dic):
    dataPoints = []
    for i in range(len(dic['0'])):
        x = dic['0'][i]
        y = dic['1'][i]
        margin = dic['2'][i]
        point = DataPoint(x, y, margin)
        dataPoints.append(point)
    x_name = dic['0_name']
    y_name = dic['1_name']
    return [dataPoints, x_name, y_name]
class DataPoint:
    def __init__(self, x, y, margin):
        self.x = x
        self.y = y
        self.margin = margin

class Plotter:
    def calculatePoint(a,b,p):
        return a*p + b
    def Plot(self,a,b,dataPoints,xName,yName,path,FIRST_DEFAULT_X, SECOND_DEFAULT_X):
        plotY = []
        plotX = []
        xArray = []
        yArray = []
        margins= []
        for i in range(0, len(dataPoints)):
            xArray.append(dataPoints[i].x)
            yArray.append(dataPoints[i].y)
            margins.append(dataPoints[i].margin)
        xArray.sort()
        try:
            plotX.append(xArray[0])
            plotX.append(xArray[len(xArray) - 1])
            plt.plot(plotX, plotY)
        except:
            plotY.append(Plotter.calculatePoint(a,b,FIRST_DEFAULT_X))
            plotY.append(Plotter.calculatePoint(a,b,SECOND_DEFAULT_X))
            plotX= [FIRST_DEFAULT_X,SECOND_DEFAULT_X]
            plt.plot(plotX,plotY)

        for i in range(0,len(xArray)):
            WIDTH = margins[i] / 4
            x = [xArray[i],xArray[i]]
            y = [yArray[i] + margins[i], yArray[i] - margins[i]]
            plt.plot(x,y,color="red")
            x = [xArray[i] - WIDTH / 2,xArray[i] + WIDTH / 2]
            y = [yArray[i] - margins[i],yArray[i] - margins[i]]
            plt.plot(x,y, color="green")

            x = [xArray[i] - WIDTH / 2, xArray[i] + WIDTH / 2]
            y = [yArray[i] + margins[i], yArray[i] + margins[i]]
            plt.plot(x,y,color="green")

        plt.xlabel(xName)
        plt.ylabel(yName)
        plt.savefig(path)
        plt.close()#saves graph to a file
        #plt.show()


if __name__ == '__main__':
    dataPoints = []
    for i in range(0, int(input())):
        x = float(input("enter x coordinate: "))
        y = float(input("enter y coordinate: "))
        margin = float(input("enter margin for this data point: "))
        point = DataPoint(x, y, margin)
        dataPoints.append(point)
    Plotter.Plot(1,2,dataPoints,'david','loh','graph.png')
