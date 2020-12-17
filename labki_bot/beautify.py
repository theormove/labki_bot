import json
import time 
 
def format_date(date):
	normal_date = time.ctime(date)
	return normal_date
print('Print the name of the file: ')
def beautify(file):
	beautified = ''
	update = ''
	with open (file, 'r') as f:
		data=json.load(f)   
		for message in data['messages']:
			try:
				beautified += '@ ' + str(message['id']) + ' | ' +  str(format_date(message['date'])) + ' | ' + message['username'] + ': ' + message['text'] + '\n'
			except:
				pass	
			if format_date(message['date'])[:10] == time.ctime()[:10]:
				try:
					update += '@ ' + str(message['id']) + ' | ' +  str(format_date(message['date'])) + ' | ' + message['username'] + ': ' + message['text'] + '\n'
				except:
					pass	
		return [beautified, update]	 
if __name__ == '__main__':
	beautify(input())
print(time.ctime().split()) 
