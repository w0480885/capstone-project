#!/usr/bin/env python3

from flask import Flask

def add_sample_data():
    conn = sqlite3.connect(database)
    c = conn.cursor()
    c.execute("INSERT INTO events (title, start, end) VALUES (?, ?, ?)",
              ("An event that is scheduled for today!!",
               "2022-12-31T23:57:00",
               "2023-01-01T02:57:00"))
    conn.commit()
    conn.close()

@app.route("/api/events", methods=['GET'])
def get_events():
    conn = sqlite3.connect(database)
    c = conn.cursor()
    c.execute("SELECT * FROM events")
    events = [{"id": id, "title": title, "start": start, "end": end} for id, title, start, end in c.fetchall()]
    conn.close()
    return {"events": events}

@app.route("/api/events", methods=['POST'])
def add_event():
    data = request.json
    title = data.get('title')
    start = data.get('start')
    end = data.get('end')
    if title and start and end:
        conn = sqlite3.connect(database)
        c = conn.cursor()
        c.execute("INSERT INTO events (title, start, end) VALUES (?, ?, ?)", (title, start, end))
        conn.commit()
        conn.close()
        return {"message": "Event added successfully"}
    else:
        return {"error": "Invalid event data provided"}

if __name__ == '__main__':
    create_table()
    add_sample_data()
    app.run()
