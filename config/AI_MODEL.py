import openai
import speech_recognition as sr
import pyttsx3

# Set your OpenAI API key
openai.api_key = 'your-openai-api-key'

# Initialize the recognizer and text-to-speech engine
recognizer = sr.Recognizer()
engine = pyttsx3.init()

def speak(text):
    engine.say(text)
    engine.runAndWait()

def listen():
    with sr.Microphone() as source:
        print("🎤 Listening...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)
    try:
        query = recognizer.recognize_google(audio)
        print(f"🗣 You said: {query}")
        return query
    except sr.UnknownValueError:
        print("❌ Sorry, I didn't catch that.")
        return ""
    except sr.RequestError:
        print("⚠️ Network error.")
        return ""

def ask_openai(question):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  # or "gpt-4" if available
        messages=[
            {"role": "user", "content": question}
        ]
    )
    answer = response.choices[0].message["content"]
    return answer

def main():
    while True:
        query = listen()
        if query.lower() in ["exit", "quit", "stop"]:
            speak("Goodbye!")
            break
        if query:
            response = ask_openai(query)
            print(f"🤖 Assistant: {response}")
            speak(response)

if __name__ == "__main__":
    main()
