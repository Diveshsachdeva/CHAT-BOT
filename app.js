function talk() {
    var know = {
        "whats my name is ": "As i remember your name is Divesh",
        "hello": "Yes how may i help you ?",
        "Hello": "Yes how may i help you ?",
        "who am i": "your'e Divesh Sachdeva...! ",
        "my name is": "your'e Divesh Sachdeva ",
        "How are you": "Good :)",
        "how are you": "Good :)",
        "Your favourite Cricket Team": "My favorite cricket team is Mumbai Indians",
        "ok": "Thank You So Much ",
        "Bye": "Okay! Will meet soon..",
        "bye": "Okay! Will meet soon..",
        "kese ho ?": "bdia hu aap bataye",
        "what's my friend name ?": "Tanisha rawat am i right?",
        "yes": "okay thank you ask me more question..",
        "Yes": "okay thank you ask me more question..",
        "hi": "Yes hello..?",
        "divesh friend's name ?": "Tanisha rawat & Dhruv sharma am i right ? ",
        "Divesh friend's name ?": "Tanisha rawat & Dhruv sharma am i right?",
        "divesh father name ?": "Lalit  Sachdeva am i right?"  ,
        "Divesh Father name ?": "Lalit  Sachdeva am i right?",
        "how old is divesh ?": "18",
        "nothing": "ok..!",
        "divesh mother name ?": "Rekha  Sachdeva am i right?"  ,
        "Divesh Mother name ?": "Rekha  Sachdeva am i right?",

    
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    } else {
        document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
}


