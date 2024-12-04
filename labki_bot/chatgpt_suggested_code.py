import telebot
import time
import json
from calculations import avarage_measurement
from Plotter import painting
import os

bot_token = '858735731:AAHvHikuUT8gmSOHdNLfKPHhVUM4G6k1qco'

bot = telebot.TeleBot(token=bot_token)
import os.path

def find_at(msg):
        for text in msg:
                if '@' in text:
                        return text

def user_info(message):
  if not os.path.isfile('{}.txt'.format(message.chat.id)):
    with open('{}.txt'.format(message.chat.id), 'w') as f:
        f.write( '@' +  str(message.message_id) + '@' + str(message.date) + ' ' + message.chat.username + ': ' + message.text +'\n')
  else:
      with open('{}.txt'.format(message.chat.id), 'r') as f:
        data = f.read()
        f.close()
      with open('{}.txt'.format(message.chat.id), 'w') as f:
        f.write(data + '@' + str(message.message_id) + '@'+ str(message.date) + ' ' + message.chat.username + ': ' + message.text +'\n')
  return 0

def user_info_json(message):
  if not os.path.isfile('{}.json'.format(message.chat.id)):
    with open('{}.json'.format(message.chat.id), 'w') as f:
        text_encode = message.text.encode('UTF-8')
        text = text_encode.decode('UTF-8')
        data = {'messages':[{'id' : message.message_id,
                                'date' : message.date,
                                'username' : message.chat.username,
                                'text' : text,
                            }],}
        json.dump(data, f)
  else:
      with open('{}.json'.format(message.chat.id)) as f:
        data = json.load(f)
        data['messages'].append({'id' : message.message_id,
                                'date' : message.date,
                                'username' : message.chat.username,
                                'text' : message.text,
                            })
      with open('{}.json'.format(message.chat.id), 'w') as f:
        json.dump(data, f)
  return 0

def user_id_identifier(message):
  try:
    if message.chat.username:
      username = message.chat.username
    else:
      username = 'unknown'
    if not os.path.isfile('users.txt'):
      with open('users.txt', 'w') as f:
        f.write(username + '@1')
      return 1
    with open('users.txt', 'r') as f:
      data = f.read()
      for user in data.split():
        user_cut = user[: user.find('@')]
        user_id = user[user.find('@') + 1: ]
        if user_cut == username:
          f.close()
          return user_id
      last_user_id = user_id
    f.close()
    with open('users.txt', 'w') as f:
      f.write(data + ' ' + username + '@' + str(int(last_user_id) + 1))
      return int(last_user_id) + 1
  except Exception as e:
      raise e

@bot.message_handler(commands=['start'])
def send_welcome(message):
  user_info_json(message)
  #user_info(message)
  bot.reply_to(message, "HIII")
  bot.reply_to(message, 'Welcome! You are user number: {}'.format(user_id_identifier(message))+'\nCheck functionality by pressing here /help')

@bot.message_handler(commands=['help'])
def send_welcome(message):
        user_info_json(message)
        bot.reply_to(message,    'To find random error and avarage: /calculate\n'
                             'To approximate and build graphic of a liniar function: /graph\n'
                 'For fun just write instagram username like this: @theormove')

@bot.message_handler(commands=['calculate'])
def send_welcome(message):
  user_info_json(message)
  if message.text[10:]:
    measurements = []
    message.text.replace(' ','')
    for measurement in message.text[10:].split(','):
        try:
          measurements.append(float(measurement))
        except ValueError:
            bot.send_message(message.chat.id, 'INCORRECT INCOME! read /calculate')
            return 0
    if len(measurements) >= 2:
        bot.send_message(message.chat.id, avarage_measurement(measurements))
    else:
        bot.send_message(message.chat.id, 'Not enough data, need at least two measurements')
  else:
      bot.reply_to(message,
                   'To find random error and avarage: \nPrint all measurements using coma and space with /calculate or /c in the beginning like this:\n' +
                   '/c 12.4, 913.2, 1231, 8, 1237')

@bot.message_handler(commands=['c'])
def send_welcome(message):
  user_info_json(message)
  if message.text[2:]:
    measurements = []
    message.text.replace(' ','')
    for measurement in message.text[2:].split(','):
        try:
          measurements.append(float(measurement))
        except ValueError:
            bot.send_message(message.chat.id, 'INCORRECT INCOME! read /calculate')
            return 0
    if len(measurements) >= 2:
        bot.send_message(message.chat.id, avarage_measurement(measurements))
    else:
        bot.send_message(message.chat.id, 'Not enough data, need at least two measurements')
  else:
      bot.reply_to(message,
                   'To find random error and avarage: \nPrint all measurements using coma and space with /calculate or /c in the beginning like this:\n' +
                   '/c 12.4, 913.2, 1231, 8, 1237')

@bot.message_handler(commands=['graph'])
def send_welcome(message):
  user_info_json(message)
  #user_info(message)
  graph_data = {'0' : [],
                '1' : [],
                '2' : [],
                '2_name' : [],
                '0_name' : [],
                '1_name' : [],}
  if message.text[7:]:
      lines = message.text[7:].split('\n')
      n = 0
      try:
        for line in lines:
            graph_data['{}_name'.format(str(n))] = line.split(':')[0]
            for cor in line.split(':')[1].replace(' ', '').split(','):
               graph_data['{}'.format(str(n))].append(float(cor))
            n += 1
      except ValueError:
          bot.send_message(message.chat.id, 'INVALID INPUT! read /graph')
          return 0
      except IndexError:
          bot.send_message(message.chat.id, 'INVALID INPUT! read /graph')
          return 0
  else:
    bot.reply_to(message, 'Enter every point to aproximate and its margin with /graph on the first line like this:\n'
                          '/graph\n'
                          'whatever name you choose for OX: 1, 2, 3, 4\n'
                          'whatever name you choose for OY: 2, 3, 4, 5\n'
                          'margin: 0.2, 0.3, 0.4, 0.5\n'
                          '(you can change sending by enter in settings - > chat settings)')
    return 0
  if len(graph_data['0']) == len(graph_data['1']) == len(graph_data['2']):
    bot.send_message(message.chat.id, 'y = ax + b\n' + painting(graph_data))
    with open('graph.png', 'rb') as f:
          bot.send_photo(message.chat.id, f)
    os.remove('graph.png')
    return 0
  else:
      bot.send_message(message.chat.id, 'lengths of x, y and margin must be equal')

@bot.message_handler(func = lambda msg: msg.text and '@' in msg.text)
def at_answer(message):
        user_info_json(message)
        texts = message.text.split()
        at_text = find_at(texts)
        bot.reply_to(message, 'https://instagram.com/{}'.format(at_text[1:]))

@bot.message_handler(func = lambda msg: msg.chat.username )
def send_his_number(message):
        #user_info(message)
    user_info_json(message)

while True:
        try:
                bot.polling()
        except Exception:
                time.sleep(15)