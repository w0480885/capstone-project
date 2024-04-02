from flask import Flask

app = Flask(__name__)
allowed_methods = ["GET", "POST"]
events = []

def add_sample_data():
    events.append({
        "id": 1,
        "title": "An event that is scheduled for today!!",
        "start": "2022-12-31T23:57:00",
        "end": "2023-01-01T02:57:00"
    })

@app.route("/timer", methods=['GET'])
def get_events():
    return {"events": events}

@app.route("/api/events", methods=['POST'])
def add_event():
    data = events
    title = data.get('title')
    start = data.get('start')
    end = data.get('end')
    if title and start and end:
        event = {
            "id": len(events) + 1,
            "title": title,
            "start": start,
            "end": end
        }
        events.append(event)
        return {"message": "Event added successfully"}
    else:
        return {"error": "Invalid event data provided"}

if __name__ == '__main__':
    add_sample_data()
    app.run()
