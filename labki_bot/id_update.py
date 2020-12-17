from beautify import beautify
import os 
data = []
update = ''
adv = []
for file in os.listdir():

	if len(file.split('.')) >= 2:
		if file.split('.')[1] == 'json':
			adv.append(file.split('.')[0])
			update += beautify(file)[1]
with open ('today.txt','w')	as f:
	f.write(update)
try:
	with open('adv.txt', 'r') as f:
		dam = f.read()
		for num in dam.split('\n'):
			k = 0
			for i in adv:
				if i == num:
					k = 1
			if k == 0:
				adv.append(num) 
except:
	pass	
with open('adv.txt', 'w') as f:
	text = ''
	for i in adv:
		text += i + '\n'
	f.write(text)	
print(len(adv))
