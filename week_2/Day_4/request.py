import requests

response = requests.get("http://api.open-notify.org/iss-now.json")

print(response.status_code)
print(response.text)
print(response.headers)

# info = response.json()

# position =info["iss_position"]

# print(position)