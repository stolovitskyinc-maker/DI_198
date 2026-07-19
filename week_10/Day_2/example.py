import requests

def ask(prompt, model="qwen3:0.6b"):
    r = requests.post(
        "http://localhost:11434/v1/chat/completions",
        json={
            "model": model,
            "messages": [{"role": "user", "content": prompt}]
        }
    )
    data = r.json()
    if "choices" not in data:
        print("Error response:", data)
        return None
    return data["choices"][0]["message"]["content"]

print(ask("why is the sky blue? one sentence."))