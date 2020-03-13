import requests

url='http://127.0.0.1:3000/post-feedback'

def attack():
  for i in range(5):
    http = requests.post(url, data={'name': "buvan", 'phone': "1234567890", 'enroll': '17ucs068'})

attack()
